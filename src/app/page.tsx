import PostContainer from "@/components/home/PostContainer";
import { getPosts } from "@/services/post.service";

export default async function Page() {
  const posts = await getPosts();
  return (
    <main className="flex max-h-screen flex-col items-center gap-4 bg-sky-100">
      <h1 className="text-2xl font-semibold italic p-4">New posts</h1>
      {posts.length && (
        <div className="flex flex-col gap-4 p-4 border-4 border-solid border-blue-400 w-[40%] items-center overflow-y-scroll">
          {posts.map((post) => (
            <PostContainer key={post._id.toString()} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
