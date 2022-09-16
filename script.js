import {data, types} from "./data.js";
const noteList = document.getElementById('noteList');
const archivedList = document.getElementById('archivedList');
const btnCreateNote = document.querySelector('#btnCreateNote');
const createNote = document.forms.createNote;
const categoryInp = createNote.category;
const titleInp = createNote.title;
const contentInp = createNote.content;
const dateInp = createNote.date;
const btnCreate = document.getElementById('btnCreate');
const editNoteForm = document.forms.editNote;
const editCategory =  editNoteForm.category;
const editTitle = editNoteForm.title;
const editContent = editNoteForm.content;
const editDate = editNoteForm.date;
const btnEdit = document.getElementById('btnEdit');
const details = document.querySelector('.details');
const archivedFiles = document.getElementById('archivedFiles');
const btnClose = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
let noteIndex;




function edit (id, i) {
    overlay.style.display = 'block';
   let arr = data.filter(el=>el.isArchived == false);
    editNoteForm.style.display = 'flex';
    editCategory.value = arr[i].category;
    editTitle.value = arr[i].name;
    editContent.value = arr[i].content;
    editDate.value = arr[i].dates;
    noteIndex = id;
  
}
window.edit = edit

function archivedNote (id) {
    let serchIndex = data.findIndex(item=>item.id == id)
    data[serchIndex].isArchived = true;
    renderNoteList();
    renderArchiveList();
}
window.archivedNote = archivedNote

function deleteNote (id) {
    let serchIndex = data.findIndex(item=>item.id == id)
    types[data[serchIndex].category].count-=1;
    data.splice(serchIndex, 1);
    renderNoteList();
    renderArchiveList();
}
window.deleteNote = deleteNote

const unarchiveNote=(id, i, arr)=>{
    let serchIndex = data.findIndex(item=>item.id == id)
    data[serchIndex].isArchived = false;
    renderNoteList();
    renderArchiveList();
    arr.splice(i, 1);
    showDetails(arr);
   
}
window.unarchiveNote = unarchiveNote


function showDetails(arr){
    overlay.style.display = 'block';
    details.style.display = "block";
    archivedFiles.innerHTML = '';
       arr.map((el, i, arr)=>{
        archivedFiles.innerHTML +=
        ` <div class="row">
        <div class="cell">${el.name}</div>
        <div class="cell">${el.created}</div>
        <div class="cell">${el.content}</div>
        <div class="cell">${el.dates}</div>
        <div class="cell">
          <div class="unzip" onclick = 'unarchiveNote(${el.id},${i},${JSON.stringify(arr)})'><i class="fa fa-inbox fa-2x"></i></div>
        </div>
        </div>`
    })
}
window.showDetails = showDetails


btnClose.onclick = ()=>{
    details.style.display = "none";
    overlay.style.display = 'none';
}

btnEdit.onclick = (e)=>{
    e.preventDefault();
      let serchIndex = data.findIndex(item=>item.id == noteIndex);
     data[serchIndex].category = editCategory.value;
     data[serchIndex].name =  editTitle.value;
     data[serchIndex].content = editContent.value;
    (editDate.value)? data[serchIndex].dates += `, ${editDate.value}`:data[serchIndex].dates += '';
     renderNoteList();
     renderArchiveList();
     editNoteForm.style.display = 'none';
     overlay.style.display = 'none'; 
}


const renderNoteList = ()=>{
    noteList.innerHTML= '';
    let filterArray = data.filter(el=>el.isArchived == false);
    filterArray.map((el, index)=>{
        noteList.innerHTML+=
        `<div class="row">
        <div class="cell w-10">
            <div class="icon">
                  ${el.icon} 
               </div>
            </div>
        <div class="cell">${el.name}</div>
        <div class="cell">${el.created}</div>
        <div class="cell">${types[el.category].name}</div>
        <div class="cell">${el.content}</div>
        <div class="cell">${el.dates}</div>
        <div class="cell w-10">
         <div class="edit" onclick = 'edit(${el.id}, ${index})'><i class="fa fa-pencil fa-2x"></i></div>
         <div class="archived" onclick = 'archivedNote(${el.id})'><i class="fa fa-archive fa-2x"></i></div>
         <div class="delete" onclick = 'deleteNote(${el.id})'><i class="fa fa-trash fa-2x"></i></div>
        </div>  
    </div>
        `
    }) 
}
renderNoteList();


const renderArchiveList = ()=>{
    archivedList.innerHTML = '';
    let filterArray = [...data.filter(el=>el.isArchived == true)];
    let objArr = [
        {name:'task',
        arr:filterArray.filter(el=>el.category == 'task')
         },
         {name:'thought',
        arr:filterArray.filter(el=>el.category == 'thought')
         },
         {name:'idea',
        arr:filterArray.filter(el=>el.category == 'idea')
         },
         {name:'quote',
        arr:filterArray.filter(el=>el.category == 'quote')
         },
    ]
    
    objArr.map((el,index)=>{
        if (el.arr.length ){
            archivedList.innerHTML+=
            ` <div class="row">
            <div class="cell w-10">
                  <div class="icon">
                      ${types[el.name].icon}
                   </div>
               </div>
            <div class="cell">${el.name[0].toUpperCase()+el.name.substring(1)}</div>
            <div class="cell">${(types[el.name].count-el.arr.length>0)?types[el.name].count-el.arr.length:0}</div>
            <div class="cell">${el.arr.length}</div>
            <div class="cell">
                <button class="btnDetail" onclick = 'showDetails(${JSON.stringify(el.arr)}, ${index})'>See more</button>
            </div>`

        }
    })
}
renderArchiveList();

const showCreateForm=()=>{
    overlay.style.display = 'block';
    createNote.style.display = 'flex';
}
btnCreateNote.addEventListener('click', showCreateForm )

const createNewNote = ()=>{
    let obj = {
    category : categoryInp.value,
    icon : types[categoryInp.value].icon,
    name : titleInp.value[0].toUpperCase()+titleInp.value.substring(1),
    created : new Date().toDateString(),
    content : contentInp.value,
    dates : dateInp.value,
    isArchived : false,
    id : Date.now().toString(),
    }
    data.push(obj);
    types[categoryInp.value].count+=1
    createNote.reset();
    renderNoteList();
    renderArchiveList();
    createNote.style.display = 'none'
    overlay.style.display = 'none';
}
btnCreate.addEventListener('click',createNewNote);
