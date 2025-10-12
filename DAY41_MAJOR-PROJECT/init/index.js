const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to the database", err);
    }
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj)=>({...obj, owner:"65f5ae79bb885c850021bc31"}));//Insert many ke just phele
        await Listing.insertMany(initData.data);
        console.log("Data initialized");
    } catch (err) {
        console.error("Error initializing the database", err);
    } finally {
        mongoose.connection.close();
    }
}

main();
initDB();

