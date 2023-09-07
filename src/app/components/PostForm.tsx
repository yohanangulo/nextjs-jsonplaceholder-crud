"use client";

import { Post } from "@/types/Post";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import PostService from "../../services/posts";
import Loading from "../Loading";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type Props = {
  post?: {
    post?: Post;
    error?: boolean;
    isLoading: boolean;
  };
  postId?: string | number;
};

const initialState = {
  title: "",
  body: "",
};

const PostForm = (props: Props) => {
  const [post, setPost] = useState<Post>(initialState);
  const [isSavig, setIsSavig] = useState(false);

  useEffect(() => {
    if (props.post?.post) {
      const { body, title } = props.post.post;
      setPost({ body, title });
    }
  }, [props.post?.isLoading!]);


  const handleInputChange = (e: InputChange) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSavig(true);

    if (props.postId) {
      await PostService.updatePost({id: props.postId, post }).then(res => console.log(res.data))
    } else {
      await PostService.createNewPost(post);
      setPost(initialState);
    }
    
    alert( props.postId ? 'Post actualizado con exito!' : "post creado con exito!" )
    setIsSavig(false);
  };

  return (
    <div className="max-w-[600px] mx-auto">
      <h1 className="text-2xl text-center mb-12 font-bold">
        {props.postId ? "Editar post" : "Crea un nuevo post"}
      </h1>
      {props.postId && props.post?.isLoading ? (
        <Loading className="absolute top-1/2 right-1/2 translate-x-1/2" />
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} className="px-8">
          <div className="mb-6">
            <label htmlFor="titulo" className="block font-bold text-sm mb-2">
              Titulo
            </label>
            <input
              type="text"
              name="title"
              id="titulo"
              placeholder="Escribe un titulo para tu post"
              className="border-black border-[1px] w-full p-2.5 rounded-lg"
              onChange={handleInputChange}
              value={post.title}
            />
          </div>
          <div className="mb-6">
            <label className="block font-bold text-sm mb-2" htmlFor="body">
              Contenido
            </label>
            <textarea
              className="border-black border-[1px] resize-none p-2.5 rounded-lg block w-full"
              name="body"
              id="body"
              rows={4}
              placeholder="Escribe el contenido del post"
              onChange={handleInputChange}
              value={post.body}
            ></textarea>
          </div>
          {props.postId ? (
            <button
              type="submit"
              disabled={isSavig && true}
              className="px-5 disabled:bg-slate-500 text-white font-[500] text-sm py-2 bg-[#4b42c7] hover:bg-[#2d259b] transition-colors duration-300 rounded-full block mx-auto"
            >
              {isSavig ? "Guardando..." : "Guardar"}
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSavig && true}
              className="px-5 disabled:bg-slate-500 text-white font-[500] text-sm py-2 bg-red-500 hover:bg-[#e33b3b] transition-colors duration-300 rounded-full block mx-auto"
            >
              {isSavig ? "Creando..." : "Crear post"}
            </button>
          )}
        </form>
      )}
    </div>
  );
};
export default PostForm;
