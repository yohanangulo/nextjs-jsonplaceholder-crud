'use client'
import PostForm from '../../components/PostForm'
import { usePost } from '@/hooks/use-post'

type PageProps = {
  params: {
    id: string
  }
}

const Page = ({ params: { id: postId } }: PageProps) => {
  const post = usePost({ postId })
  return <PostForm post={post} postId={postId} />
}
export default Page
