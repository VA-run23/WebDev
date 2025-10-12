// let arr=[1,2,3,4,5,66,77,34,5,65,75,85]
// let num =23;
// function getElements(arr,num){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr, num);



// let str="abcdabcdefgggh";
//  getUnique=(str)=> {
//     let ans="";
//     for(i=0; i<str.length; i++){
//         let currChar=str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans+=currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);





let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let longest = "";
    let max_length = 0;

    for (let i = 0; i < country.length; i++) {
        if (country[i].length > max_length) {
            longest = country[i];
            max_length = country[i].length;
        }
    }

    return longest;
}

// Example usage:
let longestCountry = longestName(country);
console.log(`The longest country name in the list is: ${longestCountry}`);
