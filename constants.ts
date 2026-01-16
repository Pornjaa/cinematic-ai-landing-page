
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
  { label: 'Character Prompter', id: 'character-prompter' },
  { label: 'AI Prompt Buddy', id: 'ai-director' },
  { label: 'คอร์สเรียน', id: 'courses' },
  { label: 'บทความ', id: 'articles' },
  { label: 'ผลงาน', id: 'showreel-page' },
  { label: 'Free Tutorial', id: 'free-tutorials', isButton: true },
];

export const FAQ_ITEMS = [
  {
    question: "Cinematic AI สอนเกี่ยวกับอะไร?",
    answer: "Cinematic AI เป็นสถาบันสอนสร้างภาพยนตร์ด้วยปัญญาประดิษฐ์ (AI) ครบวงจร สอนตั้งแต่การใช้เครื่องมือ Generative AI ต่างๆ เช่น Kling, Nano Banana, Veo เพื่อสร้างภาพนิ่งและภาพเคลื่อนไหว ไปจนถึงเทคนิคการเล่าเรื่องและการตัดต่อระดับมืออาชีพ"
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
    id: 'tut-2',
    youtubeUrl: 'https://youtu.be/mkCM0asJ2aU',
    title: 'คอร์สสอน AI ฟรี จิ๋วจี๊ดพอดแคส'
  },
  {
    id: 'tut-3',
    youtubeUrl: 'https://youtu.be/M5WHtuBHsrk',
    title: 'สอน AI เปลี่ยน เพิ่ม ลบ อย่างมีเวทย์มนต์'
  },
  {
    id: 'tut-4',
    youtubeUrl: 'https://youtu.be/0iYaud7oldg',
    title: 'Intro to Cinematic AI คำแนะนำสำหรับผู้เริ่มต้น'
  },
  {
    id: 'tut-5',
    youtubeUrl: 'https://youtu.be/S6neXP4m2TE',
    title: 'สอนฟรี!! ปักตะกร้าง่ายๆ ด้วย Sora2'
  },
  {
    id: 'tut-6',
    youtubeUrl: 'https://youtu.be/a8Ii13RgF2I',
    title: 'สอนฟรี! เซลฟี่คนดัง'
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
    id: '2',
    title: 'Test Subject Escape',
    description: 'หญิงสาวถูกล่าโดยสัตว์ประหลาดในห้องทดลองสุดสยอง',
    youtubeUrl: 'https://youtu.be/61wcZj5GolA?si=fOuJJxY855AXZJQS'
  },
  {
    id: '7',
    title: 'Come to me my uncle',
    description: 'เมื่อตำรวจสองนายต้องตรวจสอบห้องสุดสยองในคอนโดหรู',
    youtubeUrl: 'https://youtu.be/wyGFAVSX6rU'
  },
  {
    id: '8',
    title: 'MV Not me',
    description: 'เพลงภาษาญี่ปุ่นสร้างด้วย sUno AI เนื้อหาว่าด้วยความรักบนรถไฟ',
    youtubeUrl: 'https://youtu.be/uMw5Rm8NvAQ'
  },
  {
    id: '9',
    title: 'The Ugly Truth',
    description: 'การเค้นความลับจากยอดอาชญากรระดับโลก',
    youtubeUrl: 'https://youtu.be/98UvwibPdXg'
  },
  {
    id: '10',
    title: 'The Clockmaker',
    description: 'แอนิเมชันว่าด้วยคุณตาจอมเฉยชากับหลานสาวจอมป่วน',
    youtubeUrl: 'https://youtu.be/upQfwYRcO8s'
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
        price: '990 บาท',
        originalPrice: '1,590 บาท',
        description: 'เรียนออนไลน์ผ่านกลุ่มปิด facebook'
      },
      {
        title: 'เรียนออนไลน์แบบสอนสด 1:1',
        price: '3,000 บาท/ท่าน',
        description: 'เรียนสดตัวต่อตัว พร้อมแก้ปัญหาเฉพาะหน้า'
      }
    ]
  },
  {
    id: 'kling-o1-master-class',
    title: 'Kling o1 Master Class',
    description: 'อัพเกรดครั้งใหญ่ของนักสร้างสรรค์ กับ kling o1 และคอร์สที่จะทำให้การสร้างสรรค์ของคุณไร้ขีดจำกัดด้วย o1 multi model สุดล้ำ',
    image: 'https://i.postimg.cc/zvMJyfZV/Gemini_Generated_Image_txtob8txtob8txto.jpg',
    syllabus: [
      'o1 image generation: การสร้างภาพนิ่งด้วยภาพอ้างอิง',
      'การใช้งาน prompt สำหรับโมเดล o1',
      'การสร้างภาพนิ่งด้วย element',
      'การปรับจูนตั้งค่าเครื่องมือต่างๆ ทั้งความละเอียดภาพ สัดส่วนภาพ จำนวนภาพ',
      'o1 video generation: การใช้งานโหมด element',
      'การรวมภาพนิ่งหลายภาพเข้าเป็นคลิปเดียวแบบคงที่รายละเอียดครบ',
      'การเรียกใช้ element เพื่อสร้างคลิป',
      'element สำเร็จรูปแบบต่างๆ และวิธีใช้งานสำหรับงานวิดีโอ',
      'custom element การสร้าง element ไว้ใช้งานเอง',
      'การใช้งานโหมด transformation เปลี่ยนบุคคล สิ่งของ สถานที่ หรือแม้แต่อากาศ ได้ดั่งใจ',
      'การใช้ภาพนิ่งเพื่อเปลี่ยนรายละเอียดในคลิป',
      'การใช้ element เพื่อเปลี่ยนรายละเอียดในคลิป',
      'การใช้งานโmoved video reference เพื่อสร้างช็อตต่อเนื่องจากคลิปอ้างอิง',
      'การใช้งานโหมด frame เพื่อสร้างซีนต่อเนื่อง'
    ],
    pricing: [
      {
        title: 'Online สอนสด 1:1 ผ่าน Google Meet',
        price: '3,000 บาท',
        description: 'รูปแบบการเรียน: ออนไลน์สอนสดเท่านั้น'
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
        price: '3,000 บาท',
        description: 'รูปแบบการเรียน: ออนไลน์สอนสดเท่านั้น'
      }
    ]
  }
];

