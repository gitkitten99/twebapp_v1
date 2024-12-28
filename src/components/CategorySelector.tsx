import React from 'react';
import { Home, Wallet, TrendingUp } from 'lucide-react';
import type { Category } from '../types';

type Props = {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

export function CategorySelector({ selectedCategory, onSelectCategory }: Props) {
  return (
    <div className="flex justify-center p-4 bg-[#1C1C1C] mb-4 overflow-x-auto">
      <div className="flex space-x-2 max-w-md w-full">
        <button
          onClick={() => onSelectCategory('lifethreads')}
          className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === 'lifethreads' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">Lifethreads</span>
        </button>
        <button
          onClick={() => onSelectCategory('crypto')}
          className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === 'crypto' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          <Wallet className="w-4 h-4" />
          <span className="text-sm">Crypto</span>
        </button>
        <button
          onClick={() => onSelectCategory('economy')}
          className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 rounded-full whitespace-nowrap ${
            selectedCategory === 'economy' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Economy</span>
        </button>
      </div>
    </div>
  );
}