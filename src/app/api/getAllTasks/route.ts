import { getAllTasks } from "../../../../controllers/getAllTasks";

export async function GET() {
  return await getAllTasks();
}
