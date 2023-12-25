import { PostWithId } from "@/database/types/types";
import { getPosts } from "@/services/post.service";
import Link from "next/link";
import React from "react";

interface PostContainerProps {
  post: PostWithId;
}

const PostContainer = async ({ post }: PostContainerProps) => {
  return (
    <div className="border-2 rounded border-blue-400 border-solid p-4">
      <Link href={`/post/${post._id.toString()}`}>{post.name}</Link>
      <p>{post.content}</p>
    </div>
  );
};

export default PostContainer;
