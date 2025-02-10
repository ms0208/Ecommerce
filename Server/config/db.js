const mongoose = require('mongoose');
require('dotenv').config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = databaseConnection;

