import { DailyCollectionError } from './../utility/error/daily-collector-error';
import { ErrorTypes } from './../utility/enum/error-types';
import { EntityValidator } from './../validators/entity-validator';
import { ProjectEntity } from './../utility/enum/project-entity';

export class InventoryAdapter {
    constructor() {
        this.errorTypes = new ErrorTypes()
        this.entityValidator = new EntityValidator();
        this.projectEntity = new ProjectEntity();
    }
    post (request) {
        if (!(request && request.body && Object.keys(request.body).length)) {

            return reject(new DailyCollectionError(
              this.errorTypes.INVALID_INPUT_REQUEST.type,
              this.errorTypes.INVALID_INPUT_REQUEST.statusCode,
              this.errorTypes.INVALID_INPUT_REQUEST.message));
    
          }
          const parsedObject = this.entityValidator
          .parsedInputRequest(request.body, this.projectEntity.INVENTORY);
  
    }
}
