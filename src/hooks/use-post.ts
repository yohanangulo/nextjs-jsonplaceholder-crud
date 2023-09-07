import { useEffect, useState } from "react";
import PostService from "../services/posts";
import { Post } from "@/types/Post";

export function usePost({postId} : {postId: number | string}) {
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    setError(undefined);
    setPost(undefined);
    PostService.Post({ id: postId })
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return {
    post,
    error,
    isLoading,
  };
}
