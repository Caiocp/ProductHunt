const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./src/routes");

const app = express();

mongoose.connect(
  "mongodb+srv://backend:backend@omnistack-wrcgu.mongodb.net/api-node?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);
