import { addTask } from "../../../../controllers/addTask";

export async function POST(req: Request) {
  return await addTask(req);
}
