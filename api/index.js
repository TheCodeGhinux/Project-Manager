import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import taskRoutes from './routes/taskRoutes.js'

import { notFoundMiddleware } from './middlewares/notFound.js';

const app = express()
dotenv.config()


// Routes
app.use('/api/v1/task', taskRoutes)

// Middlewares
app.use(notFoundMiddleware)

const port = process.env.port || 5001
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})