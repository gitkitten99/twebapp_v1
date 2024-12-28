import React, { useState } from 'react';
import { Menu, Search, Plus } from 'lucide-react';
import { CreatePost } from './admin/CreatePost';
import { useAuth } from '../hooks/useAuth';

export function Header() {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const { signOut } = useAuth();

  const handlePostSuccess = () => {
    // You could add a refresh posts function here
    window.location.reload();
  };

  return (
    <>
      <header className="sticky top-0 bg-[#1C1C1C] p-4 flex items-center justify-between">
        <Menu className="w-6 h-6" />
        <div className="flex-1 mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-[#2C2C2C] rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowCreatePost(true)}
            className="p-2 hover:bg-[#2C2C2C] rounded-full transition-colors"
            title="Create new post"
          >
            <Plus className="w-5 h-5" />
          </button>
          <button
            onClick={() => signOut()}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {showCreatePost && (
        <CreatePost
          onClose={() => setShowCreatePost(false)}
          onSuccess={handlePostSuccess}
        />
      )}
    </>
  );
}