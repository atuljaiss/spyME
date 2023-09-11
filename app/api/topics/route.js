import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { parse } from "url";
import { parse as parseQueryString } from "querystring";


export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET(request) {
  await connectMongoDB();
  
  const { query } = parse(request.url);
  

  // Parse the query parameters using the querystring module.
  const queryParams = parseQueryString(query) || {};

  console.log(queryParams)
  console.log("hello")
  // Use the 'title' query parameter or provide a default value if it's not present.
  // const title = queryParams.title || "geetz";

  
 
  
  const titles = queryParams.emailid;
  console.log("heelo", titles)
  const topics = await User.find({
    email: titles 
  });
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
