import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    // required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
});

const TaskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    index: [, 'Task must have a name'],
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completionDate: {
    type: Date,
  },

  // progress: {
  //   type: Number,
  //   min: 0,
  //   max: 100,
  //   required: true,
  //   default: 0,
  //   validate: {
  //     validator: function (value) {
  //       return Number.isInteger(value); // Custom validation to check if the value is an integer
  //     },
  //     message: '{VALUE} is not a valid percentage.',
  //   },
  // },
  
  milestones: [MilestoneSchema]
});


export default mongoose.model('Task', TaskSchema)