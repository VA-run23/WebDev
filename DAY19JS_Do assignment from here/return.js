// function sum(a,b){
//     return a+b;
// }



// sum(sum(4,5),5);
// console.log(sum())
// console.log(sum(sum(1,2),3));

// let sum=0;
// for( let i=1; i<=n; i++){
//     console.log(i)
//     return (sum=sum+i)
// }



// function getSum(n){
//     let sum =0;

//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return  sum;
// }

//Create a Function that returnss the concatenation of all strings in an array

let arr = ["hi", "hello", "bye"];

function concat(arr) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}