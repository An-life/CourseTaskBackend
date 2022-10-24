import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import { authRouter } from "./router/authRouter";
import { ErrorMiddleware } from "./middlewares/errorMiddleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", authRouter);
app.get("/", (req, res) => res.json("hi"));

app.use(ErrorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anlife:1325aisaka@cluster0.u115thz.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
