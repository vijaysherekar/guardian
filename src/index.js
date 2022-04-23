const express = require("express");
const mongoose = require("mongoose");
const http = require("http");

const app = express();
const server = http.createServer(app);
const PORT = 3000;
const MONGO_URL =
  "mongodb+srv://dbadmin:Wissen2022@medicine.k728h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// The below event handlers can be added before or after startServer function
// As long as its after the require mongoose import
mongoose.connection.once("open", () => {
  console.log("Mongo DB Connection Ready");
});

mongoose.connection.on("error", (err)=>{
console.error(err)
})

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
  });
}

startServer();
