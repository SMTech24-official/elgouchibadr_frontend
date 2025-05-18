// import PostCard from "@/components/post-card"
// import type { Post } from "@/types/post"

import { Post } from "@/types/Interface.type"
import PostCard from "./PostCard"

interface PostFeedProps {
  posts: Post[]
}

export default function PostFeed({ posts }: PostFeedProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
