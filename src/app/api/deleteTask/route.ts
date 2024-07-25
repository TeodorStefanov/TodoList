import { deleteTask } from "../../../../controllers/deleteTask";

export async function DELETE(req: Request) {
  return await deleteTask(req);
}
