
import { NavItem, PortfolioItem, Course, Article, FreeTutorialItem } from './types';

export const FACEBOOK_PAGE_URL = "https://www.facebook.com/profile.php?id=61563219540499";
export const YOUTUBE_URL = "https://www.youtube.com/@cinematicai112";
export const TIKTOK_URL = "https://www.tiktok.com/@cinematicaiofficial";

export const BANK_DETAILS = {
  bankName: "ธนาคารกสิกรไทย (KBANK)",
  accountName: "นาย พรอนันต์ เสริมสุข",
  accountNumber: "985-516-6388"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'หน้าแรก', id: 'home' },
  { label: 'คอร์สเรียนทั้งหมด', id: 'courses' },
  { label: 'บทความ', id: 'articles' },
  { label: 'ผลงานของเรา', id: 'showreel-page' }, // Link to separate page
  { label: 'Free Tutorial', id: 'free-tutorials', isButton: true },
];

export const FREE_TUTORIALS_DATA: FreeTutorialItem[] = [
  {
    id: 'tut-1',
    youtubeUrl: 'https://youtu.be/c1qpdXcpODc?si=kqush6y-btMZTkIG',
    title: 'เทคนิคการสร้างภาพยนตร์ด้วย AI (ตอนที่ 1)'
  },
  {
    id: 'tut-2',
    youtubeUrl: 'https://youtu.be/mkCM0asJ2aU?si=aJQA5fAe90Gtrzi1',
    title: 'เทคนิคการสร้างภาพยนตร์ด้วย AI (ตอนที่ 2)'
  },
  {
    id: 'tut-3',
    youtubeUrl: 'https://youtu.be/M5WHtuBHsrk?si=nZ0IO49rf2OHJ-Dr',
    title: 'เทคนิคการสร้างภาพยนตร์ด้วย AI (ตอนที่ 3)'
  },
  {
    id: 'tut-4',
    youtubeUrl: 'https://youtu.be/0iYaud7oldg?si=s7TDnk9s9KUiwfIE',
    title: 'เทคนิคการสร้างภาพยนตร์ด้วย AI (ตอนที่ 4)'
  }
];

// Items for Home Page (Showreel Section) - Only 2 items
export const HOME_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'ตัวอย่างผลงาน: Cinematic AI Showcase 1',
    description: 'ชมตัวอย่างภาพยนตร์ที่สร้างสรรค์ด้วย AI ทั้งภาพและเสียง',
    youtubeUrl: 'https://youtu.be/vbQP5C0Y_wk?si=9oFKLChlnU12ZtxO'
  },
  {
    id: '2',
    title: 'ตัวอย่างผลงาน: Cinematic AI Showcase 2',
    description: 'ผลงานการสร้างสรรค์ภาพยนตร์และวิดีโอด้วย AI คุณภาพสูง',
    youtubeUrl: 'https://youtu.be/61wcZj5GolA?si=fOuJJxY855AXZJQS'
  }
];

// Items for Full Showreel Page - Includes everything
export const FULL_SHOWREEL_ITEMS: PortfolioItem[] = [
  {
    id: '1',
    title: 'Cinematic AI Showcase 1',
    description: 'ชมตัวอย่างภาพยนตร์ที่สร้างสรรค์ด้วย AI ทั้งภาพและเสียง',
    youtubeUrl: 'https://youtu.be/vbQP5C0Y_wk?si=9oFKLChlnU12ZtxO'
  },
  {
    id: '2',
    title: 'Cinematic AI Showcase 2',
    description: 'ผลงานการสร้างสรรค์ภาพยนตร์และวิดีโอด้วย AI คุณภาพสูง',
    youtubeUrl: 'https://youtu.be/61wcZj5GolA?si=fOuJJxY855AXZJQS'
  },
  {
    id: '3',
    title: 'Cinematic AI Showcase 3',
    description: 'การเล่าเรื่องผ่านภาพเคลื่อนไหวที่สร้างจากปัญญาประดิษฐ์',
    youtubeUrl: 'https://youtu.be/CHLUElTVWyk'
  },
  {
    id: '4',
    title: 'Cinematic AI Showcase 4',
    description: 'เทคนิคการสร้าง Cinematic Video ด้วยเครื่องมือ AI ล่าสุด',
    youtubeUrl: 'https://youtu.be/upQfwYRcO8s'
  },
  {
    id: '5',
    title: 'Cinematic AI Showcase 5',
    description: 'ผลงานใหม่ล่าสุด',
    youtubeUrl: 'https://youtu.be/Sye_EecXi7I'
  },
  {
    id: '6',
    title: 'Cinematic AI Showcase 6',
    description: 'ผลงานใหม่ล่าสุด',
    youtubeUrl: 'https://youtu.be/yY37ByEm8Go'
  }
];

