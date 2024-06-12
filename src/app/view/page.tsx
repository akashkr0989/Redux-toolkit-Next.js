"use client";
import React from "react";
import { useSelector } from "react-redux";

function ViewPage() {
  const userData = useSelector((data: any) => data.usersData.users);
  console.log(userData);
  return (
    <div className="display-user">
      <h1>This is View Page</h1>
    {
        userData.map((data: any) => {
          return (
            <div className="user-list" key={data.id}>
              <span>{data.name}</span>
            </div>
          );
        })
  
    }
    </div>
  );
}

export default ViewPage;
