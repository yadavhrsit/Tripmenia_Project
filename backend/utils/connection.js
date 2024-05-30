const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDb
