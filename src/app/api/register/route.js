import { NextResponse } from "next/server";
import { connectDB } from "../../../../utils/connect";
import User from "../../../../models/userModel";
export async function POST(req) {
  try {
    console.log("connect DB");
    await connectDB();
    const { username, email, password } = await req.json();
    console.log({ username, email, password });
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) {
      return NextResponse.json(
        { message: "Username or email already exists" },
        { status: 400 }
      );
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password });
    return NextResponse.json(
      { message: "User Registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while registering user", error);
    return NextResponse.json(
      { message: "Error Occurred while adding user" },
      { status: 500 }
    );
  }
}
