"use client";
// This directive indicates that this file is a client-side only module.

import { FC, useEffect, useState } from "react";
import styles from "./todoPage.module.css";
import LoadingLoader from "../loadingLoader/loadingLoader";
import {
  handleClickDelete,
  handleAddTask,
  handleEditTask,
  handleTakeAllTasks,
} from "../../utils/handleTasks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export interface ITasks {
  name: string;
  _id: string;
}

const Todo: FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [allTasks, setAllTasks] = useState<ITasks[] | []>([]);
  const [isEdit, setIsEdit] = useState<string>("");

  const editAddTask = async () => {
    // Function to handle adding or editing a task.

    if (isEdit) {
      setAllTasks(await handleEditTask(isEdit, taskName));
      setIsEdit("");
      setTaskName("");
    } else {
      setAllTasks(await handleAddTask(taskName));
      setTaskName("");
    }
  };

  const takeAllTasks = async () => {
    // Function to fetch all tasks.
    setAllTasks(await handleTakeAllTasks());
  };

  const handleClickEdit = (name: string, id: string) => {
    // Function to handle clicking the edit button.
    setTaskName(name);
    setIsEdit(id);
  };

  useEffect(() => {
    // useEffect to fetch all tasks on component mount.
    takeAllTasks();
  }, []); // Empty dependency array means this runs only once on mount.

  return (
    <div className={styles.wrapper}>
      <h1>Todo List</h1>
      <div className={styles.addTask}>
        <input
          className={styles.todoInput}
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className={styles.todoButton} onClick={editAddTask}>
          Ok
        </button>
      </div>
      {allTasks.length > 0 ? (
        <div className={styles.tasks}>
          {allTasks.map((el) => {
            return (
              <div key={el._id} className={styles.task}>
                {el.name}
                <div className={styles.icons}>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faPenToSquare}
                    onClick={() => handleClickEdit(el.name, el._id)}
                  />
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faTrash}
                    onClick={async () =>
                      setAllTasks(await handleClickDelete(el._id))
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default Todo;
