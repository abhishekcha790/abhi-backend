import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
//   Data comes from -
//    in json files and form
app.use(express.json());

// in link form
app.use(express.urlencoded({ extended: true }));
// in form of pdf, image it save in public folder
app.use(express.static("public"));

app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export default app;
