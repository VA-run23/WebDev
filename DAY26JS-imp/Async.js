// async function greet(){
//     // throw "some random error"
//    // throw "404, page not found"
//     return "hello";
// }

// greet()
// .then(()=>{
//     console.log("Promise was successful");
// })
// .catch((err)=>{
//     console.log("Promise was rejeted with error: ", err)
// })








// function getNum(){
//     return new Promise ((resolve,reject) => {//resolve is a function that is called when the asynchronous operation is successful.
//                                              //reject is a function that is called when the asynchronous operation encounters an error.
//         setTimeout(()=>{                       //resolve and reject are indeed keywords used within Promises
//             let num =Math.ceil(Math.random()*10);
//             console.log(num);
//             resolve();//this resolves the promise
//         },1000)
//     });
// }
// async function demo(){
//    await getNum();//till this await function gets resolves the next function will not be called
//     await getNum();
//     getNum(); 
// }



// h1=document.querySelector("h1");
// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("purple", 1000);
//     } catch (err) {
//         console.log(err);
//     }
// }


// async function changeColor(color, delay) {
//     return new Promise((resolve) => {//this line is must for time delay for each
//         setTimeout(() => {
//          h1.style.color=color;
//             console.log(`Changing color to ${color}`);
//             resolve(); // Resolve the Promise after the delay
//         }, delay);
//     });
// }




// let url = "https://catfact.ninja/fact";
// fetch(url);

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (e) {
//         console.log("Error", e)
//     }
//     console.log("Bye");
// }





const url = "https://www.boredapi.com/api/activity";

// Fetch data using async/await
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Random activity:", data.activity);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}