"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    const payload = {
      email: "akash@yopmail.com",
      password: "123456",
      redirect: false
    };

    const res: any = signIn("credentials", payload);

    console.log(res);

    if (res.error) {
      alert("Login failed: " + res.error);
      return;
    }
    router.replace("/dashboard");

    console.log("payload", payload);
  };

  return (
    <div>
      <h1>Hi this is login page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
