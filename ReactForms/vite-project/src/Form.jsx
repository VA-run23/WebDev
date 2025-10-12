import { useState } from "react"

export default function Form(){
    let [formData, setFormData]=useState({
        fullName:"",
        userName:"",
        password:""
    })

    let handleInputChange=(event)=>{
        // ///fieldname or newValue ko seperately assign karne se baither hai ki return me hi change kardo
        // let fieldName=event.target.name;//yeh field kaha se ayega? target ke name se aayega, so target ke andhar name property/attribute rakni padegi
        // let newValue=event.target.value;
        // // ////console.log(fieldName)//this logs the name attribute of target element, to match with state variable name ,the name attribute in target element must also be sames 
        // // console.log(newValue);
        // setFormData((currData)=>{
        //     // ///currData[fieldName]=newValue;//instead of this line of code we can write inside return statement only 
        //     return{...currData, [fieldName]:newValue}//[computed property name]

    
        
        setFormData((currData)=>{
            return{...currData, [event.target.name]:event.target.value}//[computed property name]
        })
    }
    let handleSubmit=(event)=>{
        event.preventDefault();//we have stopped the default changes, so we need to again set it as it was earlier by next line of codes
        console.log(formData)
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
    }

    return(
        // hum joh name form input element ko denge woh state variable ke name ke sath matck karna chahiye, EG:fullName (in state variable ) must match with (name attribute of) input  element
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name: </label>
            <input placeholder="Enter fullname" type="text" value={formData.fullName /*because formData is now a objecgt */}  id="fullName" onChange={handleInputChange} name="fullName"></input>{/*Ab jo bhi input mein aayegi who fullName wale state variable k andhar store hogi    */}
            {/* it is maintaining its own internal state by default , we can associate a react state with it by creating state variable */}
            <br/>
            <br/>
            <label htmlFor="username">Username: </label>
            <input placeholder="Enter username" type="text" value={formData.userName}  id="username" onChange={handleInputChange} name="userName"></input>
            <br/>
            <br/>
            <label htmlFor="password">Password: </label>
            <input placeholder="Enter password" type="text" value={formData.password}  id="password" onChange={handleInputChange} name="password"></input>
            <br/>
            <button>Submit</button>
        </form>
    )
}



























// import { useState } from "react"

// export default function Form(){
//     let [fullName, setFullName]=useState("")
//     let [userName, setUserName]=useState("")//naya input hai toh naya state varable banana padega, har ek input ke sath ek naya state variable associate karenge

   // let handleNameChange=(event)=>{  
    //     setFullName(event.target.value) /* setFullName method fullName wale variable mein changes la raha hai*/
    //     // console.log(event.target.value)
    //     /* */
    //     /*this set new value is not dependent on previous value, so no need to create a arrow function */
    // }/*hame pata hai ki har ek event mein ek event object hota hai */

    // let handleUsername=(event)=>{  
    //     setUserName(event.target.value) 
    // }

//     return(
//         <form>
//             <label htmlFor="fullName">Full Name: </label>
//             <input placeholder="ENter fullname" type="text" value={fullName}  id="fullName" onChange={handleNameChange}></input>{/*Ab jo bhi input mein aayegi who fullName wale state variable k andhar store hogi    */}
//             {/* it is maintaining its own internal state by default , we can associate a react state with it by creating state variable */}
//             <br/>
//             <br/>
//             <label htmlFor="username">Username: </label>
//             <input placeholder="ENter username" type="text" value={userName}  id="username" onChange={handleUsername}></input>
//             <button>Submit</button>
            
            
//         </form>
//     )
// }