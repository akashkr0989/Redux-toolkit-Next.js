"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

function NextAuthPage() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <h1>Hi welcome back</h1>
          {session.user?.name}
        </>
      ) : (
        <>
          <h1>You are not logged in</h1>

          <button onClick={() => signIn("google")}>Sign In with Google</button>
          <button onClick={() => signIn("github")}>Sign In with Github</button>
        </>
      )}
    </div>
  );
}

export default NextAuthPage;
