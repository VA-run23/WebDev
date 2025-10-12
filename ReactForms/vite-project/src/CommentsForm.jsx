import { useState } from "react"

export default function CommentsForm(){
    let [formData, setFormData]=useState({
        username:"",
        remarks:"",
        rating:5,
    })

    let handleInputChange=(event)=>{
        setFormData(currData => ({
            ...currData, 
            [event.target.name]: event.target.value
        }));
    };
    

    let handleSubmit=(event)=>{
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5,
        })
    }
    return (
        <div> 
            <h4>give a comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username </label>
                <input type="text" placeholder="username"  id="username" value={formData.username} onChange={handleInputChange} name="username"/><br/><br/>

                <label htmlFor="remarks">Remarks </label>
                <textarea placeholder="remarks"  id="remarks" value={formData.remarks}  onChange={handleInputChange} name="remarks">Remarks</textarea><br/><br/>

                <label htmlFor="ratings">Ratings </label>
                <input type="number" placeholder="rating" id="ratings"  min={1} max={5} value={formData.rating}  onChange={handleInputChange} name="rating"/><br/><br/>
                <button>Add a comment</button>

            </form>
        </div>
    )
}