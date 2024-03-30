export class customErrorHandler extends Error {
    constructor(statusCode, errMessage) {
      super(errMessage);
      this.statusCode = statusCode;
    }
  }
  
  export const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof customErrorHandler) {
      const statusCode = err.statusCode;
      const errorMessage = err.message;
      
      res.status(statusCode).json(errorMessage);
    } else {
      res.status(500).json('Oops! Something went wrong... Please try again later!');
    }
  };
  