const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const uuid = require("uuid");
require("dotenv/config");

//Body parser
app.use(express.json());

//middleware
// app.use((req, res, next) => {
//   console.log("I am from middleware");
//   next();
// });
app.use(morgan("dev"));

//Router
const PersonRouter = require("./PersonRoute");
app.use("/persons", PersonRouter);


// const myPerson = [
//   {
//     id: uuid.v4(),
//     name: "Ramzy",
//     age: 25,
//   },
//   {
//     id: uuid.v4(),
//     name: "Ahmed",
//     age: 30,
//   },
//   {
//     id: uuid.v4(),
//     name: "Hello",
//     age: 26,
//   },
// ];

//getAll Person
// app.get("/", (req, res) => {
//   res.status(200).json(myPerson);
// });

//getBy id
// app.get("/:id", (req, res) => {
// res.json(req.params.id);
//   const getOne = myPerson.filter((e) => e.id === req.params.id);
//   res.status(200).json(getOne);
// });

//post persons
// app.post("/", (req, res) => {
//   myPerson.push(req.body);
//   res.status(200).json(req.body);
// });

//local host

app.listen(2000, () => {
  console.log("Server started on 2000");
});

//Db server connect
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(process.env.MYDB_CONNECTION, (err) => {
  if (err) {
    console.log("Database not connected");
  } else {
    console.log("Database connected successfully");
  }
});
