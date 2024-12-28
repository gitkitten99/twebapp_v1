import React from 'react';
import { PostCard } from './PostCard';
import type { Post } from '../types';

type Props = {
  posts: Post[];
  savedPosts: string[];
  onToggleSave: (postId: string) => void;
};

export function SavedPosts({ posts, savedPosts, onToggleSave }: Props) {
  const savedPostItems = posts.filter(post => savedPosts.includes(post.id));

  return (
    <div className="px-4 space-y-4 max-w-2xl mx-auto">
      {savedPostItems.map(post => (
        <PostCard
          key={post.id}
          post={post}
          isSaved={true}
          onToggleSave={onToggleSave}
        />
      ))}
      {savedPostItems.length === 0 && (
        <div className="text-center text-gray-400 mt-8">
          <p>No saved posts yet</p>
        </div>
      )}
    </div>
  );
}