// const calculator = {
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }



// let n =prompt("Enter the number");
// let a=0;
// for(i=1;i<=10;i++){
//     a=n*i;
//     console.log(a);
// }



// let a=0;
// function mul(n){
//     for(i=1;i<=10;i++){
//         a=n*i;
//         console.log(a);
//     }
// }

const calculator = {
    num: 55,
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
}