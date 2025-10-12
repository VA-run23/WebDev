function genTicket(n){
    let arr= new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = { num: Math.floor(Math.random() *10) };
    }
    return arr;
}


function sum(arr){
    return arr.reduce((sum, curr) => sum + curr.num, 0)
}

    //other wise it will start from 0
export {genTicket, sum}