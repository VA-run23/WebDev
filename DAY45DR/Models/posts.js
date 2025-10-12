//one to many approach 3
const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const userSchema = new Schema({
  username: String, 
  email:String,
});


const postSchema = new Schema({
    content: String,
    likes: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});

const User=mongoose.model("User", userSchema);
const Post=mongoose.model("Post",postSchema);

// const addData= async ()=>{
//     let user=await User.findOne({username: "Rahul kumar"});
//     let post2= new Post({
//         content: "Hello Bye",
//         likes: 7,
        
//     });
//     post2.user=user;
//     // await user.save();
//     await post2.save();
// }

const getData = async () =>{
   let result= await Post.findOne({}).populate("user", "email");
   console.log(result);
}
getData();