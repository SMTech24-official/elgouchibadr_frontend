"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { ChevronDown, ArrowUp, ChevronUp } from "lucide-react"
import Image from "next/image"
import man from '@/assets/women.png'

type Comment = {
  id: string
  author: {
    name: string
    avatar: string
  }
  content: string
  votes: number
}

type FormValues = {
  comment: string
}

export default function CommentSection() {
  // Sample initial comments
  const allComments: Comment[] = [
    {
      id: "1",
      author: {
        name: "ux.saifur.info",
        avatar: man.src,
      },
      content: "Well bought.... instant $10-15K in equity after fees IMO.",
      votes: 12,
    },
    {
      id: "2",
      author: {
        name: "car_enthusiast",
        avatar: man.src,
      },
      content: "The GT4 is such a driver's car. Perfect balance!",
      votes: 8,
    },
    {
      id: "3",
      author: {
        name: "porsche_lover",
        avatar: man.src,
      },
      content: "That Martini livery looks fantastic on this model.",
      votes: 15,
    },
    {
      id: "4",
      author: {
        name: "track_day",
        avatar: man.src,
      },
      content: "How does it compare to the GT4 RS?",
      votes: 5,
    },
    {
      id: "5",
      author: {
        name: "auto_expert",
        avatar: man.src,
      },
      content: "The PDK in these is one of the best transmissions available.",
      votes: 20,
    },
  ]

  const [comments, setComments] = useState<Comment[]>(allComments)
  const [showAllComments, setShowAllComments] = useState(false)
  const { register, handleSubmit, reset } = useForm<FormValues>()

  // Determine which comments to display
  const displayedComments = showAllComments ? comments : comments.slice(0, 3)

  const onSubmit = (data: FormValues) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: {
        name: "You", // Changed to indicate current user
        avatar: man.src,
      },
      content: data.comment,
      votes: 0,
    }

    setComments([newComment, ...comments])
    reset()
  }

  const handleVote = (id: string) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, votes: comment.votes + 1 } : comment
    ))
  }

  const toggleComments = () => {
    setShowAllComments(!showAllComments)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Comments & Bids</h2>

      {/* Comment form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="relative">
          <input
            {...register("comment", { required: true })}
            placeholder="Add Comments..."
            className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </form>

      {/* Comments list */}
      <div className="space-y-6 mb-6">
        {displayedComments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image 
                src={comment.author.avatar} 
                width={40} 
                height={40} 
                alt={`${comment.author.name}'s avatar`} 
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="mb-1">
                <span className="font-medium text-sm">{comment.author.name}</span>
              </div>
              <p className="text-gray-800 mb-2">{comment.content}</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleVote(comment.id)}
                  className="flex items-center gap-1 text-gray-500 hover:text-gray-700 bg-gray-100 px-3 py-1 rounded-md transition-colors"
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="text-sm">{comment.votes}</span>
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less button */}
      {comments.length > 3 && (
        <button
          onClick={toggleComments}
          className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          {showAllComments ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Less Comments
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              Show More Comments ({comments.length - 3} more)
            </>
          )}
        </button>
      )}
    </div>
  )
}