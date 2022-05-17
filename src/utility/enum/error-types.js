module.exports = class ErrorTypes {

    constructor () {
  
      this.init();
  
    }
  
    init () {
  
      this.INTERNAL_SERVER_ERROR = {
        type: 'InternalServerError',
        statusCode: 500,
        message: 'SomethingFailed'
      };
      this.INVALID_INPUT_REQUEST = {
        type: 'InvalidInputRequestError',
        statusCode: 501,
        message: 'Input request is not valid'
      };
      this.DATABASE_CONNECTION_CLOSED = {
        type: 'DatabaseConnectionClosed',
        statusCode: 502,
        message: 'Database connection closed'
      };
      this.DATABASE_OPERATION_ERROR = {
        type: 'DatabaseOperationError',
        statusCode: 503,
        message: 'Database operation error'
      };
      this.DUPLICATE_DATA_ERROR = {
        type: 'DuplicateDataError',
        statusCode: 504,
        message: 'Data already exists'
      };
      this.RESOURCE_NOT_FOUND = {
        type: 'ResourceNotFoundError',
        statusCode: 505,
        message: 'Resource not found'
      };
  
    }
  
  }
  