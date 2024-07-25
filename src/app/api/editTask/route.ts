import { editTask } from "../../../../controllers/editTask";

export async function PUT(req: Request) {
  return await editTask(req);
}
