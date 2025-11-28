import { NavItem, PortfolioItem } from './types';

export const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61563219540499";
export const YOUTUBE_URL = "https://www.youtube.com/@cinematicai112";
export const TIKTOK_URL = "https://www.tiktok.com/@cinematicaiofficial";

export const NAV_ITEMS: NavItem[] = [
  { label: 'คอร์สเรียนทั้งหมด', href: '#courses' },
  { label: 'บทความ', href: '#articles' },
  { label: 'ผลงานของเรา', href: '#portfolio' },
  { label: 'สมัครเรียน', href: '#apply', isButton: true },
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'ตัวอย่างผลงาน: Cinematic AI Showcase',
    description: 'ชมตัวอย่างภาพยนตร์ที่สร้างสรรค์ด้วย AI ทั้งภาพและเสียง',
    youtubeUrl: 'https://youtu.be/vbQP5C0Y_wk?si=9oFKLChlnU12ZtxO'
  }
];

export const DEFAULT_BG_IMAGE = "https://picsum.photos/1920/1080";