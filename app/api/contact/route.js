import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { toast } from "react-toastify";

export async function POST(req) {
  const { fullname, phoneno, email } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname,  phoneno, email });

    return NextResponse.json({
       msg: ["We recieved your application! Our team will contact you shortly."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Your request did not reach us, try contacting on WhatsApp."] });
    }
  }
}