import {UserDataUtility} from './user-data.js'

export class DataSheetsInit {
    constructor(){
        this.userUtility = new UserDataUtility()
    }
    initializeData() {
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
        userUtility.insertUserDetails()
      }
      
    })
}
}
