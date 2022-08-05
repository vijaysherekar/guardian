const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./src/app");

const DataSheetsInit = require("./src/utility/user-data/datasheets-init")

dotenv.config();
const DB = process.env.DB_URI.replace("<username>", process.env.DB_USERNAME).replace("<password>", process.env.DB_PASSWORD).replace("<db_name>", process.env.DB_NAME);
const PORT = process.env.PORT | 8000;

/*
 ** Read from datasheet and create JSON file
 */
const dataSheetInit = new DataSheetsInit();
dataSheetInit.initializeData();

// The below event handlers can be added before or after startServer function
// As long as its after the require mongoose import
mongoose.connection.once("open", () => {
  console.log("Mongo DB Connection Ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

function startServer() {
  mongoose.connect(DB).then(() => {
    console.log("Connected to DB");
    app.listen(PORT);
    console.log(`Listening on port`, PORT);
  });
}

startServer();
