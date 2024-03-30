import express from 'express'
import cookieParser from "cookie-parser";
import path from 'path'
import swagger from 'swagger-ui-express'
import apiDocs from './swagger.json' assert {type:'json'};


// Importing Middlewares
import jwtAuth from './src/middlewares/jwt.middleware.js';
import {customErrorHandler, errorHandlerMiddleware,} from "./src/middlewares/errorHandler.middleware.js";
import { invalidRoutesHandlerMiddleware } from './src/middlewares/invalidRoutes.middleware.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';

// Importing all routes
import userRoutes from './src/features/user/routes/user.routes.js'
import postRoutes from './src/features/post/routes/post.routes.js';
import commentRoutes from './src/features/comment/routes/comment.routes.js'
import likeRoutes from './src/features/like/routes/like.routes.js'


const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(loggerMiddleware); // Logger Middleware
app.use(express.static(path.join(path.resolve(), "public")));
app.use(
    '/api-docs',
    swagger.serve,
    swagger.setup(apiDocs)
)

app.use("/api", userRoutes);
app.use("/api/posts", jwtAuth,postRoutes);
app.use("/api/comments", jwtAuth,commentRoutes);
app.use("/api/likes", likeRoutes);


// app.use(invalidRoutesHandlerMiddleware)
app.use(errorHandlerMiddleware);

export default app;