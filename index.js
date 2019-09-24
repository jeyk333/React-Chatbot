const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const config = require("./config/keys");
const mongoose = require("mongoose");

require("./models/Registration");
require("./models/Demand");
require("./models/Coupons");

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

app.use(bodyParser.json());

require("./routes/dialogFlowRoutes")(app);
require("./routes/fulfillmentRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
