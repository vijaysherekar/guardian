const DailyCollectionError = require( './../utility/error/daily-collector-error');
const ErrorTypes  = require( './../utility/enum/error-types');
const EntityValidator  = require( './../validators/entity-validator');
const ProjectEntity  = require( './../utility/enum/project-entity');

module.exports = class InventoryAdapter {
    constructor() {
        this.errorTypes = new ErrorTypes()
        this.entityValidator = new EntityValidator();
        this.projectEntity = new ProjectEntity();
    }
    post (request) {
        return new Promise((resolve, reject) => {
        if (!(request && request.body && Object.keys(request.body).length)) {

            return reject(new DailyCollectionError(
              this.errorTypes.INVALID_INPUT_REQUEST.type,
              this.errorTypes.INVALID_INPUT_REQUEST.statusCode,
              this.errorTypes.INVALID_INPUT_REQUEST.message));
    
          }
          const parsedObject = this.entityValidator
          .parsedInputRequest(request.body, this.projectEntity.INVENTORY);
        })
    }
}
