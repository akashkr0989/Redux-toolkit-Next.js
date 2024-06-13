"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function ViewPage() {
  const userData = useSelector((data: any) => data.usersData.users);
  console.log(userData);
  return (
    <div className="display-user">
      <h2>This is View Page</h2>
      <div className="link-container">
        <Link href="/" className="link">Go to Home</Link>
      </div>
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
