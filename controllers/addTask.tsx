import Connect from "../utils/mongoDBConnection";
import Task from "../models/task";
import { ITasks } from "../components/todoPage/todoPage";

export interface Props {
  name: String;
}
export const addTask = async (req: Request) => {
  try {
    // Establish a connection to the MongoDB database.
    await Connect();
    const name = await req.json();
    // Create a new task document in the tasks collection.
    await Task.create<Props>({ name: name });
    // Fetch all tasks from the tasks collection and reverse the order.
    const tasks: ITasks[] = (await Task.find()).reverse();
    // Return a JSON response indicating success and the updated list of tasks.
    return Response.json({ message: "successfully", tasks });
  } catch (err: any) {
    const tasks: ITasks[] = (await Task.find()).reverse();
    // If an error occurs, return a JSON response with the error message.
    return Response.json({ message: err.message, tasks });
  }
};
