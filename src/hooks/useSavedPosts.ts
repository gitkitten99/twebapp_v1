import { useState, useEffect } from 'react';

export function useSavedPosts() {
  const [savedPosts, setSavedPosts] = useState<string[]>(() => {
    const saved = localStorage.getItem('savedPosts');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
  }, [savedPosts]);

  const toggleSavePost = (postId: string) => {
    setSavedPosts(prev => 
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return { savedPosts, toggleSavePost };
}