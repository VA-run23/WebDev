// let form= document.querySelector("form");

// //Extracting form DATA
// form.addEventListener("submit", function(event){
//     event.preventDefault();//, it ensures that the form does not perform its default action (such as navigating to a new page or refreshing the current page) when the user submits it.
//     console.dir(form);

//     let user = document.querySelector(".user");
//     let pass= document.querySelector(".pass");
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, you passowrd is ${pass.value}`);
// });





// let user=document.querySelector(".user");
// user.addEventListener("change",function(event) {
//     event.preventDefault();
//     console.log("Input changed");
//     console.log("Final value =", this.value)
// });
// user.addEventListener("input",function(event) {
//     event.preventDefault();
//     console.log("Input event");
//     console.log("Final value =", this.value)
// });



// let pass=document.querySelector(".pass");
// pass.addEventListener("change",function(event) {
//     // event.preventDefault();
//     console.log("Input changed");
//     console.log("Final value =", this.value)
// });
// pass.addEventListener("input",function(event) {
//     event.preventDefault();
//     console.log("Input event");
//     console.log("Final value =", this.value)
// });




// let inp = document.querySelector("#text");
// let p = document.querySelector("p");
// inp.addEventListener("input", function () {
//     console.log(inp.value);
//     p.innerText = inp.value;
// })
