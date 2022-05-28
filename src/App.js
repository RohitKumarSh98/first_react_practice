import React, { useState } from "react";
import "./App.css";
import User from "./components/User.js";
import NewUser from "./components/NewUser.js";
const DUMMY = [
  { id: "e1", name: "Max", age: 31 },
  { id: "e2", name: "Rohit", age: 23 },
];
function App() {
  const [userInfo, setUserInfo] = useState(DUMMY);

  const userDataHandler = (data) => {
    setUserInfo((prevInfo) => {
      return [data, ...prevInfo];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <User onAddUser={userDataHandler} />
        <div className="App-userlist ">
          {userInfo.map((user) => (
            <NewUser userdetail={user} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
