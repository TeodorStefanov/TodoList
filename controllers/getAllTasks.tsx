import Connect from "../utils/mongoDBConnection";
import Task from "../models/task";
import { ITasks } from "../components/todoPage/todoPage";

export const getAllTasks = async () => {
  try {
    // Establish a connection to the MongoDB database.
    await Connect();
    // Fetch all tasks from the tasks collection and reverse the order.
    const tasks: ITasks[] = (await Task.find()).reverse();
    // Return a JSON response containing the fetched tasks.
    return Response.json({
      tasks,
    });
  } catch (err: any) {
    // If an error occurs, return a JSON response with the error message.
    return Response.json({ message: err.message });
  }
};
