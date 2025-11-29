
import React, { useState, useEffect, useRef } from 'react';
import { FACEBOOK_PAGE_URL, YOUTUBE_URL, TIKTOK_URL, HERO_BACKGROUNDS, SITE_URL, SITE_NAME, SITE_LOGO, ADMIN_EMAIL } from '../constants';
import SEO from './SEO';

const Hero: React.FC = () => {
  // State for slideshow index
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // State for local override (from admin mode)
  const [localBgImage, setLocalBgImage] = useState<string | null>(null);
  
  const [isEditMode, setIsEditMode] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      // 1. Check LocalStorage for any saved custom background
      const savedBg = localStorage.getItem('cinematic_hero_bg');
      if (savedBg) {
        setLocalBgImage(savedBg);
      }

      // 2. Check URL parameters for ?edit=true to enable admin mode
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('edit') === 'true') {
        setIsEditMode(true);
      }
    } catch (e) {
      console.error("Error accessing storage or params", e);
    }
  }, []);

  // Slideshow timer
  useEffect(() => {
    // Only run slideshow if no local override is active
    if (!localBgImage) {
      const interval = setInterval(() => {
        setCurrentBgIndex((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [localBgImage]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLocalBgImage(result);
        try {
          localStorage.setItem('cinematic_hero_bg', result);
        } catch (e) {
          console.error("Image too large", e);
          alert("ภาพมีขนาดใหญ่เกินไปสำหรับโหมดพรีวิว (แนะนำให้ใช้ URL แทน)");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInputRef.current?.value) {
      const url = urlInputRef.current.value;
      setLocalBgImage(url);
      try {
        localStorage.setItem('cinematic_hero_bg', url);
      } catch (e) {
        console.error("Storage error", e);
      }
      urlInputRef.current.value = ''; // Clear input
    }
  };

  const handleResetBg = () => {
    setLocalBgImage(null);
    try {
      localStorage.removeItem('cinematic_hero_bg');
    } catch (e) {
      console.error("Storage error", e);
    }
  };

  // Schema for Organization (AEO Critical)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": SITE_LOGO,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": ADMIN_EMAIL,
      "contactType": "customer support"
    },
    "sameAs": [
      FACEBOOK_PAGE_URL,
      YOUTUBE_URL,
      TIKTOK_URL
    ]
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <SEO 
        title="สถาบันสอนสร้างภาพยนตร์ด้วย AI"
        description="ปลดล็อกศักยภาพการสร้างภาพยนตร์ระดับฮอลลีวูดด้วยพลังแห่ง AI เรียนรู้ Kling, Nano Banana, Veo และเทคนิคการเล่าเรื่อง"
        schema={organizationSchema}
        schemaId="seo-organization"
      />

      {/* 
        Background Layer System:
        1. We map through HERO_BACKGROUNDS to create slideshow divs.
        2. We control opacity to cross-fade between them.
        3. If localBgImage exists, it sits on top.
      */}
      
      {/* Slideshow Layers */}
      {HERO_BACKGROUNDS.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            !localBgImage && currentBgIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}

      {/* Local Override Layer (shown only if set) */}
      {localBgImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${localBgImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 z-20 bg-black/60 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>

      {/* Secret Admin Controls (Only visible if ?edit=true) */}
      {isEditMode && (
        <div className="absolute top-24 right-6 z-50 bg-black/80 backdrop-blur border border-gray-700 p-4 rounded-lg shadow-2xl flex flex-col gap-3 w-72">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Admin Mode (Preview)</span>
          
          {/* File Upload */}
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded border border-gray-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
            อัปโหลดไฟล์ (Upload)
          </button>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden" 
            accept="image/*"
          />

          {/* URL Input */}
          <div className="flex gap-1">
            <input 
              type="text" 
              ref={urlInputRef}
              placeholder="วางลิงก์รูปภาพที่นี่..."
              className="flex-1 bg-gray-900 border border-gray-600 text-white text-xs px-2 py-1 rounded focus:outline-none focus:border-cinematic-accent"
            />
            <button 
              onClick={handleUrlSubmit}
              className="bg-cinematic-accent hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors"
            >
              ใช้
            </button>
          </div>

          <button 
            onClick={handleResetBg}
            className="mt-2 px-3 py-1 bg-red-900/50 hover:bg-red-900 text-red-200 text-xs rounded transition-colors"
          >
            รีเซ็ตเป็นสไลด์โชว์
          </button>
          
          <p className="text-[10px] text-gray-500 text-center leading-tight">
            *การเปลี่ยนภาพที่นี่เห็นเฉพาะคุณ (Local Storage)
          </p>
        </div>
      )}

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter drop-shadow-2xl">
          CINEMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-3xl leading-relaxed">
          ปลดล็อกศักยภาพการสร้างภาพยนตร์ระดับฮอลลีวูดด้วยพลังแห่ง AI เปลี่ยนจินตนาการให้กลายเป็นจริงผ่านสื่อภาพยนตร์ได้ง่ายๆ ด้วยปลายนิ้ว ที่ Cinematic AI ทุกไอเดียเป็นจริงได้
        </p>

        <a 
          href={FACEBOOK_PAGE_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md hover:bg-white hover:text-black"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cinematic-accent group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            ติดตามเราบน Facebook
          </span>
          <span className="relative invisible">ติดตามเราบน Facebook</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
