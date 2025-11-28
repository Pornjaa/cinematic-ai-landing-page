import { NavItem, PortfolioItem, Course } from './types';

export const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61563219540499";
export const YOUTUBE_URL = "https://www.youtube.com/@cinematicai112";
export const TIKTOK_URL = "https://www.tiktok.com/@cinematicaiofficial";
// Placeholder for Google Form since none was provided in prompt
export const GOOGLE_FORM_URL = "https://docs.google.com/forms/"; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'หน้าแรก', id: 'home' },
  { label: 'คอร์สเรียนทั้งหมด', id: 'courses' },
  { label: 'บทความ', id: 'articles' }, // Will stay on home or feature not implemented yet
  { label: 'ผลงานของเรา', id: 'portfolio' },
  { label: 'สมัครเรียน', id: 'apply', isButton: true }, // Will link to enrollment section in courses
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'ตัวอย่างผลงาน: Cinematic AI Showcase',
    description: 'ชมตัวอย่างภาพยนตร์ที่สร้างสรรค์ด้วย AI ทั้งภาพและเสียง',
    youtubeUrl: 'https://youtu.be/vbQP5C0Y_wk?si=9oFKLChlnU12ZtxO'
  }
];

// Slideshow images provided by user
export const HERO_BACKGROUNDS = [
  "https://i.postimg.cc/TYspy9Fb/1004.png",
  "https://i.postimg.cc/63B3s14t/en.png"
];

export const COURSES_DATA: Course[] = [
  {
    id: 'generative-kling',
    title: 'Generative Kling',
    description: 'เหมาะสำหรับผู้เริ่มต้น สอนตั้งแต่พื้นฐานการใช้งานเครื่องมือทั้งหมดของ Kling AI ด้วยการใช้ Chat GPT เป็นผู้ช่วยทำให้คุณควบคุมงานสร้างสรรค์ของคุณได้อย่างง่ายดายเป็นภาษาไทยง่ายๆ',
    image: 'https://i.postimg.cc/SNpxZqCs/generative.png',
    syllabus: [
      'การสร้างภาพนิ่งด้วย Kling AI',
      'การใช้ Text to Image และ การใช้ภาพอ้างอิงเพื่อสร้างภาพนิ่ง',
      'การสร้างภาพเคลื่อนไหวด้วย Text to video',
      'การใช้ start-end frame ในงานวิดีโอ',
      'การใช้งานฟังก์ชัน Element เพื่องานพรีเซนต์สินค้าและผลิตภัณฑ์',
      'การใช้งานฟังก์ชัน Multi Element เพื่อปรับเปลี่ยนเฉพาะจุดในวิดีโอได้ดั่งใจ',
      'การใช้งาน effect สำเร็จรูป',
      'การทำ lip sync ให้ตัวละครพูดได้',
      'การตัดต่อและออกแบบเสียงเบื้องต้น',
      'แนวคิดและกระบวนการในการสร้างภาพเคลื่อนไหวแนวเล่าเรื่อง'
    ],
    bonus: 'พิเศษ*** แถมคอร์สการสอนเสริมเนื้อหาและเครื่องมือตามกระแส ทั้งการใช้งาน Google veo3, Nano banana, Meta AI, Grok และ Sora2',
    pricing: [
      {
        title: 'รูปแบบการเรียน (Online Group)',
        description: 'เรียนออนไลน์ผ่านกลุ่มปิด facebook',
        price: '990 บาท',
        originalPrice: '1,590 บาท'
      },
      {
        title: 'เรียนออนไลน์แบบสอนสด 1:1',
        description: '',
        price: '3,000 บาท/ท่าน'
      },
      {
        title: 'เรียนออนไลน์แบบสอนสดรวมกลุ่ม',
        description: '4-8 คน (ผู้เรียนรวมกลุ่มมาเอง)',
        price: '1,500 บาท/ท่าน'
      },
      {
        title: 'เรียน onsite สอนถึงที่',
        description: 'ผู้เรียนเลือกสถานที่และเวลาได้เอง (สอนเฉพาะในเขตกรุงเทพและกาญจนบุรี รับไม่เกิน 8 ท่าน)',
        price: '25,000 บาท (เหมา)'
      }
    ]
  },
  {
    id: 'master-of-horror',
    title: 'Master of Horror',
    description: 'คอร์สต่อยอดสำหรับสายสยองขวัญโดยเฉพาะ เจาะลึกเทคนิคการสร้างความกลัวผ่านภาพยนตร์',
    image: 'https://i.postimg.cc/pyb1RmW2/Screenshot_2025_10_13_at_2_26_42_PM.png',
    syllabus: [
      'องค์ประกอบการเล่าเรื่อง',
      'องค์ประกอบสำหรับเรื่องสยองขวัญ',
      'จังหวะการเล่า (Pacing)',
      'การสร้างตัวละคร',
      'การออกแบบฉาก',
      'การลำดับเรื่อง',
      'การใช้งาน photoshop พื้นฐานสำหรับการสร้างฉากสยองขวัญ',
      'การออกแบบเสียงและตัดต่อ'
    ],
    pricing: [
      {
        title: 'Online สอนสด 1:1 ผ่าน Google Meet',
        description: 'รูปแบบการเรียน: ออนไลน์สอนสดเท่านั้น',
        price: '3,000 บาท'
      }
    ]
  }
];

export const ENROLLMENT_STEPS = [
  'กด "สมัครเลย" หรือ "สมัครเรียนคอร์สนี้"',
  'กรอกข้อมูลของท่านพร้อมส่งสลิปการโอนใน Google Form',
  'ยืนยันการส่งสลิปด้วยการส่งข้อความแจ้งที่ Facebook เพจ Cinematic AI',
  'เมื่อได้รับแจ้งเตือนทีมงานจะรีบติดต่อกลับหาท่านโดยเร็วที่สุด'
];