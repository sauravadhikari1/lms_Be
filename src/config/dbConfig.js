import mongoose from "mongoose";

 export const connectDB = async () => {
  if(!process.env.MONGO_URL) {
    console.error("MONGO_URL is not defined in the environment variables.");
    
  }
  return mongoose.connect(process.env.MONGO_URL)
};



// export const connectDB = async () => {
//   try {
//     const connect = await mongoose.connect(process.env.MONGO_URL);
//   connect &&  console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     process.exit(1);
//   }
// };

 
// This code connects to a MongoDB database using Mongoose.
// It exports a function `connectDB` that attempts to connect to the database using the URI specified in the environment variable `MONGODB_URI`.    