const readlineSync = require('readline-sync');

//const name = readlineSync.question('Entrez votre nom : ');
//console.log('Bonjour, ' + name + '!');


console.log("hello, there are the things you need to do")
let Todolist = ["Maths", "Physics", "Sports", "cooking" ];


for(let i =0; i<Todolist.length;i++)
    {
        console.log(Todolist[i]);
    }


WhatToDo();
function WhatToDo() {
    console.log("wat do you want to do?")
    console.log("1- validate a task")
    console.log("2- add a task")
    let todo=0;
    while (todo!==1 && todo!==2)
    {

        todo = readlineSync.question('enter your awnser');
    }



    console.log(todo);
}












