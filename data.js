export let data = [
    {
        category: "task",
        icon: '<i class="fa fa-shopping-cart fa-2x"></i>',
        name: "Shopping list",
        created:'Wed Sep 14 2022',
        content: "Tomatoes, bread",
        dates: "3/5/2023",
        isArchived:false,
        id:1
    }, 
    {
        category: "thought",
        icon: '<i class="fa fa-briefcase fa-2x"></i>',
        name: "The theory of evolution",
        created:'Mon Apr 18 2022',
        content: "The evolution of people life",
        dates: "3/10/2022",
        isArchived:false,
        id:2
    },
    {
        category: "idea",
        icon: '<i class="fa fa-lightbulb-o fa-2x"></i>',
        name: "New Feature",
        created:'Wed May 10 2022',
        content: "Implement new project",
        dates: "30/9/2022",
        isArchived:false,
        id:3
    },
    {
        category: "quote",
        icon: '<i class="fa fa-quote-right fa-2x"></i>',
        name: "William Gaddis",
        created:'Tue Jun 09 2022',
        content: "Power doesn`t corrupt people",
        dates: "30/9/2022",
        isArchived:true,
        id:4
    },
    {
        category: "idea",
        icon: '<i class="fa fa-lightbulb-o fa-2x"></i>',
        name: "Create new projact",
        created:'Mon Sep 14 2022',
        content: "Implement new project",
        dates: "28/9/2022",
        isArchived:true,
        id:5
    },
    {
        category: "task",
        icon: '<i class="fa fa-shopping-cart fa-2x"></i>',
        name: "To do...",
        created:'Wed Sep 14 2022',
        content: "Study english",
        dates: "25/9/2022",
        isArchived:true,
        id:6
    },
    {
        category: "quote",
        icon: '<i class="fa fa-quote-right fa-2x"></i>',
        name: "Barack Obama",
        created:'Tue Feb 07 2021',
        content: "I'm a warrior for the middle class",
        dates: "30/11/2022",
        isArchived:false,
        id:7
    },
    
]
export const types = {
    task:{
        name: "Task",
        icon:'<i class="fa fa-shopping-cart fa-2x"></i>',
        count: 2
    },
    thought:{
        name: "Random Thought",
        icon:'<i class="fa fa-briefcase fa-2x"></i>',
        count: 1},
    idea:{
        name: "Idea",
        icon:'<i class="fa fa-lightbulb-o fa-2x"></i>',
        count:2},
    quote:{
        name: "Quote",
        icon:'<i class="fa fa-quote-right fa-2x"></i>',
        count:2}
}

