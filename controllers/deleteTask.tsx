import Connect from "../utils/mongoDBConnection";
import Task from "../models/task";
import { ITasks } from "../components/todoPage/todoPage";

export const deleteTask = async (req: Request) => {
  try {
    // Establish a connection to the MongoDB database.
    await Connect();
    const { taskId } = await req.json();
    // Define the filter to find the task by its ID.
    const filter = { _id: taskId };
    // Find the task by its ID and delete it.
    await Task.findOneAndDelete(filter);
    // Fetch all remaining tasks from the tasks collection and reverse the order.
    const tasks: ITasks[] = (await Task.find()).reverse();
    // Return a JSON response indicating success and the updated list of tasks.
    return Response.json({ message: "successfully", tasks });
  } catch (err: any) {
    // If an error occurs, return a JSON response with the error message.
    return Response.json({ message: err.message });
  }
};
