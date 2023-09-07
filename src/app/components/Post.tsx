import { Post } from "@/types/Post";
import Link from "next/link";

interface Props {
  post: Post;
  handleDel: (id: number) => void;
}

const Post = (props: Props) => {
  const { post } = props;

  return (
    <div className="py-6 px-8">
      <div className="max-w-2xl mx-auto relative">
        <span
          className="text-red-800 absolute right-0 top-0 p-2 cursor-pointer"
          onClick={() => post.id && props.handleDel(post.id)}
        >
          x
        </span>
        <Link href={`/edit-post/${post.id}`} className="text-xs absolute right-5 top-1 p-2 underline">
          Editar post
        </Link>
        <Link
          href={`/${post.id}`}
          className="flex flex-col-reverse sm:flex-row shadow-lg p-4 rounded-xl"
        >
          <img
            alt="placeholder"
            src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
            className="sm:w-[125px] sm:h-[168px] rounded-md object-cover text-[10px] m-auto max-w-[80%]"
          />
          {/* right column */}
          <div className="p-5">
            <h2 className="text-[#2B283A] font-bold text-[25px] mb-4">
              {post.title}
            </h2>
            <p className="text-[10.24px] leading-4">{post.body}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Post;
