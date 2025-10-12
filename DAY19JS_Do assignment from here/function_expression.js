// let sum = function(a, b){
//     return a+b;
// }
// let greet = function(){
//     console.log("Hello");
// }


function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet = function () {
    console.log("Hello")
}

let hello =() =>console.log("Bonjour")
// multipleGreet(greet, 10);
multipleGreet(function () { console.log("Namaste") }, 100);