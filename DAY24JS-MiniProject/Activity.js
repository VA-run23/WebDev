let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let btn1 = document.createElement("button");
    btn1.innerText = "delete";
    btn1.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(btn1);

    // console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        //    console.log(listItem);
        console.log("deleted");
    }
})

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         // console.log("Element deleted");
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
