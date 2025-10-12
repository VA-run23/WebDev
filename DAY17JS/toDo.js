// let toDo=[]

// let req=prompt("Please enter your choice");

// while(true){
//     if(req=="quit"){
//         console.log("Quitting App");
//         break;
//     }

//     if(req=="list"){
//         console.log("-------------")
//         for(list of toDo){
//             console.log(list);
//         }
//         console.log("-------------")
//     }else if(req == "add"){
//         let task =prompt("Please enter task you want to add");
//         toDo.push(task);;
//         console.log("task added")
//     }

//     req=prompt("Please enter your choice");
// }

let toDo = []


while (true) {
let req = prompt("Please enter your choice");

    if (req == "quit") {
        console.log("Quitting App");
        break;
    }

    if (req == "list") {
        console.log("---------------");
        for (let i = 0; i <= toDo.length; i++) {
            console.log(i, toDo[i]);
        } console.log("---------------");
    } else if (req == "add") {
        let task = prompt("Please enter the task");
        toDo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt("Please enter the task index");
        toDo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("Wrong request");
    }
}