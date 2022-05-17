const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const dotenv = require("dotenv");
const app = require("./src/app");
const datasheetHandler = require('./src/utility/datasheetHandler/datasheetHandler')
const config = require('./config/config.json')
const generateJSONFile = require('./src/utility/generateJSON/generateJSONFile')
const server = http.createServer(app);
// const emptyDirectory = require('./src/utility/emptyDirectory/emptyDirectory')
dotenv.config({ path: `${__dirname}/config.env` });
const path = require('path');
const UserDataUtility = require('./src/utility/user-data/user-data')
const DB = process.env.DATABASE.replace("<USERNAME>", process.env.USER).replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const PORT = process.env.PORT | 8000;

/*
** Read from datasheet and create JSON file
*/
const sheets = ["MEDICINE","INVENTORY"]
const dataSheetFolder = "./assets/datasheets/"
const JSONDirectory =  path.join(__dirname, "./assets/userStorage/")
sheets.forEach(sheet=>{
  if (config.DATA_SHEETS[sheet]) {
    const dataSheetPath = `${dataSheetFolder}${config.DATA_SHEETS[sheet]}.xlsx`
    const dataSheetRecords = datasheetHandler(dataSheetPath)
    const JSONPath = `${JSONDirectory}${config.DATA_SHEETS[sheet]}.json`
    generateJSONFile(JSONPath,dataSheetRecords)
    const userUtility = new UserDataUtility();
    userUtility.insertUserDetails(sheet)
  }
  
})

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
