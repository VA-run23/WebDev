import { useState, useEffect } from "react"

export default function Counter(){
    let [countx, setCountx]=useState(0);
    let [county, setCounty]=useState(0);


    let incCountx=()=>{
        setCountx((currCount)=>currCount+1)
    }
    let incCounty=()=>{
        setCounty((currCount)=>currCount+1)
    }

    useEffect(()=>{
        console.log("This is a side effect")
    }, [countx, county])
    return(
        <div>
            <h3>count-x={countx}</h3>
            <button onClick={incCountx}>+1</button>
            <h3>count-y={county}</h3>
            <button onClick={incCounty}>+1</button>
        </div>
    )
}
























// import { useState, useEffect } from "react"

// export default function Counter(){
//     let [count, setCount]=useState(0);
//     let incCount=()=>{
//         setCount((currCount)=>currCount+1)
//     }

//     useEffect(()=>{
//         console.log("This is a side effect")
//     })
//     return(
//         <div>
//             <h3>count={count}</h3>
//             <button onClick={incCount}>+1</button>
//         </div>
//     )
// }