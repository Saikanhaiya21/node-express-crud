const express = require("express");
const userRouter = require("./routes/userRouter");
const { mongoConnect } = require("./utils/mongoDatabaseUtils");
const mongoUserRouter = require("./routes/mongoUserRouter");
const  mongoose = require("mongoose");
const mongooseUserRouter = require("./routes/mongooseExampleRouter");
const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);
app.use("/mongoUsers", mongoUserRouter);
app.use("/mongooseUsers", mongooseUserRouter);

const port = 8080;
// mongoConnect(() => {
//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });
// });

const DB_PATH =
  "mongodb+srv://root_db_user:AdminRoot@curdoperation.e68maeu.mongodb.net/curd-operation?retryWrites=true&w=majority&appName=CurdOperation";

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to mongo", error);
  });
