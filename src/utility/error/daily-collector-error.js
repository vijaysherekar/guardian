export class DailyCollectionError extends Error {

    constructor (type, status, message, ...params) {
  
      // Pass remaining arguments (including vendor specific ones) to parent constructor
      super(...params);
  
      // Maintains proper stack trace for where our error was thrown (only available on V8)
      if (Error.captureStackTrace) {
  
        Error.captureStackTrace(this, DailyCollectionError);
  
      }
  
      // Custom debugging information
      this.type = type;
      this.status = status;
      this.message = message;
      this.date = new Date();
  
    }
  
  }
  