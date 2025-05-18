"use client"

import { useState } from "react"
import { ArrowUp, Reply } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import type { Comment } from "@/types/"
import { Comment } from "@/types/Interface.type"


interface CommentSectionProps {
  comments: Comment[]
}

export default function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="divide-y divide-gray-100">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

interface CommentItemProps {
  comment: Comment
  isReply?: boolean
}

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [showReplies, ] = useState(true)

  return (
    <div className={`${isReply ? "pl-8" : ""}`}>
      <div className="flex gap-2 p-3">
        <Avatar className="h-6 w-6 shrink-0">
          <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.username} />
          <AvatarFallback>{comment.author.username[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{comment.author.username}</span>
          </div>
          <p className="text-sm text-gray-800">{comment.content}</p>

          <div className="mt-1 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                <ArrowUp className="h-3 w-3" />
              </Button>
              <span className="text-xs">{comment.upvotes}</span>
            </div>
            <Button variant="ghost" size="sm" className="h-6 px-2 py-0 text-xs">
              <Reply className="mr-1 h-3 w-3" />
              Reply
            </Button>
          </div>
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className={showReplies ? "block" : "hidden"}>
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} isReply={true} />
          ))}
        </div>
      )}
    </div>
  )
}
