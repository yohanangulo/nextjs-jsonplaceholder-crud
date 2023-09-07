import { useEffect, useState } from "react";
import PostService from "../services/posts";
import { Post } from "@/types/Post";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    setPosts([]);
    PostService.getPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    posts,
    error,
    isLoading,
    setPosts
  }
}
