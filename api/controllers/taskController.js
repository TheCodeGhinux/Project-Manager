import { CustomAPIError, createCustomError } from '../errors/custom-errors.js'
import Task from '../models/tasks.js'

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (error) {
    // res.status(500).json({ msg: error })
    next(error)
  }
}

const updateTask = async (req, res, next) => {
  try {
    const taskID = req.params.id
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      // const error = new Error('Not found')
      // error.status = 404
      // return next (error)
      return next(createCustomError(`No task with id: ${taskID}`, 404));
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
      res.status(200).json({task})
    } catch (error) {
    // res.status(500).json({ msg: error })
    next(error)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const taskID = req.params.id 
    const task = await Task.findOneAndDelete({_id: taskID})
    if(!task) {
      return next(createCustomError(`No task with id: ${taskID}`, 404));
      return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({ msg: `Task with id: ${taskID} has been deleted` })
  } catch (error) {
    next(error)
    // res.status(500).json({ msg: error })
  }
}

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks})
  } catch (error) {
    next(error)
    // res.status(500).json({ msg: error });
  }
}

const getTask = async(req, res, next) => {
  try {
    const taskID = req.params.id
    const task = await Task.findOne({_id:taskID})
    if(!task) {
      // const error = new Error('Not found')
      // error.status = 404
      // return next (error)
      return next(createCustomError(`No task with id: ${taskID}`, 404));
      // return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    res.status(200).json({task})
  } catch (error) {
    // res.status(500).json({ msg: error });
    next(error)
  }
}

export { createTask, updateTask, deleteTask,getAllTasks, getTask } 