// Added missing ENROLLMENT_STEPS constant to fix CoursesPage import error
export const ENROLLMENT_STEPS = [
  "เลือกคอร์สที่ต้องการสมัครเรียน",
  "ชำระเงินผ่านบัญชีธนาคารที่ระบุ",
  "แจ้งโอนเงินผ่านฟอร์มในหน้านี้",
  "รอรับการยืนยันและเข้ากลุ่มเรียน"
];

// Added missing ARTICLES_DATA constant to fix ArticlesPage and ArticleDetailPage import errors
export const ARTICLES_DATA: Article[] = [
  {
    id: 'ai-filmmaking-2024',
    title: 'อนาคตของการสร้างภาพยนตร์ด้วย AI ในปี 2024',
    excerpt: 'เจาะลึกเทคโนโลยี Generative Video และการเปลี่ยนแปลงครั้งสำคัญในอุตสาหกรรมหนัง',
    content: [
      'ในปี 2024 เทคโนโลยี AI ได้ก้าวเข้าสู่ยุคที่สามารถสร้างวิดีโอที่มีคุณภาพสูงและมีความต่อเนื่องของภาพได้อย่างน่าอัศจรรย์...',
      'เครื่องมืออย่าง Kling AI, Sora และ Google Veo กำลังเปลี่ยนวิธีที่นักสร้างหนังทำงาน นักสร้างสรรค์สามารถผลิตงานคุณภาพระดับสตูดิโอได้ด้วยงบประมาณที่น้อยลงอย่างมาก'
    ],
    image: 'https://i.postimg.cc/9MkkHwHP/give.jpg',
    date: '15 ต.ค. 2024'
  },
  {
    id: 'kling-ai-tutorial',
    title: 'สอนใช้งาน Kling AI เบื้องต้น',
    excerpt: 'เริ่มต้นสร้างวิดีโอจากข้อความด้วย Kling AI โมเดลวิดีโอที่ทรงพลังที่สุดในขณะนี้',
    content: [
      'Kling AI คือหนึ่งในโมเดล Text-to-Video ที่ดีที่สุดในปัจจุบัน โดยรองรับการเจนวิดีโอที่ยาวและมีความลื่นไหลเป็นธรรมชาติ...',
      'ในบทความนี้เราจะพาไปดูเทคนิคการเขียน Prompt ให้ Kling เข้าใจสิ่งที่เราต้องการมากที่สุด รวมถึงการใช้ Start/End Frame เพื่อควบคุมทิศทางของวิดีโอ'
    ],
    image: 'https://i.postimg.cc/SNpxZqCs/generative.png',
    date: '10 ต.ค. 2024',
    youtubeId: 'c1qpdXcpODc'
  }
];
