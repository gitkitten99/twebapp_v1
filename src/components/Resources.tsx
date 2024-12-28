import React, { useState } from 'react';
import { LinkIcon } from './icons/LinkIcon';
import type { UsefulLink } from '../types';

type Props = {
  links: UsefulLink[];
};

type ResourceType = 'all' | 'video' | 'article' | 'tool';

export function Resources({ links }: Props) {
  const [selectedType, setSelectedType] = useState<ResourceType>('all');

  const filteredLinks = selectedType === 'all' 
    ? links 
    : links.filter(link => link.type === selectedType);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-center p-4 space-x-2 overflow-x-auto">
        <button
          onClick={() => setSelectedType('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedType === 'all' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType('video')}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedType === 'video' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          Videos
        </button>
        <button
          onClick={() => setSelectedType('article')}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedType === 'article' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          Articles
        </button>
        <button
          onClick={() => setSelectedType('tool')}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedType === 'tool' ? 'bg-blue-500' : 'bg-[#2C2C2C]'
          }`}
        >
          Tools
        </button>
      </div>

      <div className="px-4 space-y-4">
        {filteredLinks.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#1C1C1C] rounded-lg p-4 hover:bg-[#2C2C2C] transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-2">{link.title}</h2>
                <p className="text-gray-400 text-sm">{link.description}</p>
                <span className="inline-block mt-2 text-xs text-blue-400">
                  {link.category}
                </span>
              </div>
              <div className="ml-4">
                <LinkIcon type={link.type} className="w-6 h-6" />
              </div>
            </div>
          </a>
        ))}
        
        {filteredLinks.length === 0 && (
          <div className="text-center text-gray-400 mt-8">
            <p>No resources found</p>
          </div>
        )}
      </div>
    </div>
  );
}