export const ONSITE_VIDEOS = [
  {
    id: 'onsite-1',
    title: 'บรรยากาศการสอน Onsite (Part 1)',
    youtubeUrl: 'https://youtu.be/6xbAv67ZE-c'
  },
  {
    id: 'onsite-2',
    title: 'บรรยากาศการสอน Onsite (Part 2)',
    youtubeUrl: 'https://youtu.be/YpLKjbdzft8'
  }
];

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
  'กด "สมัครเรียน" เพื่อเข้าสู่แบบฟอร์มสมัครเรียน',
  'กรอกข้อมูล เลือกคอร์ส และแนบสลิปการโอนเงิน',
  'กดยืนยันการสมัคร ระบบจะทำการบันทึกข้อมูลของท่าน',
  'รอรับการติดต่อกลับจากทีมงานเพื่อยืนยันและดึงเข้ากลุ่มเรียน'
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'nano-banana-pro',
    title: 'กล้วยที่ไม่เคยกล้วย (Nano Banana Pro)',
    excerpt: 'ปล่อย nano banana ได้ไม่นาน google ก็ปล่อยอัพเกรดตามมาติดๆ ที่รอบนี้ดีขึ้น เทพขึ้นในทุกๆ ด้าน สั่งงานสร้างภาพนิ่งได้ตามใจเรา',
    date: '5 ธันวาคม 2024',
    image: 'https://i.postimg.cc/t4n4MRHc/Gemini-Generated-Image-2u7v5k2u7v5k2u7v.png',
    content: [
      'ปล่อย nano banana ได้ไม่นาน google ก็ปล่อยอัพเกรดตามมาติดๆ ที่รอบนี้ดีขึ้น เทพขึ้นในทุกๆ ด้าน สั่งงานสร้างภาพนิ่งได้ตามใจเราด้วย prompt ภาษาไทยง่ายๆ จะเอาหน้าเราไปแทนดาราใยซีนภาพยนตร์ สร้างภาพกราฟฟิก ออกแบบผลิตภัณฑ์ ควบคุมตัวอักษรภาษาไทยในจุดต่างๆ ในภาพได้ดั่งใจ เปลี่ยนองค์ประกอบต่างๆ ไม่ว่าความต้องการของคุณคืออะไร กล้วยโปร เอาอยู่'
    ]
  },
  {
    id: 'nano-banana-revolution',
    title: 'เมื่อ AI เล่าเรื่องกลายเป็นเรื่องกล้วยๆ (Nano banana)',
    excerpt: 'Nano banana หมัดเด็ดล่าสุดของ Google ที่แก้ไข painpoint ของการสร้างงานทั้งภาพนิ่งและภาพเคลื่อนไหวด้วย AI ได้แบบหมดจด',
    date: '28 พฤศจิกายน 2024',
    image: 'https://i.postimg.cc/W4zxv9QN/2_stylize_80.jpg',
    content: [
      'Nano banana หมัดเด็ดล่าสุดของ Google ที่แก้ไข painpoint ของการสร้างงานทั้งภาพนิ่งและภาพเคลื่อนไหวด้วย AI ได้แบบหมดจด ปัญหาของการไม่สามารถสร้างวัตถุหรือตัวละครที่คงที่ การเล่าเรื่องที่การสร้างตัวละครตัวเดิมเป็นไปไม่ได้ซึ่งเป็นปัญหาหลักของนักเล่าเรื่องด้วย AI มาตั้งแต่ไหนแต่ไร',
      'แต่แล้วอยู่ๆ วันธรรมดาๆ วันหนึ่งในหน้าฝน ชื่อของ Nano banana ก็ดังเปรี้ยงขึ้นมาอย่างไม่รู้ที่มา ไม่มีใครรู้ว่าใครอยู่เบื้องหลังความฮือฮานี้ รู้กันเพียงแต่ว่าเจ้าโมเดลตัวใหม่ชื่อกล้วยนาโนนี้มันโคตรจะเจ๋ง มันทำตัวละครที่หน้าตาเหมือนเดิมทุกภาพได้ ไม่ใช่แค่นั้น มันยังเปลี่ยนมุม ทำภาพด้านข้าง ด้านหลัง ด้านบน มุมเสย เรียกว่าเหมือนหมดทุกมุมด้วย prompt ง่ายๆ และภาพตั้งต้นแค่ใบเดียว!!! จากในอดีตที่แค่จะสร้างภาพตัวละครให้หน้าคล้ายเดิมในมุมด้านหน้ามุมเดียวยังยุ่งยากขนาดต้องเตรียมภาพ 3-4 โหล เพื่อเทรนโมเดล ใช้ทั้งเวลาและเงิน แถมยังวุ่นวายหลายขั้นตอน',
      'ก่อนที่ทุกอย่างจะกระจ่างเมื่อ Google เผยตัวออกมาว่าเป็นเจ้าของโมเดลนี้และปล่อยให้ใช้กันฟรีๆ ใน Gemini จนทำให้เกิดภาพสร้างสรรค์เต็มล้นฟีดทั้งภาพโมเดลเหมือนตัวเอง รูปปั้นขนาดยักษ์ การถ่ายภาพกับคนดัง การสร้างภาพโปรโมทย์สินค้าที่ทั้งชื่อแบรนด์เป๊ะทุกตัวอักษร สามารถสร้างเอฟเฟกต์สวยๆ สะดุดตาประกอบผลิตภัณฑ์ได้ง่ายๆ แค่ prompt เรียกได้ว่ากลายเป็นโมเดลโคตรฮิตที่สร้างงานได้แทบจะไม่มีข้อจำกัด',
      'ในวันนี้ถ้าใครยังไม่ได้เล่น ได้ลอง คุณจะเอาท์ทันที'
    ]
  },
  {
    id: 'sora2-challenger',
    title: 'sora2 เจนวิดีโอครบเครื่อง ผู้ท้าชน veo3',
    excerpt: 'openAI กลับมาเขย่าวงการ AI video อีกครั้งด้วยโมเดลล่าสุดอย่าง sora2 ที่เจนได้ทั้งตัววิดีโอ เสียงพูด ดนตรีประกอบ เอฟเฟกต์',
    date: '30 พฤศจิกายน 2024',
    image: 'https://img.youtube.com/vi/iWPw0tRXHlI/maxresdefault.jpg',
    youtubeId: 'iWPw0tRXHlI',
    content: [
      'openAI กลับมาเขย่าวงการ AI video อีกครั้งด้วยโมเดลล่าสุดอย่าง sora2 ที่เจนได้ทั้งตัววิดีโอ เสียงพูด ดนตรีประกอบ เอฟเฟกต์ เรียกได้ว่าสั่งทีเดียวมาครบ จบ พร้อมโพสต์',
      'และไม่เพียงเท่านั้น sora2 ยังมาพร้อมโหมด cameo ที่เราสามารถใส่ตัวเองเป็นตัวละครได้ง่ายๆ อย่างสมจริง โหมด storyboard ที่ให้เราสวมบทบาทผู้กำกับ เขียนสั่งงานทีละซีนแยกกันได้แล้วรวมมาในคลิปเดียว',
      'เรื่องความสมจริงนั้นเรียกได้ว่าว้าวเลยทีเดียว แถมยังสั่งด้วยภาษาง่ายๆ คือภาษาพูดอธิบายปกติ ภาษาไทยได้เลย และความยาวต่อคลิปที่มากถึง 15 วินาที (และกำลังจะยืดให้ยาวได้ถึง 25 วินาทีต่อไป)',
      'สำหรับสายโซเชียล นี่คือเครื่องมือสุดเทพที่ง่าย เร็ว ทันทุกกระแส และง่ายแค่ปลายนิ้วจิ้มจริงๆ'
    ]
  },
  {
    id: 'horror-pacing',
    title: 'เทคนิคการสร้างความกลัว: จังหวะคือทุกสิ่ง',
    excerpt: 'ถอดรหัสภาพยนตร์สยองขวัญระดับตำนาน อะไรทำให้เราขนลุก?',
    date: '20 ตุลาคม 2023',
    image: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=1964&auto=format&fit=crop',
    content: [
      'ความน่ากลัวไม่ได้เกิดจากผีหรือสัตว์ประหลาดเพียงอย่างเดียว แต่เกิดจาก "ความไม่รู้" และ "การรอคอย"',
      'จังหวะการตัดต่อ (Editing Pacing) และการออกแบบเสียง (Sound Design) คือหัวใจสำคัญ การปล่อย Dead Air หรือความเงียบในจังหวะที่ถูกต้อง สามารถสร้างความกดดันได้มากกว่าเสียงกรีดร้อง',
      'เรียนรู้เทคนิค Jump Scare ที่มีชั้นเชิง และการสร้างบรรยากาศ Uncanny Valley ด้วย AI ในคอร์ส Master of Horror ของเรา'
    ]
  }
];
