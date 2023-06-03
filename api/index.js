import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

const app = express()
dotenv.config()


// Routes
app.use

const port = process.env.port || 5001
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})