// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();




// //start-a
// function saveToDB(data, success, failure) {
//     let internetSpeed = Math.ceil(Math.random() * 10);
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure()
//     }
// }

// saveToDB(//arguements seperated by commas
//     "apnacollege",//this is data
//     () => {//this is success function
//         console.log("SUCCESS: Your data was saved: ");
//     },
//     () => {//this is failure function
//         console.log("FAILURE: Weak connection! Data not saved")
//     })

// //end-a


// //start-b
// h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                 })
//             })
//         })
//     })
// })
// //end-b


// //start-c
// function savetoDb(data) {
//     return new Promise((resolve, reject) => {//The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
//         let internetSpeed = Math.ceil(Math.random() * 10);//Construct :A class or function that specifies the type of the object instance.
//         if (internetSpeed > 4) {
//             resolve("Success: Data was saved ");
//         } else {
//             reject("Failure: Weak connection");
//         }
//     });
// }

// savetoDb("apnaCollege") //promise object
//     .then((result) => {
//         console.log("result of promise:", result);
//         console.log("Data1 saved: Promise was resolved");
//         return savetoDb("Hello world");
//     })
//     .then((result) => {
//         console.log("result of promise:", result);
//         console.log("Data2:Saved");
//         return savetoDb("Varun");
//     })
//     .then((result) => {
//         console.log("result of promise:", result);
//         console.log("Data3: Saved")
//         return savetoDb("Hello world")
//     })
//     .catch((error) => {
//         console.log("result of promise:", error);

//         console.log("Promise was rejected");
//     })
// //end-c