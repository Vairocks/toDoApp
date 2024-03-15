// Using Express Framework
const express = require('express');

const cors = require("cors");
const path = require("path");


const bodyParser = require("body-parser");

//Morgan to log the requests
var morgan = require('morgan');


const CrudRoutes = require("./routes");


const app = express();

//setting cors
app.use(cors());
app.options("*", cors());

app.use(morgan('combined'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//serving build of our react file
app.use(express.static(path.join(__dirname, "./todo-client/build")));

//By default our SPA will be served by '/'
app.get('/',(req,res)=> {
  return res.sendFile(path.join(__dirname, "/todo-client/build", "index.html"));
});

//crud api calls will be served from /api/** routes
app.use(
  "/api",
  CrudRoutes
);


const port = process.env.PORT || 3000; // Use the port defined by environment variable PORT or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
