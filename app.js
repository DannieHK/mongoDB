import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
app.use(express.json()),
  .use(express.urlencoded({ extended: true }));

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        }); 
    console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    };
};
connect();

import userRouter from './routers/userRouter.js';
app.use(userRouter);

PORT = process.env.PORT;
app.listen(PORT, (error) => {
    if (error) {
        console.log("error: ", error);
        return;
        }
        console.log("The server is running on port: ", PORT);
});
