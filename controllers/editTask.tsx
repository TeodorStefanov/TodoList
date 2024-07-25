import Connect from "../utils/mongoDBConnection";
import Task from "../models/task";
import { ITasks } from "../components/todoPage/todoPage";

export const editTask = async (req: Request) => {
  try {
    // Establish a connection to the MongoDB database.
    await Connect();
    const { taskId, newName } = await req.json();
    // Define the filter to find the task by its ID and the update to change its name.
    const filter = { _id: taskId };
    const update = { name: newName };
    // Find the task by its ID and update its name, returning the new document.
    await Task.findOneAndUpdate(filter, update, { new: true });
    // Fetch all tasks from the tasks collection and reverse the order.
    const tasks: ITasks[] = (await Task.find()).reverse();
    // Return a JSON response indicating success and the updated list of tasks.
    return Response.json({ message: "successfully", tasks });
  } catch (err: any) {
    // If an error occurs, return a JSON response with the error message.
    return Response.json({ message: err.message });
  }
};
