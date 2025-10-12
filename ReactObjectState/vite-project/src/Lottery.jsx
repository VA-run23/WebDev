import { useState } from "react"   
import { genTicket,} from "./helper";  import PropTypes from "prop-types"
import Ticket from "./Ticket.jsx"//this is the ticket component
import Button from "./Button.jsx";

export default function Lottery({n=3, winCondition}){//here n and winningSum are props with default values
let [ticket, setTicket]=useState(genTicket(n));//here the ticket state variable is sent as props in return statement
let isWinning=winCondition(ticket);

let buyTicket=()=>{//buy ticket is actually a function which is storing a value
    setTicket(genTicket(n))
};

    return(
        <div className="">
            <h1>Lottery game</h1>
            <Ticket ticket={ticket}/>
            {/* passing state variable (ticket)as props */}
            
            <h3>{isWinning && "congratulations, you won"}</h3>
            <Button action={buyTicket}/>
            </div>   
    )
}

Lottery.propTypes={
   n:PropTypes.number,
    winningSum:PropTypes.number,
    winCondition:PropTypes.func,
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react"
// import "./Lottery.css"
// import { genTicket, sum } from "./helper";
// import "./helper.js"

// export default function Lottery(){
// let [ticket, setTicket]=useState(genTicket(3));
// let isWinning=sum(ticket)===15;

// let buyTicket=()=>{
//     setTicket(genTicket(3))
// };

//     return(
//         <div className="">
//             <h1>Lottery game</h1>
//             <div className="ticket">
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div>
//             <h3>{isWinning && "congratulations, you won"}</h3>
//             <button onClick={buyTicket}>Buy new ticket </button>
//         </div>   
//     )
// }














































