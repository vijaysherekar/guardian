const fs = require("fs");
const concat = require("concat-stream");
const path = require("path");
const config = require("../../../config/config.json");
const LoggerUtility = require("../logger");
const InventoryAdapter = require("../../adapters/inventory");
module.exports = class UserDataUtility {
  constructor() {
    this.logger = new LoggerUtility().getLoggerInstance();
    this.inventoryAdapter = new InventoryAdapter();
  }

  readSuperUserDetails(entity) {
    return new Promise((resolve, reject) => {
      try {
        const JSONDirectory = "assets/userStorage/";
        const JSONPath = `${JSONDirectory}${config.DATA_SHEETS[entity]}.json`;
        const readTemplateStream = fs.createReadStream(path.resolve(JSONPath), {
          encoding: "utf8",
        });
        const templateStream = concat((data) => {
          resolve(data);
        });
        readTemplateStream.pipe(templateStream, { end: true });

        readTemplateStream.on("error", (streamError) => {
          this.logger.error(
            `UserDataUtility:readSuperUserDetails:: readTeamplateStream error event callback ${streamError}`
          );
          reject(streamError);
        });
      } catch (error) {
        this.logger.error(
          `UserDataUtility:readSuperUserDetails:: runtime error occurred at EmailHelper loadTemplate method: ${error}`
        );
        reject(error);
      }
    });
  }

  insertUserDetails(entity) {
    return this.readSuperUserDetails(entity).then((_details) => {
      const _request = {
        body: _details ? JSON.parse(_details) : {},
      };
      return this.inventoryAdapter.post(_request);
    });
  }
};
