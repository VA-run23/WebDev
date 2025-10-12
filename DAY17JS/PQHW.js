// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log(`Array before removing [${arr}]`);
// let n = prompt("Enter the number you want to remove");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);


// let num=prompt(`Enter the number`);
// digits=num.length;
// console.log(`The length of the digit is ${digits}`);


// let num=prompt(`Enter the number`);
// let sum=0;
// for(i=0;i<num.length;i++){
//     sum+=parseInt(num[i]);
// }
// console.log(`The sum is ${sum}`);


//    As in the solution
// let num=prompt(`Enter the number`);
// let sum=0;
// for(i=0;i<num.length;i++){
//     sum=
// }





// let n=prompt("Enter the number: ");
// let factorial=1;
// for(i=n; i>=1;i--){
//     factorial=factorial*i;
// }
// console.log(factorial);



//Q5
let arr=[1,2,3,4,5,1]
let larger=0;
for(i=0;i<=arr.length;i++) {
    if(arr[i]>larger){
        larger=arr[i];
    }
}
console.log(larger);