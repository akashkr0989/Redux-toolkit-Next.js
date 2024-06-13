"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDos } from "../redux/toDoSlice";
import Link from "next/link";

function ToDoList() {
  const [toDo, setToDo] = React.useState("");
  const toDoData = useSelector((data: any) => data.toDosData.toDos);

  const dispatch = useDispatch();

  return (
    <>
      <div className="add-user">
        <h1>Add To Do Tasks</h1>
        <input
          className="add-user-input"
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="Enter To Do"
        />
        <button
          className="add-user-btn"
          onClick={() => dispatch(addToDos(toDo))}
          type="submit"
        >
          Add To Do
        </button>
        <div className="link-container">
          <Link href="/" className="link">
            Go to Home
          </Link>
        </div>
      </div>
      <div className="display-user">
        <h2>To DO List</h2>
        {toDoData.length &&
          toDoData.map((item: any) => {
            return <h3 key={item.id}>{item.name}</h3>;
          })}
      </div>
    </>
  );
}

export default ToDoList;
