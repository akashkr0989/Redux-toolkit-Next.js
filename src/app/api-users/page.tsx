"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers, removeUser } from "../redux/slice";
import type { RootState, AppDispatch } from "../redux/store";

function ApiUsers() {
  const dispatch = useDispatch<AppDispatch>();
  const apiUserData = useSelector((state: RootState) => state.usersData);
  console.log(apiUserData);

  // useEffect  is used to call api on rendering of this component
  useEffect(() => {
    dispatch(fetchApiUsers());
  });

  return (
    <div className="display-user">
      <h2>This is User list Page API Calls</h2>
      <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>

      {apiUserData.userAPIData.map((data: any) => {
        return (
          <div className="user-list" key={data.id}>
            <strong>
              <span>{data.name}</span>
            </strong>
            {/* <button onClick={() => dispatch(removeUser(data.id))}>
              Remove User
            </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default ApiUsers;
