// let btn = document.querySelectorAll("button");


// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.onclick=sayhello;
//    c
// }
// function sayhello(){
//     alert("Hello");
// }


// btn.addEventListener("click", function() {
//     console.log("Button clicked")
// });




let btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.onmouseenter=()=>console.log("You entered a button");
    // btn.addEventListener("click", ()=>alert("Hello"));
    // btn.addEventListener("click", ()=> console.log("ApnaCollege"));
    btn.addEventListener("dblclick", () => console.log("Double clicked"));
}