const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
};

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Order",//Model's name
  }]
});

// customerSchema.pre("findOneAndDelete", async()=>{//pre delete hone se phele execute hota hai
//   console.log("Pre Middleware")
// });


customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
      let res = await Order.deleteMany({ _id: { $in: customer.orders } });
      console.log(res, "Post deletion");
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


////
// const addCustomer = async () => {
//   let cust1 = new Customer({
//     name: "Rahul",
//   });
//   let cust2 = new Customer({
//     name: "Sohail",
//   });
//   let order1 = await Order.findOne({ item: "Chips" });
//   let order2 = await Order.findOne({ item: "Chocolate" });
//   // let order3 = await Order.findOne({ item: "Samosa" });


//   cust1.orders.push(order1);
//   cust1.orders.push(order2);

//   let result = await cust1.save();
//   console.log(result);
// }


// addCustomer();
//   const adddOrders= async () =>{
//      let res=await Order.insertMany([
//         {item:"Samosa", price:12},
//         {item:"Chips", price:10},
//         {item:"Chocolate", price:40},
//      ]);
//     console.log(res);
//   }

//   adddOrders();



//DAY 46 
//fUNCTIONS
const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");//Population is the process of automatically replacing the specified paths in the document with document(s) from other collection
  console.log(result[0]);
}

const addCust = async () => {
  let newCust = new Customer({
    name: "Karan arjun",
  })

  let newOrder = new Order({
    item: "Burger",
    price: 250,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("Added new customer !")
}

const delCust = async () => {
  let data = await Customer.findByIdAndDelete('65eff2f673f0a73f2bd6b382');
  console.log(data, "Customer deleted");
}

delCust();
// addCust();