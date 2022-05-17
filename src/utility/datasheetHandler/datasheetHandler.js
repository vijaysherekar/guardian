const reader = require('xlsx');

const readDataSheet = (filepath) => {
    const data = [];
    try{
    const file = reader.readFile(filepath);
    const sheets = file.SheetNames;
    const totalSheets = sheets.length
    for (let i = 0; i < totalSheets; i++) {
      const tempData = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]]);
      tempData.forEach((res) => {
        data.push(res);
      });
    }
    }
    catch(err) {
        console.error(err)
    }
    return data;
  }
module.exports = readDataSheet
  