"use client";

import { usePosts } from "@/hooks/use-posts";
import Post from "./components/Post";
import PostService from "../services/posts";
import Loading from "./Loading";

export default function Home() {
  const { error, isLoading, posts, setPosts } = usePosts();

  const handleDel = async (id: number) => {
    const userResponse = confirm("Estas seguro que deseas eliminar este post?");

    if (userResponse) {
      PostService.deletePost({ id });
      const filtered = posts.filter((post) => post.id !== id);
      setPosts(filtered);
    }
  };

  return (
    <>
      {error && <h1 className="text-2xl">An error has occurd</h1>}
      {isLoading && (
          <Loading
            className="absolute top-1/2 right-1/2 translate-x-1/2"
          />
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} handleDel={handleDel} />
      ))}
    </>
  );
}
