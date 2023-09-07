"use client";

import { usePost } from "@/hooks/use-post";
import { Metadata } from 'next'
import Loading from "../Loading";

export const metadata: Metadata = {
  title: '',
}

type PageProps = {
  params : {
    id: string
  }
}


const PostPage = ( { params : {id: postId} } : PageProps) => {

  const { error, isLoading, post } = usePost({ postId });

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {isLoading ? (
        <Loading className="absolute top-1/2 right-1/2 translate-x-1/2" />
      ) : (
        <div className="lg:shadow-lg max-w-4xl mx-auto py-12">
          <img
            src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
            alt="image place holder"
            width={"400px"}
            className="block mx-auto p-5"
          />
          <div className="px-[80px]">
            <h1 className="text-[#2B283A] font-bold text-[25px] mb-4">
              {post?.title}
            </h1>
            <p>{post?.body}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default PostPage;
