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
      <Link href="/remove-user">Remove User</Link>
      <br />
      <Link href="/view">View User</Link>
      <Link href={"/to-do-list"}>To Do Page</Link>
      <Link href={"/api-users"}>USER API PAGE</Link>
    </div>
  );
}

export default AddUsers;
