const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const dotenv = require("dotenv");

const app = express();
const server = http.createServer(app);

dotenv.config({ path: `${__dirname}/config.env` });

const DB = process.env.DATABASE.replace("<USERNAME>", process.env.USER).replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
console.log("🚀 ~ file: server.js ~ line 15 ~ DB", DB)
const PORT = process.env.PORT | 8000;
// The below event handlers can be added before or after startServer function
// As long as its after the require mongoose import
mongoose.connection.once("open", () => {
  console.log("Mongo DB Connection Ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(DB);
  server.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
  });
}

startServer();
