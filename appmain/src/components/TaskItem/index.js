import React from "react";
import "./styles.css";
import { useTheme } from "../../Contexts/ThemeContext";
import {
  useModal,
  useModalUpdate,
  usePrevTask,
  useUpdatePrevTask,
} from "../../Contexts/OpenModalContext";
import { useUpdateData } from "../../Contexts/DataContext";

export default function TaskItem({ task }) {
  const openModal = useModal();
  const toggleModal = useModalUpdate();
  const prevTask = usePrevTask();
  const togglePrevTask = useUpdatePrevTask();
  const updateData = useUpdateData();

  const darkTheme = useTheme();
  const { _id, taskTitle } = task;
  // console.log("the taskTitle: ");
  // console.log(taskTitle);
  // console.log("is true: " + (prevTask === null));
  // let k = 1;
  // console.log(_id);

  return (
    <button
      className="btn-TaskItem"
      style={{
        color: darkTheme ? "white" : "black",
        backgroundColor: darkTheme ? "#836534" : "#F2D998",
      }}
      onClick={async () => {
        // console.log("clicked");
        // console.log("is true: " + prevTask === null);
        await updateData();

        if (!openModal || !prevTask._id || prevTask._id === -1) {
          togglePrevTask({ _id, taskTitle });
          toggleModal();
          return;
        }

        if (!openModal || prevTask._id === _id) {
          toggleModal();
          const prevTaskTitle =
            prevTask !== null ? prevTask.taskTitle : taskTitle;
          togglePrevTask({ _id, prevTaskTitle });
        } else togglePrevTask({ _id, taskTitle });
      }}
    >
      {taskTitle}
    </button>
  );
}
