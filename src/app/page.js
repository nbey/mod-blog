import Image from "next/image";
import Link from "next/link";
import { loadPosts } from "@/api/load-posts";
import PostList from "./_components/posts/list";


export default async function Home() {
  const posts = await loadPosts()

  return (
    <PostList />
  );
}
