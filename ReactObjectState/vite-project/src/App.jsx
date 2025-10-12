import './App.css'
import Lottery from './Lottery'; import proptypes from "prop-types"
// import { sum } from './helper';

function App() {
  let winCondition=(ticket)=>{
    // return sum(ticket)===15;
    // return ticket.every((num)=>num===ticket[0]);
    return ticket[0]===0
  }

  return (
    <>
   <Lottery n={3}  winCondition={winCondition}/>{/*here we are passing the winCondition*/}
   {/* calling Lottery.jsx from here */}
    </>
  )
}

export default App
App.proptypes={
  sum:proptypes.number,
}