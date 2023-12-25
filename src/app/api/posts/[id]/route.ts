import { connectedDatabase } from "@/database/connection";
import { Post, PostWithId } from "@/database/types/types";
import { ObjectId } from "mongodb";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const query: Partial<PostWithId> = {
    _id: new ObjectId(params.id),
  };
  const dbConnection = await connectedDatabase();
  const post = await dbConnection.collection<Post>("posts").findOne(query);
  return Response.json(post);
}
