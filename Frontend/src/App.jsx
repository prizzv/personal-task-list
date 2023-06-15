import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, TextBoxes } from "./components";
import styles from "./style";

import {baseURL} from "./constants"

// const baseURL = "https://jsonplaceholder.typicode.com/posts";


// callAPI(() => {
//   axios.get(baseURL)
//     .then(res => res.text())
//     .then(res => this.setState({ apiResponse: res }))
//     .catch(err => err);
// });

const  App = () => {
  const [messages, setMessages] = useState([]);
  const [tasksId, setTasksId] = useState(-1);
  const [singleMessage, setSingleMessage] = useState([]);
  
  const getTasksId = (tasksId) => {
    setTasksId(tasksId);
    selectTask(tasksId);
  }

  useEffect(() => {
    axios
      .get(`${baseURL}tasksAPI`)
      .then(result => {
        setMessages(result.data);
        selectTask(result.data[0].tasksId);
        console.log(result.data);
      })
      .catch(error => console.log(error));
  }, []);

  const selectTask = (id) => {
    axios
      .get(`${baseURL}tasksAPI/${id}`)
      .then(result => {
        setSingleMessage(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={``}>
          <Navbar />
      </div>

      <div className={`bg-primary w-full h-screen flex justify-between`}>
        <Sidebar messages={messages} getTasksId = {getTasksId}/>
        <TextBoxes singleMessage = {singleMessage}/>
      </div>


    </div>
  );
}

export default App;