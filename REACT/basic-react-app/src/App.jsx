import "./App.css"
// import ProductTab from "./ProductTab.jsx";
// import Product from"./Product.jsx"
// import ProductTab from "./ProductTab.jsx"
// import Description from "./Description" //idhar ka importing nam or return me render karne ke liye use kiya gaya tag same hona chahiye


import Button from "./Button.jsx"

function App() {//this is only the App component
//call a major component , from called component call next smaller component
  return (
    <>
    {/* <h2>Blockbuster deals</h2> */}
    {/* <ProductTab/> */}
    <Button/>
    </>
  )
}
export default App;










// import MsgBox from "./MsgBox";
// // import PropTypes from 'prop-types'
// function Msg(){
//     return(
//         <>
//      <MsgBox userName="JOhn" textColor="blue"/>
//         </>
//     )
// }
// export default Msg;