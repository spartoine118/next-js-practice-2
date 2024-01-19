import { Post, PostWithId } from "@/database/types/types";
import { InsertOneResult } from "mongodb";

export const getPosts = async (): Promise<PostWithId[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/posts`, {
    cache: "no-store",
    method: "GET",
  });
  const post: PostWithId[] = await res.json();
  return post;
};

export const getPost = async (id: string): Promise<PostWithId> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/posts/${id}`);
  const post: PostWithId = await res.json();
  return post;
};

export const getPostsWithQuery = async (
  query: string
): Promise<PostWithId[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/posts/search/${query}`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    }
  );
  const posts: PostWithId[] = await res.json();
  return posts;
};

export const createPost = async (
  name: string,
  content: string,
  userId: string
): Promise<InsertOneResult<Post>> => {
  const bodyObj: Post = { userId: userId, name: name, content: content };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/api/posts/create-post`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(bodyObj),
    }
  );
  const post: InsertOneResult<Post> = await res.json();
  return post;
};