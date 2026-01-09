
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

export const ENROLLMENT_STEPS = [
  'กด "สมัครเรียน" เพื่อเข้าสู่แบบฟอร์ม',
  'กรอกข้อมูลและแนบสลิป',
  'กดยืนยันการสมัคร',
  'รอทีมงานติดต่อกลับผ่านอีเมลหรือ Facebook'
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'nano-banana-pro',
    title: 'กล้วยที่ไม่เคยกล้วย (Nano Banana Pro)',
    excerpt: 'หลังปล่อย nano banana ได้ไม่นาน google ก็ปล่อยอัพเกรดตามมาติดๆ ที่รอบนี้ดีขึ้น เทพขึ้นในทุกๆ ด้าน สั่งงานสร้างภาพนิ่งได้ตามใจเรา...',
    date: '5 ธันวาคม 2024',
    image: 'https://i.postimg.cc/t4n4MRHc/Gemini_Generated_Image_2u7v5k2u7v5k2u7v.png',
    content: [
      'หลังปล่อย nano banana ได้ไม่นาน google ก็ปล่อยอัพเกรดตามมาติดๆ ที่รอบนี้ดีขึ้น เทพขึ้นในทุกๆ ด้าน สั่งงานสร้างภาพนิ่งได้ตามใจเราด้วย prompt ภาษาไทยง่ายๆ',
      'จะเอาหน้าเราไปแทนดาราใยซีนภาพยนตร์ สร้างภาพกราฟฟิก ออกแบบผลิตภัณฑ์ ควบคุมตัวอักษรภาษาไทยในจุดต่างๆ ในภาพได้ดั่งใจ เปลี่ยนองค์ประกอบต่างๆ ไม่ว่าความต้องการของคุณคืออะไร กล้วยโปร เอาอยู่'
    ]
  },
  {
    id: 'free-ai-tools',
    title: 'แจก!! เครื่องมือสร้างภาพยนตร์ AI ที่สายฟรีไม่ควรพลาด',
    excerpt: 'ในสงคราม AI ที่แข่งกันดุเดือด ซัดกันแทบทุกนาที มีผู้ครอบครอง AI 2 เจ้าที่ปล่อยเครื่องมือคุณภาพให้เราได้ใช้กันฟรีๆ',
    date: '12 ธันวาคม 2024',
    image: 'https://i.postimg.cc/GmP7y3rx/Gemini_Generated_Image_4tkir84tkir84tki.png',
    content: [
      'ในสงคราม AI ที่แข่งกันดุเดือด ซัดกันแทบทุกนาที มีผู้ครอบครอง AI 2 เจ้าที่ปล่อยเครื่องมือคุณภาพให้เราได้ใช้กันฟรีๆ',
      'ตัวแรกกับ Meta AI ของเจ้าพ่อ facebook อย่าง มาร์ค ซัคเคอร์เบิร์ก ที่ดีไม่ดีแทบไม่ต้องคิดเพราะจับมือซื้อโมเดลเจนมาจากเจ้าตลาด AI ภาพนิ่งอย่าง Midjourney เลยทีเดียว นอกจากภาพที่ได้จะออกมาเนียนสมจริงไม่ต่างที่ Midjourney ทำได้แล้ว คำสั่งหรือ prompt ยังสั่งเป็นภาษาไทยง่ายๆ ได้เลยอีกต่างหาก พร้อมด้วยโหมดการสร้างวิดีโอที่ก็ฟรีเช่นกัน และคุณภาพอยู่ในเกณฑ์ที่ดีด้วย และหากยังไม่สาแก่ใจ วิดีโอที่เจนได้จาก Meta AI สามารถเจนต่อเนื่องได้ยาวสูงสุดถึง 15 วินาทีเลยทีเดียว',
      'ส่วนอีกเจ้าก็เจ้าพ่อไม่แพ้กัน อีลอน มัสก์ แห่งเทสลา กับ AI ของตัวเองอย่าง Grok ที่การสั่งงานเหมือน Meta AI ทุกอย่าง สั่งด้วยภาษาไทยง่ายๆ ได้ ทำภาพนิ่งแบบคำสั่งเดียวไม่จำกัดภาพ เลื่อนดูจนต้องร้องขอชีวิต และภาพเคลื่อนไหวที่คุณภาพอยู่ในเกณฑ์ที่ดีเช่นกันแถมมาพร้อมการเคลมว่า AI video ของข้า ติดเรตได้มากกว่าทุกเจ้าในตลาด ที่เท่าที่เราทดสอบมาก็ดูเหมือนว่าจะเป็นแบบนั้นจริงๆ',
      'ก็ลองไปใช้กันดูสำหรับสายฟรีและผู้ที่เพิ่งก้าวเข้ามาในโลก of AI video'
    ]
  },
  {
    id: 'kling-ai-o1',
    title: 'Kling AI O1 อัพเกรดเปลี่ยนโลก',
    excerpt: 'เปิดให้ทดลองใช้กันแล้วสำหรับ Kling o1 โมเดลล่าสุดที่ไม่ใช่แค่โมเดลใหม่ แต่คือการคิดใหม่ทำใหม่ จนได้หน้าตาการทำงานใหม่ที่สะดวก ง่าย และโคตรจะมีประสิทธิภาพ',
    date: '24 มกราคม 2025',
    image: 'https://i.postimg.cc/zBfRHqfv/kling.png',
    content: [
      'เปิดให้ทดลองใช้กันแล้วสำหรับ Kling o1 โมเดลล่าสุดที่ไม่ใช่แค่โมเดลใหม่ แต่คือการคิดใหม่ทำใหม่ จนได้หน้าตาการทำงานใหม่ที่สะดวก ง่าย และโคตรจะมีประสิทธิภาพ',
      'โดยภาพรวม o1 เหมือน kling ที่กลืน nano banana เข้าไปแล้วได้ workflow ใหม่ที่มี nano banana เป็นฐาน ดังนั้นหมดห่วงเรื่องความต่อเนื่อง ความคงที่ของหน้าตาตัวละคร ฉาก และองค์ประกอบต่างๆ',
      'o1 เข้าไปอยู่ทั้งในโหมดการสร้างภาพนิ่งและวิดีโอ',
      '- ในโหมดภาพนิ่งสามารถเจนภาพที่ความละเอียดสูงสุดได้ที่ 2k',
      '- เจนภาพนิ่งที่มีความคงเดิม คงที่ ของตัวละครได้ง่ายๆ แค่หย่อนภาพแล้วสั่งเปลี่ยนมุมมองหรือองค์ประกอบ ยิ่งไปกว่านั้นเพียงภาพเดียวก็สามารถสร้างคาแรกเตอร์หรืออวตารสำเร็จไว้กดแบบคลิกเดียวพร้อมใช้ได้ในโหมดวิดีโอ',
      '- สามารถใช้ทั้งภาพนิ่งและวิดีโอเป็นอุนพุตอ้างอิงในการปรับเปลี่ยนหรือเพิ่มเติมองค์ประกอบต่างๆ เข้าไปได้',
      '- หรือใส่ภาพนิ่งหลายภาพ วิดีโอรวมกับภาพนิ่ง แล้วสั่งรวมหรือเปลี่ยน แทนที่ บางอย่างได้อย่างง่ายดาย',
      'และอีกหลากหลายฟังก์ชันที่สามารถลองเข้าไปเล่นกันได้แล้ววันนี้'
    ]
  },
  {
    id: 'sora2-veo3',
    title: 'sora2 เจนวิดีโอครบเครื่อง ผู้ท้าชน veo3',
    excerpt: 'openAI กลับมาเขย่าวงการ AI video อีกครั้งด้วยโมเดลล่าสุดอย่าง sora2 ที่เจนได้ทั้งตัววิดีโอ เสียงพูด ดนตรีประกอบ เอฟเฟกต์...',
    date: '30 พฤศจิกายน 2024',
    image: 'https://i.ytimg.com/vi/iWPw0tRXHlI/maxresdefault.jpg',
    youtubeId: 'iWPw0tRXHlI',
    content: [
      'openAI กลับมาเขย่าวงการ AI video อีกครั้งด้วยโมเดลล่าสุดอย่าง sora2 ที่เจนได้ทั้งตัววิดีโอ เสียงพูด ดนตรีประกอบ เอฟเฟกต์ เรียกได้ว่าสั่งทีเดียวมาครบ จบ พร้อมโพสต์',
      'และไม่เพียงเท่านั้น sora2 ยังมาพร้อมโหมด cameo ที่เราสามารถใส่ตัวเองเป็นตัวละครได้ง่ายๆ อย่างสมจริง โหมด storyboard ที่ให้เราสวมบทบาทผู้กำกับ เขียนสั่งงานทีละซีนแยกกันได้แล้วรวมมาในคลิปเดียว',
      'เรื่องความสมจริงนั้นเรียกได้ว่าว้าวเลยทีเดียว แถมยังสั่งด้วยภาษาง่ายๆ คือภาษาพูดอธิบายปกติ ภาษาไทยได้เลย และความยาวต่อคลิปที่มากถึง 15 วินาที (และกำลังจะยืดให้ยาวได้ถึง 25 วินาทีต่อไป)',
      'สำหรับสายโซเชียล นี่คือเครื่องมือสุดเทพที่ง่าย เร็ว ทันทุกกระแส และง่ายแค่ปลายนิ้วจิ้มจริงๆ'
    ]
  }
];
