"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function DisplayUsers() {
  const userData = useSelector((data: any) => data.users);

  const dispatch = useDispatch();
  console.log(userData);

  return (
    <div className="display-user">
      <h3>User List</h3>

      {userData.map((data: any) => {
        return (
          <div className="user-list" key={data.id}>
            <span>{data.name}</span>
            <button onClick={()=>dispatch(removeUser(data.id))}>Remove User</button>

          </div>
        );
      })}
    </div>
  );
}

export default DisplayUsers;
