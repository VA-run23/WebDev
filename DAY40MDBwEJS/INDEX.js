const express = require('express');
const app = express();
const path = require("path");//this built-in module helps in working with file and directory paths.
                             //The path module is part of Node.js and is used to handle file paths.
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));// This sets the directory for storing your application's views (usually EJS templates in this case).
app.set("view engine", "ejs");//This tells Express to use the EJS templating engine for rendering dynamic content.
app.use(express.static(path.join(__dirname, "public")));///This allows serving static files (like images, CSS, and JavaScript) from the "public" directory.
app.use(express.urlencoded({ extended: true }));//This middleware parses incoming form data encoded in URL-encoded format (extended:true allows nested objects in the data).
app.use(methodOverride("_method")); //This configures the methodOverride middleware to use the hidden input field named "_method" for overriding the original HTTP method sent in forms.

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => {
        console.log(err)
    });


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
//Index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
})

//new route
// app.get("/chats/new", async (req, res, next) => {                   //Throwing error from non-asynchronous function
//     throw new ExpressError(404, "Page Not found");
//     res.render("new.ejs");
// });


//create route
app.post("/chats", asyncWrap(async (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
}));



function asyncWrap(fn){
    return function(req,res, next){
        fn(req,res,next).catch((err)=>next(err));
    };
};



//NEW-show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(500, "Chat not found"));
    }
    res.render("edit.ejs", { chat });
}));


//edit route
app.get("/chats/:id/edit", asyncWrap(async (req, res) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
}));

//Update route
app.put("/chats/:id", asyncWrap(async (req, res) => {
    
        let { id } = req.params;
        let { message: newMsg } = req.body;
        console.log(newMsg);
        let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { runValidators: true, new: true })
        console.log(updatedChat);
        res.redirect("/chats");
}));

//Delete route
app.delete("/chats/:id", asyncWrap(async (req, res) => {
   
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }
));


app.get("/", (req, res) => {
    res.send("Working root ");
});



app.use((err, req,res,next)=>{
    console.log(err.name);
    next(err);
})
//error handling middleware
app.use((err, req, res) => {
    let { status = 500, message = "some error occured" } = err;
    res.status(status).send(message);
})



app.listen(8080, () => {
    console.log("App is listening")
});