// // let arr=[1,2,3,4 ,5]

// // arr.forEach((el) => {//el  refers to elements of array, actually it can be named anything
// //     console.log(el)
// // })

// // arr.forEach(function(el){
// //     console.log(el)
// // })

// // //or
// // let print = function(el) {
// //     console.log(el);
// // };

// // arr.forEach(print);





// let students= [
//     {
//         name:"aman",
//         marks:95,
//     },
//     {
//         name:"shhradha",
//         marks:94.4,
//     },
//     {
//         name:"varun",
//         marks:92,
//     }
// ];
// // students.forEach((student)=> {//student in forEach must be same in console.log
// //     console.log(student.marks);
// // });



// // let arr = [95, 94.4,90];

// // // Calculate GPA using map
// // let gpa = arr.map((el) => {
// //     return el * 0.1;
// // });

// // console.log("Calculated GPA:", gpa);



// // let num=[1,2,3,"$" ,4];

// // let a= num.map((b) =>  {
// //     return b+b;
// // });
// // //output
// // //[2,4,6,'$$', 8]



// // let nums =[1,2,3,4,5,67,778,889,674,9234];
// // let ans = nums.filter((el) => {
// //     return el %2 ===0;
// // })


// // First Attempt (Subtraction)
// //Subtracted Value: -19
// const arr = [1, 2, 3, 4, 5, 6];
// const subtractedValue = arr.reduce((res, el) => res - el);

// console.log("Subtracted Value:", subtractedValue);



// // Second Attempt (Summation)
// // 1
// // 3
// // 6
// // 10
// const nums = [1, 2, 3, 4];
// const finalValue = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });

// console.log("Calculated final value:", finalValue);