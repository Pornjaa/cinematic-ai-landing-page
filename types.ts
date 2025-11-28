export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
}

export interface NavItem {
  label: string;
  id: string; // Changed from href to id for internal state routing
  isButton?: boolean;
}

export interface CoursePricing {
  title: string;
  price: string;
  originalPrice?: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  syllabus: string[];
  bonus?: string;
  pricing: CoursePricing[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for simple rendering
  image: string;
  date: string;
  youtubeId?: string; // Optional YouTube video ID for video articles
}

export interface FreeTutorialItem {
  id: string;
  youtubeUrl: string;
  title: string;
}