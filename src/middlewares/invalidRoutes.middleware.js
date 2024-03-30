import { customErrorHandler } from "./errorHandler.middleware.js";

export const invalidRoutesHandlerMiddleware = (req, res, next) => {
    throw new customErrorHandler(
        400,
        `Invalid path : ${req.url}`
      );
  };
  