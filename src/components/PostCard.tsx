import React from 'react';
import { Bookmark } from 'lucide-react';
import type { Post } from '../types';

type Props = {
  post: Post;
  isSaved: boolean;
  onToggleSave: (postId: string) => void;
};

export function PostCard({ post, isSaved, onToggleSave }: Props) {
  return (
    <article className="bg-[#1C1C1C] rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <button
          onClick={() => onToggleSave(post.id)}
          className="p-1 hover:bg-[#2C2C2C] rounded-full transition-colors"
        >
          <Bookmark
            className={`w-5 h-5 ${isSaved ? 'fill-blue-500 text-blue-500' : 'text-gray-400'}`}
          />
        </button>
      </div>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <div className="flex items-center space-x-4">
          <span>❤️ {post.likes}</span>
          <span>💬 {post.comments}</span>
        </div>
      </div>
    </article>
  );
}