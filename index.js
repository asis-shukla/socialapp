console.log("Hello");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
