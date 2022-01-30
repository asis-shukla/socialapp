console.log("Hello");

const express = require("express");
const datefns = require("date-fns");

const app = express();

app.get("/", (req, res) => {
  res.send("Geetings!");
});

app.get("/api/v1/:token", (req, res) => {
  res.status(200).json({
    param: req.params.token,
  });
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "ashishshukla",
    followers: 600,
    followes: 50,
    date: datefns.format(new Date(), "dd/MM/yyyy"),
  };
  res.status(200).json({ instaSocial });
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "ashishshuklafb",
    followers: 70,
    followes: 20,
    date: datefns.format(new Date(), "dd/MM/yyyy"),
  };
  res.status(200).json({ instaSocial });
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "ashishshuklaln",
    followers: 200,
    followes: 50,
    date: datefns.format(new Date(), "dd/MM/yyyy"),
  };
  res.status(200).json({ instaSocial });
});

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
