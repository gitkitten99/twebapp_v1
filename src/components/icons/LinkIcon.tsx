import React from 'react';
import { ExternalLink, Youtube, Wrench } from 'lucide-react';
import type { UsefulLink } from '../../types';

type Props = {
  type: UsefulLink['type'];
  className?: string;
};

export function LinkIcon({ type, className = '' }: Props) {
  switch (type) {
    case 'video':
      return <Youtube className={`${className} text-red-500`} />;
    case 'article':
      return <ExternalLink className={`${className} text-blue-500`} />;
    case 'tool':
      return <Wrench className={`${className} text-green-500`} />;
  }
}