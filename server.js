const express = require("express");
var route = require("./app/routes/route");
const app = express();
require("dotenv").config();

app.use(express.json());

app.use('/', route);

app.listen(3000);   