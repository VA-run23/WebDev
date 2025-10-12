import PropTypes from "prop-types";

import "./TicketNum.css"

export default function TicketNum({num}){
    return(
       <p> <span className="TicketNum">{num}</span></p>//here the prop from ticket.jsx
    )
}

TicketNum.propTypes={
    num:PropTypes.number,
 }
 
 