"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    // console.log(name);
    dispatch(addUser(name))
  };

  return (
    <div className="add-user">
      <h3>Add Users</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        className="add-user-input"
        type="text"
        placeholder="Add users..."
      />
      <button onClick={userDispatch} className="add-user-btn">
        Add User
      </button>
    </div>
  );
}

export default AddUsers;
