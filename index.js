require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require("http");
const { response } = require("express");
const routerCar = require("./routes/car.routes");

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use((err, request, response, next) => {
  console.log(err);
  response.status(500).send("server crash");
  next();
});

app.use("/api/car", routerCar);

app.use("/", (req, res) => {
    res.status(200).json("Hello, world! Ваш сервер работает");
});


server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});

module.exports = app;
