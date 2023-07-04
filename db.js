const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://rattandevagya:devagya@cluster0.sz3w0gf.mongodb.net/gofoodmern?retryWrites=true&w=majority";

  const connectDb = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("fooditems");
      let data= await fetched_data.find({}).toArray() 
      let foodcategory = mongoose.connection.db.collection("foodcategory")
      let catdata = await  foodcategory.find({}).toArray()  
      global.fooditems = data;
      global.foodcategory = catdata;
      // console.log(global.fooditems)
    } catch (error) {
      console.log('err: ', error);
    }
  }

module.exports = connectDb;
