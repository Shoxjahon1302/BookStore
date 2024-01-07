process.env.SUPPRESS_NO_CONFIG_WARNING = "1";
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.createConnection(
      "mongodb+srv://Shohjahon:7UzytPSb29mDz6U@cluster0.jznuqh3.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
