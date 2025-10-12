//Creating a server

const express = require('express');
const app=express();

let port =8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});




app.get("/",(req, res)=>{
    res.send("You contacted root path:400");
});

app.get("/:username",(req, res)=>{
    console.log(req.params);
    res.send("c");
});










