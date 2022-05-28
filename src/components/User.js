import React, { useState } from "react";
import "./User.css";
const User = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: +enteredAge,
    };
    props.onAddUser(userData);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="user_entry">
        <div className="user_entry--container">
          <label>Username:</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="user_entry--container">
          <label>Age (Years):</label>
          <input type="text" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <button type="submit" className="btn">
          Add User
        </button>
      </div>
    </form>
  );
};

export default User;
