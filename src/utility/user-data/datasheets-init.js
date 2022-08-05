const path = require("path");
const datasheetHandler = require("../datasheetHandler/datasheetHandler");
const config = require("../../../config/config.json");
const generateJSONFile = require("../generateJSON/generateJSONFile");
const UserDataUtility = require("./user-data");

module.exports = class DataSheetsInit {
  constructor() {
    this.userUtility = new UserDataUtility();
  }
  initializeData() {
    const sheets = ["INVENTORY"];
    const dataSheetFolder = "assets/datasheets/";
    const JSONDirectory = "assets/userStorage/";
    sheets.forEach((sheet) => {
      if (config.DATA_SHEETS[sheet]) {
        const dataSheetPath = `${dataSheetFolder}${config.DATA_SHEETS[sheet]}.xlsx`;
        const dataSheetRecords = datasheetHandler(dataSheetPath);
        const JSONPath = `${JSONDirectory}${config.DATA_SHEETS[sheet]}.json`;
        generateJSONFile(JSONPath, dataSheetRecords);
        this.userUtility.insertUserDetails(sheet);
      }
    });
  }
};
