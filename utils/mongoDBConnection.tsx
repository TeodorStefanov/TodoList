import mongoose from "mongoose";
// Disable strict mode for query filters, allowing for more flexible queries
mongoose.set("strictQuery", false);
// Asynchronously connect to the MongoDB database using the URL provided in environment variables.
const Connect = async () => await mongoose.connect(process.env.DATABASE_URL!);

export default Connect;
