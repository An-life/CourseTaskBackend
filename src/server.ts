import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./authRouter";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/auth", authRouter);
const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://anlife:1325aisaka@cluster0.u115thz.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();