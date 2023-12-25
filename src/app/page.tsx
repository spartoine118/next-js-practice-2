import PostContainer from "@/components/home/PostContainer";
import { getPosts } from "@/services/post.service";

export default async function Page() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Hello World</div>
      <div className="flex flex-col gap-4 p-4 border-2 border-solid border-blue-400">
        {posts.map((post) => (
          <PostContainer key={post._id.toString()} post={post} />
        ))}
      </div>
    </main>
  );
}
