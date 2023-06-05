import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import taskRoutes from './routes/taskRoutes.js'

import { notFoundMiddleware } from './middlewares/notFound.js';
import errorHandlerMiddleware from './middlewares/errorHandler.js';

import { connectDB, mongoOff, mongoOn } from './db/connect.js';

const app = express()
dotenv.config()

app.use(express.json())

mongoOn();
mongoOff();

// Routes
app.use('/api/v1/task', taskRoutes)

// Middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.port || 5001
app.listen(port, () => {
  connectDB()
  console.log(`server listening on port ${port}`);
})