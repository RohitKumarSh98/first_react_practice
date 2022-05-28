import React from "react";
import "./NewUser.css";

const NewUser = (props) => {
  return (
    <div className="newuser">
      <p>
        {props.userdetail.name} ({props.userdetail.age} years old)
      </p>
    </div>
  );
};

export default NewUser;
