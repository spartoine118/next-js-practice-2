import { getPosts, getPostsWithQuery } from "@/services/post.service";
import React from "react";
import PostContainer from "./PostContainer";
import lodash from "lodash";

const PostList = async ({ query }: { query: string | undefined }) => {
  const posts = query ? await getPostsWithQuery(query) : await getPosts();
  return (
    <div className="flex flex-col gap-4 p-4 border-4 border-solid border-blue-400 w-[40%] items-center overflow-y-scroll">
      {posts.length ? (
        posts.map((post) => (
          <PostContainer key={post._id.toString()} post={post} />
        ))
      ) : (
        <h1>No Posts</h1>
      )}
    </div>
  );
};

export default PostList;
