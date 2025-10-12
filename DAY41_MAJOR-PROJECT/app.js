if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const express = require("express");//This is assigning the function that the Express.js module exports to the express variable. So, after this line of code is executed, express is a function that can be used to create an Express application
const app = express();//express() is a function call that returns an instance of an Express application. This instance is assigned to the variable app, which can then be used to set up routes, middleware, error handlers, and more
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utlis/ExpressError");
const cookieParser = require("cookie-parser");
const session = require('express-session');//This line is importing the express-session middleware. It creates a session object on the request object, which you can use to store session data
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

app.use(cookieParser());

const listingRouter = require("./routes/listing.js");//this line is used for- app.use("/", listings);
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl=process.env.ATLASDB_URL;











main()
    .then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));//to parse data from url to meet its requirement
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


const store= MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret: process.env.SECRET//does the secret code is to be same in store and sessionOptions
    },
    touchAfter:24*3600,
})




// app.use(session({
//     secret: 'foo',
//     store: MongoStore.create(options)
//   }));

store.on("error", ()=>{
    console.log("ERROR in MONGO SESSION STORE", err)
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() * 1000 * 60 * 60 * 6,
        maxAge: 1000 * 60 * 60 * 6,
        httpOnly: true,
    }
}




app.use(session(sessionOptions));
app.use(flash());//flash must be used just  before routes and middleware

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
//authenticate() Generates a function that is used in Passport's LocalStrategy
//serializeUser() Generates a function that is used by Passport to serialize users into the session
//deserializeUser() Generates a function that is used by Passport to deserialize users into the session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser= req.user;//here currUser is a variable , which stores the value of current user who logged in s
    next();
})

app.use("/listings", listingRouter);//jaha par be /listings aayega waha hum listingRouter use karenge
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode);
    res.render("error.ejs", { err })
    //res.status(statusCode).send(message);
})

app.listen(8080, () => {
    console.log("Server is listening")
})