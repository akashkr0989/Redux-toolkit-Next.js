"use client";
import React from "react";

function RegisterPage() {
  const handleLogin = async () => {
    const payload = {
      username: "Marvel",
      email: "marvel@yopmail.com",
      password: "123456"
    };

    console.log("payload", payload);

    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        console.log("User registration successful");
      } else {
        console.log("User registration failed, Something is wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Hi this is Register page</h1>
      <button onClick={handleLogin}>Register</button>
    </div>
  );
}

export default RegisterPage;
