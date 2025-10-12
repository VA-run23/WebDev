const mongoose = require('mongoose');
main().then(() => {
    console.log(res);
})
    .catch(err => console.log("connection successful"));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    }
});


let a = 120;
const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Math for JEE-ne",
    author: "  RD Sharma",
    price: 1200,
});
let book2 = new Book({
    title: "Math for JEE-ne",
    author: "  RD Sharma",
    price: a,
});
book2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

// book1.save().then((res)=>{
//     console.log(res);
// })  .catch((err)=>{
//         console.log(err);
// });