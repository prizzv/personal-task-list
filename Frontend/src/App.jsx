import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navbar, Sidebar, TextBoxes } from "./components";
import styles from "./style";

const baseURL = "http://localhost:9000/testAPI";
// const baseURL = "https://jsonplaceholder.typicode.com/posts";


// callAPI(() => {
//   axios.get(baseURL)
//     .then(res => res.text())
//     .then(res => this.setState({ apiResponse: res }))
//     .catch(err => err);
// });

const  App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then(result => {
        setMessages(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error));
  }, []);

  // if(!message) return null;

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={``}>
          <Navbar />
      </div>

      <div className={`bg-primary w-full h-screen flex justify-between`}>
        <Sidebar />
        <TextBoxes />
      </div>


    </div>
  );
}

export default App;