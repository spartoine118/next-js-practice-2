import PostList from "@/components/home/PostList";
import SearchBar from "@/components/shared/search-bar/SearchBar";
import { useSearchParams } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  return (
    <main className="flex max-h-screen flex-col items-center gap-4 bg-sky-100">
      <SearchBar />
      <h1 className="text-2xl font-semibold italic p-4">New posts</h1>
      <PostList query={searchParams?.query} />
    </main>
  );
}
