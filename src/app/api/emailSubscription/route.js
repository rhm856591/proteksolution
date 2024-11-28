import emailSchema from "@/model/EmailSchema"
import dbConnect from "@/config/dbConnect"
import { NextResponse } from "next/server";

export async function POST(req, res) {
    await dbConnect();
  
      try {
        const { email } = await req.json();
  
        if ( !email ) {
          return NextResponse.json({ error: "All fields are required" });
        }
  
        const newEmail = await Contact({ email });
        await newEmail.save();
  
        NextResponse.json({ success: true, data: newContact });
        return NextResponse.json({ message: 'Email submitted successfully!' }, { status: 200 });
      } catch (error) {
        NextResponse.json({ success: false, error: error.message });
        return NextResponse.json({ message: 'An error occurred. Please try again later.' }, { status: 500 });
      }
  }