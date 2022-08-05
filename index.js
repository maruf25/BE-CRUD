import express from "express";
import cors from "cors";
import userRoute from "./route/userRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(userRoute);


app.listen(5000, () => console.log("server up and running..."));
