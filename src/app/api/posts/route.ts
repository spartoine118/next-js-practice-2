import { connectedDatabase } from "@/database/connection";
import { Post } from "@/database/types/types";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(_: Request) {
  const dbConnection = await connectedDatabase();
  const posts = await dbConnection.collection<Post>("posts").find().toArray();
  return Response.json(posts);
}
