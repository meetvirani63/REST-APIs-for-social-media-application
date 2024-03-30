import winston from 'winston';

const logger = winston.createLogger({
  level:'info',
  format:winston.format.json(),
  defaultMeta:{service:'user-service'},
  transports: [
    new winston.transports.File({ filename: 'Logs.log' }) 
  ]
});

export const loggerMiddleware = async (req, res, next) => {

  if(req.url.startsWith('/api/signup') || req.url.startsWith('/api/signin')){
    next()
  }
  else{
    const timestamp = new Date().toString();
    const logEntry = `${timestamp}\n req URL: ${req.url}\n reqBody: ${JSON.stringify(req.body)}`
    logger.info(logEntry); // Log the entry
    next();
  }
};
export default loggerMiddleware;
