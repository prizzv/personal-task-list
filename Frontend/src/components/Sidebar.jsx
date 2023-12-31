import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style";
import Button from "./Button";
// import { Button } from "../components";

import { baseURL } from "../constants"
import TextBoxes from "./TextBoxes";

const Sidebar = ({ messages, selectTask, createNewTask }) => {
  const addTask = () => {
    //DONE: UI update is not working
    messages.push({
      tasksId: messages[messages.length - 1].tasksId + 1,
      taskTitle: "New Task",
      taskSubTitle: "New Sub Task",
    });
    axios.post(`${baseURL}tasksAPI`, { taskTitle: "New Task", taskSubTitle: "New Sub Task" })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) });

    createNewTask(messages);
    window.location.reload();
    // console.log(messages)
  }

  return (
    <div className='ss:w-[40%] w-[60%] text-white relative max-h-[100%] overflow-auto border-r-2 border-slate-500'>
      {/* shows tasks title and sub title */}
      <div className="flex justify-center flex-col items-center">
        {messages.map((message, index) => (
          <div key={message.tasksId} id={`${message.tasksId} tasks`} className={`w-[90%] ${styles.padding} flex flex-col bg-black-gradient-2 rounded-[20px] box-shadow ${index === 0 ? "my-6" : "my-3"} cursor-pointer`} onClick={() => selectTask(message.tasksId)}>
            <p className="pb-3">{message.taskTitle}</p>
            <p>{message.taskSubTitle}</p>
          </div>
        ))}
      </div>
      <Button onclick={addTask} />
    </div>
  )
}
export default Sidebar