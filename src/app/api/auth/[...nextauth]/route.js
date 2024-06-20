import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../../utils/connect";
import User from "../../../../../models/userModel";
async function login(credentials) {
  try {
    connectDB();
    const user = await User.findOne({ email: credentials.email });
    if (!user) throw new Error("Wrong credentials");
  } catch (error) {
    console.log(error, "error while logging in");
    throw new Error("Wrong credentials");
  }
}

export const authOptions = {
  pages: {
    signIn: "/login"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          console.log(credentials, "credentials");
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Failed to authorize credentials");
        }
      }
    })
  ],
  callbacks: {
    async jwt({token, user}) {
        if (user) {
            token.username = user.username;
            token.email = user.email;
            token.id = user.id;
        }
        console.log("This is token", token);
        return token;
    },
    async session({session, token}) {
        if (token) {
            session.user.username = token.username;
            session.user.email = token.email;
            session.user.id = token.id;
        }
        console.log("this is session", session);
        return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
