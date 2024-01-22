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
        todo = parseInt(readlineSync.question('enter your awnser'));
        if(todo===1)
        {
            validate();

        }
        else if(todo===2)
        {
            add();
        }


    }


    console.log("here is the new todolist");



    console.log(Todolist);

}



function add() {
    console.log("what task do you want to add?");
    let toadd = readlineSync.question();

    Todolist.push(toadd);


}

function validate() {
    console.log("witch task is done?")

    for(let i =0; i<Todolist.length;i++)
    {
        console.log((i+1)+" "+Todolist[i]);
    }

    let tovalidate= parseInt(readlineSync.question('enter your awnser'));
    Todolist.splice(tovalidate-1)




}













