// // let a=Number(prompt("Enter value of a: "));
// // let b=Number(prompt("Enter value of b: "));

// const sum =(a,b) => {
//     console.log(a+b);
// }


let numbers = [1, 2, 3, 4, 5];

// We pass an arrow function as a callback function to the .map() method
let squares = numbers.map(number => number * number);

console.log(squares); // Output: [1, 4, 9, 16, 25]
