const express = require("express");
const dummyRouter = require("./routes/dummyRouter");

const app = express();
app.use(express.json());

app.use("/api/v1/", dummyRouter);

module.exports = app;
