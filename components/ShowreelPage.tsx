import React from 'react';
import { FULL_SHOWREEL_ITEMS } from '../constants';
import LiteYouTubeEmbed from './LiteYouTubeEmbed';

const ShowreelPage: React.FC = () => {
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
          ผลงานของเรา (Showreel)
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          รวมผลงานการสร้างสรรค์ภาพยนตร์และวิดีโอด้วย AI ทั้งหมดจาก Cinematic AI
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FULL_SHOWREEL_ITEMS.map((item) => {
            const videoId = getYouTubeId(item.youtubeUrl);
            return (
              <div key={item.id} className="group bg-cinematic-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative w-full aspect-video">
                  {videoId ? (
                    <LiteYouTubeEmbed id={videoId} title={item.title} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <span className="text-gray-500">Video not found</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cinematic-accent transition-colors line-clamp-2">{item.title}</h3>
                  {item.description && <p className="text-gray-400 text-sm font-light line-clamp-3">{item.description}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowreelPage;