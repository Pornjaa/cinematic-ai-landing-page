
import { NavItem, PortfolioItem, Course, Article, FreeTutorialItem } from './types';

export const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61563219540499";
export const YOUTUBE_URL = "https://www.youtube.com/@cinematicai112";
export const TIKTOK_URL = "https://www.tiktok.com/@cinematicaiofficial";
export const ADMIN_EMAIL = "workanddontdie@gmail.com";
export const SITE_URL = "https://cinematicaicourse.com";
export const SITE_NAME = "Cinematic AI";
export const SITE_LOGO = "https://i.postimg.cc/TYspy9Fb/1004.png";

export const BANK_DETAILS = {
  bankName: "ธนาคารกสิกรไทย (KBANK)",
  accountName: "นาย พรอนันต์ เสริมสุข",
  accountNumber: "119-242-8293"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'หน้าแรก', id: 'home' },
  { label: 'AI Prompt Buddy', id: 'ai-director' },
  { label: 'คอร์สเรียน', id: 'courses' },
  { label: 'บทความ', id: 'articles' },
  { label: 'ผลงาน', id: 'showreel-page' },
  { label: 'Free Tutorial', id: 'free-tutorials', isButton: true },
];

export const FAQ_ITEMS = [
  {
    question: "Cinematic AI สอนเกี่ยวกับอะไร?",
    answer: "Cinematic AI เป็นสถาบันสอนสร้างภาพยนตร์ด้วยปัญญาประดิษฐ์ (AI) ครบวงจร สอนตั้งแต่การใช้เครื่องมือ Generative AI ต่างๆ เช่น Kling, Nano Banana, Sora2 เพื่อสร้างภาพนิ่งและภาพเคลื่อนไหว ไปจนถึงเทคนิคการเล่าเรื่องและการตัดต่อระดับมืออาชีพ"
  },
  {
    question: "ไม่มีพื้นฐานการตัดต่อมาก่อน เรียนได้ไหม?",
    answer: "เรียนได้แน่นอน คอร์สของเราออกแบบมาสำหรับผู้เริ่มต้น (Beginner) ไปจนถึงระดับสูง โดยสอนตั้งแต่พื้นฐานการใช้งานเครื่องมือ การเขียน Prompt ภาษาไทย ไปจนถึงกระบวนการผลิตงานจริง"
  }
];

export const FREE_TUTORIALS_DATA: FreeTutorialItem[] = [
  {
    id: 'tut-1',
    youtubeUrl: 'https://youtu.be/c1qpdXcpODc?si=kqush6y-btMZTkIG',
    title: 'สอนฟรี กลายร่างด้วย nano banana'
  },
  {
    id: 'tut-6',
    youtubeUrl: 'https://youtu.be/_CsH0UnFTcQ',
    title: 'kling o1 สอนฟรี ไม่มีกั๊ก'
  }
];

export const HOME_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Master of Horror Ad',
    description: 'โฆษณาคอร์สเฉพาะทางสำหรับสายสยองขวัญโดยเฉพาะ',
    youtubeUrl: 'https://youtu.be/vbQP5C0Y_wk?si=9oFKLChlnU12ZtxO'
  },
  {
    id: '2',
    title: 'Test Subject Escape',
    description: 'หญิงสาวถูกล่าโดยสัตว์ประหลาดในห้องทดลองสุดสยอง',
    youtubeUrl: 'https://youtu.be/61wcZj5GolA?si=fOuJJxY855AXZJQS'
  }
];

export const FULL_SHOWREEL_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Master of Horror Ad',
    description: 'โฆษณาคอร์สเฉพาะทางสำหรับสายสยองขวัญโดยเฉพาะ',
    youtubeUrl: 'https://youtu.be/vbQP5C0Y_wk?si=9oFKLChlnU12ZtxO'
  },
  {
    id: '7',
    title: 'Come to me my uncle',
    description: 'เมื่อตำรวจสองนายต้องตรวจสอบห้องสุดสยองในคอนโดหรู',
    youtubeUrl: 'https://youtu.be/wyGFAVSX6rU'
  }
];

export const ONSITE_VIDEOS = [
  {
    id: 'onsite-1',
    title: 'บรรยากาศการสอน Onsite (Part 1)',
    youtubeUrl: 'https://youtu.be/6xbAv67ZE-c'
  }
];

export const HERO_BACKGROUNDS = [
  "https://i.postimg.cc/9MkkHwHP/give.jpg",
  "https://i.postimg.cc/TYspy9Fb/1004.png"
];

export const COURSES_DATA: Course[] = [
  {
    id: 'generative-kling',
    title: 'Generative Kling',
    description: 'เหมาะสำหรับผู้เริ่มต้น สอนตั้งแต่พื้นฐานการใช้งานเครื่องมือทั้งหมดของ Kling AI',
    image: 'https://i.postimg.cc/SNpxZqCs/generative.png',
    syllabus: [
      'การสร้างภาพนิ่งด้วย Kling AI',
      'การใช้ Text to Image',
      'การทำ lip sync'
    ],
    pricing: [
      {
        title: 'Online Group',
        price: '990 บาท',
        originalPrice: '1,590 บาท'
      }
    ]
  }
];

export const ENROLLMENT_STEPS = [
  'กด "สมัครเรียน" เพื่อเข้าสู่แบบฟอร์ม',
  'กรอกข้อมูลและแนบสลิป',
  'กดยืนยันการสมัคร',
  'รอทีมงานติดต่อกลับ'
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'kling-ai-o1-update',
    title: 'Kling AI O1 อัพเกรดเปลี่ยนโลก',
    excerpt: 'เปิดให้ทดลองใช้กันแล้วสำหรับ Kling o1 โมเดลล่าสุด...',
    date: '24 มกราคม 2025',
    image: 'https://i.postimg.cc/zBfRHqfv/kling.png',
    content: ['เปิดให้ทดลองใช้กันแล้วสำหรับ Kling o1...']
  }
];
