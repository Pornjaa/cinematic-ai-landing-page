import React from 'react';
import { ONSITE_VIDEOS } from '../constants';

const OnsiteAtmosphere: React.FC = () => {
  // Helper to get YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section className="py-20 bg-black text-white border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">บรรยากาศการสอน Onsite</h2>
          <div className="h-1 w-20 bg-cinematic-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">ภาพบรรยากาศการเรียนการสอนแบบจับมือทำจริง</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {ONSITE_VIDEOS.map((item) => {
            const videoId = getYouTubeId(item.youtubeUrl);
            return (
              <div key={item.id} className="w-full md:w-[48%] bg-cinematic-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full aspect-video">
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
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <span className="text-gray-500">Video not found</span>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-cinematic-800">
                   {/* Optional title or description could go here */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnsiteAtmosphere;