import mongoose from "mongoose";

mongoose.set('strictQuery', false);
const connectDatabase = async () => {
  try {
    // mongoose.set('strictQuery', true);
    const conn = await mongoose.connect('mongodb+srv://virenpatadiya073:viren1T&P@clusterviren0.7czkwhi.mongodb.net/booking', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });


    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error:"mongoDB is not connected" ,  ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
