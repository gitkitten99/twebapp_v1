export type Category = 'lifethreads' | 'crypto' | 'economy';

export type Post = {
  id: string;
  category: Category;
  title: string;
  excerpt: string;
  date: string;
  likes: number;
  comments: number;
};

export type UsefulLink = {
  id: string;
  category: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'tool';
  description: string;
};