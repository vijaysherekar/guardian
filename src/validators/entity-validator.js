const mapper = require('object-mapper');
const Joi = require('joi');
const DailyCollectionError = require('./../utility/error/daily-collector-error');
const ProjectEntity = require('./../utility/enum/project-entity');
const InventorySchema = require('./../entities/inventory-schema');
const LoggerUtility = require('./../utility/logger');
module.exports = class EntityValidator {

    constructor () {
        this.projectEntity = new ProjectEntity();
        this.inventorySchema = new InventorySchema();
        this.logger = new LoggerUtility().getLoggerInstance();
    }
    parsedInputRequest (requestObject, entity) {

        try {
    
          const parsedObject = mapper(
            requestObject,
            this.getEntitySchema(entity, true)
          );
          const entityResult = this.validate(parsedObject, entity);
    
          if (entityResult && entityResult.error) {
    
            this.logger.error(
              `EntityValidator:parsedInputRequest:: Joi error is ${entityResult.error} ${entityResult.error.stack}`
            );
            throw new DailyCollectionError(
              this.errorTypes.INVALID_INPUT_REQUEST.type,
              this.errorTypes.INVALID_INPUT_REQUEST.statusCode,
              this.errorTypes.INVALID_INPUT_REQUEST.message
            );
    
          }
          return parsedObject;
    
        } catch (error) {
    
          this.logger.error(
            `EntityValidator:parsedInputRequest:: Error is ${error} ${error.stack}`
          );
          throw error;
    
        }
    
      }
      getEntitySchema (entity, isRequest) {

        let serverSchema = null;
        switch (entity) {
    
          case this.projectEntity.INVENTORY:
            serverSchema = isRequest
              ? this.inventorySchema.getInventoryServerSchema()
              : this.inventorySchema.getInventoryClientSchema();
            break;
          default:
            throw new DailyCollectionError(
              this.errorTypes.RESOURCE_NOT_FOUND.type,
              this.errorTypes.RESOURCE_NOT_FOUND.statusCode,
              this.errorTypes.RESOURCE_NOT_FOUND.message
            );
    
        }
    
        return serverSchema;
    
      }
      validate (parsedObject, entity) {

        let joiEntitySchema = null;
        switch (entity) {
    
          case this.projectEntity.INVENTORY:
            joiEntitySchema = this.inventorySchema.getCreateInventorySchema();
            break;
          default:
            throw new DailyCollectionError(
              this.errorTypes.RESOURCE_NOT_FOUND.type,
              this.errorTypes.RESOURCE_NOT_FOUND.statusCode,
              this.errorTypes.RESOURCE_NOT_FOUND.message
            );
    
        }
    
        return Joi.validate(parsedObject, joiEntitySchema);
    
      }
    
}