// Import required modules
const express = require('express');

const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
var morgan = require('morgan');


const CrudRoutes = require("./routes");


const app = express();

app.use(cors());
app.options("*", cors());

app.use(morgan('combined'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./todo-client/build")));
app.get('/',(req,res)=> {
  return res.sendFile(path.join(__dirname, "/todo-client/build", "index.html"));
});


app.use(
  "/api",
  CrudRoutes
);


const port = process.env.PORT || 3000; // Use the port defined by environment variable PORT or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
