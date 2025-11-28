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