import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const taskSchema = new Schema({
  name: String,
});

const Task = models.Task || model("Task", taskSchema);
export default Task;
