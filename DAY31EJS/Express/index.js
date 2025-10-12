//Creating a server

const express = require('express');
const app=express();

// console.dir(app);
// console.log(app);
let port =8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});


// app.use((req, res)=>{
//     // console.log(req);
//     console.log("Request received");
//     let code="<H1>FRuits<ol><li>Apple</li><li>Orange</li></ol></H1>";//You can even send object, html, string and even an array 
//     res.send(code);
// });

app.get("/",(req, res)=>{
    res.send("You contacted root path");
});

app.get("/search",(req, res)=>{
    res.send("You contacted search path");
});

app.get("/queries",(req, res)=>{
    res.send("You contacted queries path");
});
app.post("/",(req, res)=>{
    res.send("You sent a post request to root ");
});









