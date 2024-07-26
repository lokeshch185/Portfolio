const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./dbconfig");
const port = process.env.PORT || 5000;
const cors = require('cors')

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors());

app.use("/api", portfolioRoute);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

