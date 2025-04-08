import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://joblistingadmin.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: "*",
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/jobs", jobRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(err));
