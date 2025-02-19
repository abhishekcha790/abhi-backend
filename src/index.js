import connectDB from "../src/db/index.js";
import dotenv from "dotenv";
import app from "../src/app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection is failed", error);
  });
