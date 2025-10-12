const mongoose = require("mongoose");
const Chat= require("./models/chat");

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

let chat2 = new Chat({
    from: "neha",
    to: "Priya",
    message: "Hello",
    created_at: new Date(),
});
chat2.save().then((res) => {
    console.log(res);
})

