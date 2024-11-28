import dbConnect from "@/config/dbConnect"; // Utility to connect to MongoDB
import Contact from "@/model/ContactSchema"; // Path to your schema file
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  await dbConnect();

    try {
      const { name, email, message } = await req.json();

      if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields are required" });
      }

      const newContact = await Contact({ name, email, message });
      await newContact.save();

      // NextResponse.json({ success: true, data: newContact });
      return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
    } catch (error) {
      // NextResponse.json({ success: false, error: error.message });
      return NextResponse.json({ message: 'An error occurred. Please try again later.' }, { status: 500 });
    }
}
