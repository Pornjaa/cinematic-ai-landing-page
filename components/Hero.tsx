import React, { useState, useEffect, useRef } from 'react';
import { FACEBOOK_PAGE_URL, DEFAULT_BG_IMAGE } from '../constants';

const Hero: React.FC = () => {
  const [bgImages, setBgImages] = useState<string[]>([DEFAULT_BG_IMAGE]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cycle through background images if multiple exist
  useEffect(() => {
    if (bgImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        newImages.push(URL.createObjectURL(file));
      });
      // Replace default image with new uploads
      setBgImages(newImages);
      setCurrentBgIndex(0);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter drop-shadow-2xl">
          CINEMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">AI</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl leading-relaxed">
          ปลดล็อกศักยภาพการสร้างภาพยนตร์ระดับฮอลลีวูดด้วยพลังแห่ง AI 
          เรียนรู้วิธีการเขียนบท สร้างสตอรี่บอร์ด และตัดต่อวิดีโอคุณภาพสูงในคอร์สเดียว
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

        {/* Image Upload Control */}
        <div className="absolute bottom-10 right-10">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            multiple 
            accept="image/*" 
            className="hidden" 
          />
          <button 
            onClick={triggerFileUpload}
            className="flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition-colors bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-700"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>เปลี่ยนภาพพื้นหลัง</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;