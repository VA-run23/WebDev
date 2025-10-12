const mongoose = require("mongoose");
const {Schema}=mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
  name: String,
  addresses: [{
    _id:false,//by this line id for individual addresses will be cancelled
    location: String,
    city: String,
  }]
});

const User = mongoose.model("User", userSchema);
const addUsers = async () => {
  let user1 = new User({
    username: "Sherlockhomes",
    addresses: [{
      location: "Baker street",
      city: "London",
    }]
  });
  user1.addresses.push({ location: "332 Walstreet", city: "London" });
  let result = await user1.save();
  console.log(result);
}
addUsers();