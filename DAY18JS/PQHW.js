// let a=Math.ceil(Math.random()*5);
// console.log(a);



// let lambo={
//     name: "Lamborgini",
//     model: "Adventor",
//     Color: `Black`
// }

let person = {
    name: "Varun",
    age: 18,
    City: "Mysore"
}
// person.city="Mumbai";

person.State = "Maharashtra";
console.log(person);
///HOw to replace mysore to mumbai
person.City.replace(city = "Mumbai");
console.log(person)
///HOw to replace mysore to mumbai
delete person.City;
console.log(person)
person.City = "Mumbai";
console.log(person)
