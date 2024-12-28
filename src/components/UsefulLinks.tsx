import React from 'react';
import { LinkIcon } from './icons/LinkIcon';
import type { UsefulLink } from '../types';

type Props = {
  links: UsefulLink[];
  currentType: 'video' | 'article' | 'tool';
};

export function UsefulLinks({ links, currentType }: Props) {
  const filteredLinks = links.filter(link => link.type === currentType);

  return (
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
          <p>No {currentType}s available</p>
        </div>
      )}
    </div>
  );
}