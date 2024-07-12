const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

const app = express();
app.use(bodyParser.json());

const port = 3000;

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
