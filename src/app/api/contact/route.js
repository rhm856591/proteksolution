import dbConnect from "@/config/dbConnect"; // Utility to connect to MongoDB
import Contact from "@/model/Schema"; // Path to your schema file

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, email, message } = await req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newContact = await Contact.create({ name, email, message });
      await newContact.save();

      res.status(201).json({ success: true, data: newContact });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
