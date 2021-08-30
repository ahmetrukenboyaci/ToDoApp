const mongoose = require("mongoose");

const uri = 'mongodb+srv://admin:administrator@cluster0.qxxbg.mongodb.net/ToDo?retryWrites=true&w=majority';

async function dbconnect() {
    await mongoose.connect(uri);
    console.log("Connected to database.");
}

function dbclose() {
    console.log("Disconnected to database.");
    return mongoose.disconnect();
}

module.exports = {dbconnect, dbclose};


// module.exports = async () => {
//     try {
//         await mongoose.connect(connectionString);
//         console.log("Connected to database.");
//     } catch (error) {
//   