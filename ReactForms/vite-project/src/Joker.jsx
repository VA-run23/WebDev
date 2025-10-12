import { useState } from "react"

export default function Joker(){

    const URL="https://official-joke-api.appspot.com/random_joke"
    const getNewJoke= async ()=>{
        let res=await fetch(URL)
        let jsonResponse= await res.json();
        console.log(jsonResponse)
        setJoke({setup:jsonResponse.setup,punchLine:jsonResponse.punchline})
    }
    

    let[joke, setJoke]= useState(getNewJoke);//if this line of code doesn't work 
    // let[joke, setJoke]= useState(() => getNewJoke());




    return(
        <div>
            <h4>Joker jokes</h4>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchLine}</h2>

            <button onClick={() => getNewJoke()}>New Joke</button>
        </div>
    )
}