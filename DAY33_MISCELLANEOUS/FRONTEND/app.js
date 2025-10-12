// stu1={
//     name:"adam",
//     age:25,
//     marks:95,
//     getmarks:function(){
//         return this.marks;
//     },
// }

// stu2={
//     name:"adam",
//     age:25,
//     marks:95,
//     getmarks:function(){
//         return this.marks;
//     },
// }

// stu3={
//     name:"adam",
//     age:25,
//     marks:95,
//     getmarks:function(){
//         return this.marks;
//     },
// }




// let arr=[1,2,3];
// arr.sayHello=()=>{
//     console.log("Hello! I am arr");
// };



// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`My name is ${this.name}`);
// };


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
}
    talk(){
    console.log(`My name is ${this.name}`);
    }
};




let p1=new Person("adam", 25);
let p2=new Person("eve", 25);
