import React from 'react'
import { baseURL } from '../constants';
import axios from "axios"
import { useState, useEffect } from 'react'
import { Button } from "../components";
import {trashCan} from "../assets"

const TextBoxes = ({ singleMessage }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskSubTitle, setTaskSubTitle] = useState('');

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (singleMessage[0] != null) {
        if (taskTitle != '') {
          singleMessage[0].taskTitle = taskTitle;
          // console.log(singleMessage);
        }
        if (taskSubTitle != '') {
          singleMessage[0].taskSubTitle = taskSubTitle;
        }

        console.log(singleMessage);
        updateTasks();
      }
    }, 3000);

    return () => clearTimeout(timeOutId)
  }, [taskTitle, taskSubTitle])

  const updateTasks = () => {
    // console.log(singleMessage);

    const options = {
      method: 'PUT',
      url: `${baseURL}tasksAPI/`,
      params: { 'api': '1.0' },
      headers: { 'content-type': 'application/json' },
      data: singleMessage[0]
    }

    axios
      .request(options)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }
  const deleteTask = () => {
    axios.delete(`${baseURL}tasksAPI/${singleMessage[0].tasksId}`)
    window.location.reload();
  }

  return (

    <div className='w-full text-white'>
      {/* shows tasks title  */}
      {singleMessage.map((message, index) => (
        <div className="" key={message.tasksId}>
          {/* <form action={`${baseURL}tasksAPI`} method="PATCH"> */}
          <div className='border-b-2 border-slate-500'>

            <input className="w-full bg-inherit mx-5 py-2 text-lg" defaultValue={`${message.taskTitle}`} onChange={(event) => (setTaskTitle(event.target.value))}></input>
          </div>

          <div className='w-full'>
            <textarea type={"text"} id="review-text" className="autosize  w-full bg-inherit mx-5 py-2 text-lg" wrap='soft' defaultValue={`${message.taskSubTitle}`} onChange={(event) => (setTaskSubTitle(event.target.value))}></textarea>
          </div>
          <button type="button" className={`absolute right-10 rounded-full  w-[50px] h-[50px] text-[30px] flex justify-center items-center bg-red-gradient font-bold `} onClick={()=> {deleteTask()}}>
            <img src={trashCan} alt="trash_can" className='object-contain'/>
          </button>
        </div>
      ))}
    </div>
  )
}


export default TextBoxes