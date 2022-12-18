//brojla ma fiha chay cnxion DB cloud/local so i copied it :p  w hawka badelt DB_URI
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://campione:P9gl0vf4QYcoUA3T@cluster0.o9gdi.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("database can not connect", error);
  }
};

module.exports = connectDB;
