import React from 'react';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { PostCard } from './components/PostCard';
import { BottomNav } from './components/BottomNav';
import { Resources } from './components/Resources';
import { SavedPosts } from './components/SavedPosts';
import { useSavedPosts } from './hooks/useSavedPosts';
import type { Category, View } from './types';

// Mock data - move to a separate data file in a real application
const posts = [
  {
    id: '1',
    category: 'lifethreads',
    title: 'The Power of Daily Habits',
    excerpt: 'How small changes can lead to remarkable results...',
    date: '2024-03-15',
    likes: 245,
    comments: 23
  },
];

const usefulLinks = [
  {
    id: '1',
    category: 'Productivity',
    title: 'Time Management Mastery',
    url: 'https://example.com/time-management',
    type: 'video',
    description: 'Learn effective time management techniques'
  },
];

export function App() {
  const [currentView, setCurrentView] = React.useState<View>('home');
  const [selectedCategory, setSelectedCategory] = React.useState<Category>('lifethreads');
  const { savedPosts, toggleSavePost } = useSavedPosts();

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <CategorySelector
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <div className="px-4 space-y-4 max-w-2xl mx-auto">
              {posts
                .filter(post => post.category === selectedCategory)
                .map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    isSaved={savedPosts.includes(post.id)}
                    onToggleSave={toggleSavePost}
                  />
                ))}
            </div>
          </>
        );
      case 'resources':
        return <Resources links={usefulLinks} />;
      case 'saved':
        return <SavedPosts posts={posts} savedPosts={savedPosts} onToggleSave={toggleSavePost} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white pb-20">
      <Header />
      {renderContent()}
      <BottomNav currentView={currentView} onChangeView={setCurrentView} />
    </div>
  );
}