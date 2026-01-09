
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
}

export interface NavItem {
  label: string;
  id: string;
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
  content: string[];
  image: string;
  date: string;
  youtubeId?: string;
}

export interface FreeTutorialItem {
  id: string;
  youtubeUrl: string;
  title: string;
}

export interface AiScene {
  sceneNumber: number;
  action: string;
  shotSize: string;
  angle: string;
  // orientation property added to fix property missing error in components/AiDirectorTool.tsx
  orientation: string;
  lighting: string;
  cinematicReasoning: string;
  optimizedPrompt: string;
}

export interface AiStoryAnalysis {
  scenes: AiScene[];
  directorTips: string;
  suggestedStyle: string;
}