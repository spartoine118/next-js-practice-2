import { getPost, getPosts } from "@/services/post.service";
import React from "react";

export async function generateStaticParams() {
  const posts = await getPosts();
  const id = posts.map((post) => ({ id: post._id.toString() }));
  return id;
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.content}</p>
    </div>
  );
}
