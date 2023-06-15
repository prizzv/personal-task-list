import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, TextBoxes } from "./components";
import styles from "./style";

import { baseURL } from "./constants"

const App = () => {
  const [messages, setMessages] = useState([]);
  const [singleMessage, setSingleMessage] = useState([]);

  const createNewTask = (tasks) => {
    console.log("createNewTask");

    console.log(tasks);
    setMessages(tasks);
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
        <Sidebar messages={messages} selectTask={selectTask} createNewTask={createNewTask} />
        <TextBoxes singleMessage={singleMessage} />
      </div>


    </div>
  );
}

export default App;