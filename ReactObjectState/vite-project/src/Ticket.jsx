import PropTypes from "prop-types";
import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ticket}){//using props ticket
    return(
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, idx)=>(
                // <TicketNum num={num} key={idx}/>
             <TicketNum num={num.num} key={idx}/> // assuming num is an object with a property num,,,,,,,,,,,exrtracting num from ticket and again using it as props

            ))}
        </div>
    )
}

Ticket.propTypes = {
    ticket: PropTypes.array.isRequired,
};
