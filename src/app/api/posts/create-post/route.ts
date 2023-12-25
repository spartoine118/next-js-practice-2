import { connectedDatabase } from "@/database/connection";
import { Post } from "@/database/types/types";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(request: NextRequest) {
  const body: Post = await request.json();
  const dbConnection = await connectedDatabase();
  const post = await dbConnection.collection<Post>("posts").insertOne(body);
  return Response.json(post);
}
