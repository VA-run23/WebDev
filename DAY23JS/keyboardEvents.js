// let btn= document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button clicked");
// })
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("Button clicked");
// })

let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("Key was pressed");
// })
// inp.addEventListener("keyup",function(){
//     console.log("Key was released");
// })

// console.dir(inp)

// inp.addEventListener("keydown",function(event) {
// console.log(event);
// console.log(event.key);
// console.log(event.code);
// })


inp.addEventListener("keydown", function (event) {
    console.log("Code= ", event.code);
    if (event.code == "KeyU") {
        console.log("Character moves UP");
    } else if (event.code == "KeyD") {
        console.log("Character moves DOWN");
    } else if (event.code == "KeyL") {
        console.log("Character moves LEFT");
    } else if (event.code == "KeyR") {
        console.log("Character moves RIGHT");
    } else if (event.code == "ArrowUp") {
        console.log("Character moves UP");
    } else if (event.code == "ArrowDown") {
        console.log("Character moves UP");
    } else if (event.code == "ArrowLeft") {
        console.log("Character moves UP");
    } else if (event.code == "ArrowRight") {
        console.log("Character moves UP");
    }
});