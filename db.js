const mongoose = require("mongoose");

const connectDb = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect("mongodb://0.0.0.0:27017/college_erp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { connectDb };
