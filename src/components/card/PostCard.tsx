"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUp, MessageSquare, ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Post } from "@/types/Interface.type"
import CommentSection from "./CommentItem"

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [showComments, setShowComments] = useState(true)
  const [commentText, setCommentText] = useState("")

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      {/* Post Header */}
      <div className="flex items-center gap-2 p-3">
        <Avatar className="h-6 w-6">
          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.username} />
          <AvatarFallback>{post.author.username[0]}</AvatarFallback>
        </Avatar>
        <div className="text-sm font-medium">{post.author.username}</div>
        <div className="text-xs text-gray-500">{post.timeAgo}</div>
      </div>

      {/* Post Content */}
      <div className="px-3 pb-2 text-sm">{post.content}</div>

      {/* Post Image */}
      <div className="relative aspect-[16/9] w-full p-4 cursor-pointer" onClick={toggleComments}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt="Post image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      {/* Post Stats */}
      <div className="flex items-center gap-4 border-b border-t border-gray-100 px-3 py-2">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowUp className="h-4 w-4" />
          </Button>
          <span className="text-xs">{post.upvotes}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4 text-gray-500" />
          <span className="text-xs">{post.comments.length}</span>
        </div>
      </div>

      {/* Comment Input */}
      <div className="flex items-center gap-2 border-b border-gray-100 p-3">
        <Input
          placeholder="Add Comments..."
          className="h-9 text-sm"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-blue-500">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Comments Section */}
      {showComments && <CommentSection comments={post.comments} />}
    </div>
  )
}
