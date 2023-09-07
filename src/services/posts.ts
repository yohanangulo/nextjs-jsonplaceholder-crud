import axios from 'axios'

import { Post } from '../types/Post'

const API = process.env.NEXT_PUBLIC_JSONPLACEHOLDER_API

class PostService {
  async getPosts() {
    return await axios.get<Post[]>(`${API}/posts`)
  }

  async getPost({ id }: { id: number | string }) {
    return await axios.get<Post>(`${API}/posts/${id}`)
  }

  async createNewPost(post: Post) {
    return await axios.post(`${API}/posts`, post)
  }

  async updatePost({ id, post }: { id: number | string; post: Post }) {
    return await axios.put(`${API}/posts/${id}`, post)
  }

  async deletePost({ id }: { id: number }) {
    return await axios.delete(`${API}/posts/${id}`)
  }
}

const postService = new PostService()
export default postService
