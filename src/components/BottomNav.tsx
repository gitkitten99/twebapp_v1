import React from 'react';
import { Home, Library, Bookmark } from 'lucide-react';

export type View = 'home' | 'resources' | 'saved';

type Props = {
  currentView: View;
  onChangeView: (view: View) => void;
};

export function BottomNav({ currentView, onChangeView }: Props) {
  return (
    <nav className="fixed bottom-0 w-full bg-[#1C1C1C] border-t border-[#2C2C2C] p-4">
      <div className="flex justify-around max-w-md mx-auto">
        <button 
          onClick={() => onChangeView('home')}
          className={`p-2 rounded-full transition-colors ${
            currentView === 'home' ? 'bg-blue-500/20' : 'hover:bg-[#2C2C2C]'
          }`}
        >
          <Home className={`w-6 h-6 ${currentView === 'home' ? 'text-blue-500' : ''}`} />
        </button>
        <button 
          onClick={() => onChangeView('resources')}
          className={`p-2 rounded-full transition-colors ${
            currentView === 'resources' ? 'bg-blue-500/20' : 'hover:bg-[#2C2C2C]'
          }`}
        >
          <Library className={`w-6 h-6 ${currentView === 'resources' ? 'text-blue-500' : ''}`} />
        </button>
        <button 
          onClick={() => onChangeView('saved')}
          className={`p-2 rounded-full transition-colors ${
            currentView === 'saved' ? 'bg-blue-500/20' : 'hover:bg-[#2C2C2C]'
          }`}
        >
          <Bookmark className={`w-6 h-6 ${
            currentView === 'saved' ? 'fill-blue-500 text-blue-500' : ''
          }`} />
        </button>
      </div>
    </nav>
  );
}