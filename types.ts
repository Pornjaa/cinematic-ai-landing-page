export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}