const express = require('express');
const app = express();

// app.use((req,res, next) => {
//     let {query} = req.query;//const instead of query doen't work
//     console.log(query)
//     console.log(`Hi, I am middleware`);
//     next();
// })
app.use((err, req,res, next)=>{
    console.log("----error----")
    console.log(err);

})

app.get("/err",(err, req,res)=>{
    console.log(err);
})


app.use("/api", (req, res, next)=>{
    let {token}= req.query;
    if(token === "giveaccess"){
        return next();
    }
    res.send("Access denied");
})

app.get('/', ()=>console.log('Hello World'));//this function is not the 'next()' as it doesn't have the middleware

app.get("/api", (req, res)=>{
    res.send("data")
})




//logger
// app.use((req,res, next)=>{
//     req.time= Date.now();
//     console.log(req.method, req.path, req.time, req.hostname) ;
//     next();
// })






app.get("/random", (req, res) => {
    res.send("This is a random page");
})

app.listen(8080, () => {
    console.log(`server is listening`);
});