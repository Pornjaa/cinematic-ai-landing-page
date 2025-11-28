import React from 'react';
import { FREE_TUTORIALS_DATA } from '../constants';

const FreeTutorialsPage: React.FC = () => {
  // Helper to get YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
          Free Tutorial (คอร์สเรียนฟรี)
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          เรียนรู้เทคนิคการสร้างภาพยนตร์ด้วย AI เบื้องต้นได้ฟรี! ติดตามวิดีโอสอนใหม่ๆ ได้ที่นี่
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FREE_TUTORIALS_DATA.map((item) => {
            const videoId = getYouTubeId(item.youtubeUrl);
            return (
              <div key={item.id} className="bg-cinematic-800 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-cinematic-accent/50 transition-all duration-300">
                <div className="relative w-full aspect-video bg-black">
                  {videoId ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-500">
                      Video not found
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-100 mb-2">{item.title}</h3>
                  <a 
                    href={item.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-sm text-cinematic-accent hover:underline flex items-center gap-1"
                  >
                    ดูบน YouTube
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreeTutorialsPage;