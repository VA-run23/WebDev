const express=require("express");
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}));//Middleware
app.use(express.json({extended:true}));      //Middleware


app.get("/register", (req,res)=>{//This is same register as in the form
    let {user,password}=req.query;//The form input is obtained in the form of req.query and it is deconstructed with the help of object, //////If we do the same thing in post request "undefined" will be displayed
    res.send(`Standard GET Response , Welcome ${user}`);
});

app.post("/register", (req,res)=>{ 
    let {user,password}=req.body;
    console.log(req.body)
    res.send(`Standard GET Response , Welcome ${user}`);
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});