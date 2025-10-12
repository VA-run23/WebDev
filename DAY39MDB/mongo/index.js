const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test'); dont use this code rather use the below set of codes
main().then(() => {
    console.log(res);
})
    .catch(err => console.log("connection successful"));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("user", userSchema);
// User.insertMany([
//     {name:"Tony", emial:"tony@zohomail.com", age:50},
//     {name:"Peter", emial:"peter@zohomail.com", age:30},
//     {name:"Bruce", emial:"bruce@zohomail.com", age:47},
// ])


// User.find({age:{$gt:31}}).then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.deleteMany({name:"Tony"}).then((res)=>{
//     console.log(res);
// });

User.findOneAndDelete({ age: { $gt: 31 } }, { new: true }).then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    })


const user = mongoose.model("user", userSchema);
const Employee = mongoose.model("Employee", userSchema);
