const express= require("express");
const app=express();//Express has automatically required the ejs so no need to require again 
const path =require("path");
const port=8080;

//// app.use(express.static("public"));//This line make all the files in "public" available
            //or
app.use(express.static(path.join(__dirname,"public")));//Can send multipple static files


app.set("view engine", "ejs");//If the next line is not written, then you need to start the server from the path where you create this file 
app.set("views", path.join(__dirname, "/views"));//By this line, you can start server from any directory

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

// app.get("/rolldice", (req, res)=>{
//     res.render("rolldice.ejs");
// });

//or

app.get("/rolldice", (req, res)=>{
    let rollVal= Math.ceil(Math.random()*5);
    // res.render("rolldice.ejs",{num:rollVal}); ////or
    res.render("rolldice.ejs",{rollVal});
    console.log("Dice rolled");

});

app.get("/ig/:username",(req, res)=>{
    //// const followers= ["adani", "alex", "steve"];
    /// let {username}=req.params;
    ////console.log(username);//This line just prints the user=rname in terminal

    let {username}=req.params;
    const instaData =require("./data.json");
    const data=instaData[username]
    if(data){
        res.render("instagram.ejs", {data}); //This line helps to send data to the destined eks file
    } else{
        res.render("error.ejs");
    }
});


app.get("/hello", (req, res)=>{
    res.send("Hello");
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});