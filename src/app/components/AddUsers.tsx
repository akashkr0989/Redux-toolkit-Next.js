"use client";
import React, { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

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
      <div className="link-container">
        <Link href="/remove-user" className="link">Remove User</Link>
        <Link href="/view" className="link">View User</Link>
        <Link href="/to-do-list" className="link">To Do Page</Link>
        <Link href="/api-users" className="link">USER API PAGE</Link>
      </div>
    </div>
  );
}

export default AddUsers;
