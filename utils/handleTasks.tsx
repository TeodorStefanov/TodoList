export const handleTakeAllTasks = async () => {
  // Send a GET request to the /api/getAllTasks endpoint.
  const promise = await fetch("/api/getAllTasks");
  // If the request is successful, parse and return the tasks.
  if (promise.status === 200) {
    const result = await promise.json();
    return result.tasks;
  }
};

export const handleClickDelete = async (id: string) => {
  // Send a DELETE request to the /api/deleteTask endpoint with the task ID in the request body.
  const promise = await fetch("/api/deleteTask", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskId: id }),
  });
  // If the request is successful, parse and return the updated list of tasks.
  if (promise.status === 200) {
    const result = await promise.json();

    return result.tasks;
  }
};

export const handleAddTask = async (taskName: string) => {
  // Send a POST request to the /api/addTask endpoint with the task name in the request body.
  const promise = await fetch("/api/addTask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskName),
  });
  // If the request is successful, parse and return the updated list of tasks.
  if (promise.status === 200) {
    const result = await promise.json();
    return result.tasks;
  }
};

export const handleEditTask = async (isEdit: string, taskName: string) => {
  // Send a PUT request to the /api/editTask endpoint with the task ID and new name in the request body.
  const promise = await fetch("/api/editTask", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ taskId: isEdit, newName: taskName }),
  });
  // If the request is successful, parse and return the updated list of tasks.
  if (promise.status === 200) {
    const result = await promise.json();
    return result.tasks;
  }
};
