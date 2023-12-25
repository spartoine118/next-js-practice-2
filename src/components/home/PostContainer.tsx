import { PostWithId } from "@/database/types/types";
import Link from "next/link";
import React from "react";

interface PostContainerProps {
  post: PostWithId;
}

const PostContainer = async ({ post }: PostContainerProps) => {
  return (
    <div className="border-2 rounded border-blue-400 border-solid p-4 w-fit flex flex-col gap-8 bg-white">
      <Link
        href={`/post/${post._id.toString()}`}
        className="font-medium text-2xl italic hover:text-red-500 hover:ease-in duration-100"
      >
        {post.name}
      </Link>
      {post.content.length > 200 ? (
        <p>{post.content.slice(0, 200)}...</p>
      ) : (
        <p>{post.content}</p>
      )}
    </div>
  );
};

export default PostContainer;
