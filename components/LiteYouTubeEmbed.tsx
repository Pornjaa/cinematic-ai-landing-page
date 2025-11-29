import React, { useState } from 'react';

interface LiteYouTubeEmbedProps {
  id: string;
  title: string;
  wrapperClass?: string;
}

const LiteYouTubeEmbed: React.FC<LiteYouTubeEmbedProps> = ({ id, title, wrapperClass = "aspect-video" }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const loadIframe = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div 
      className={`relative w-full bg-black cursor-pointer overflow-hidden group ${wrapperClass}`}
      onClick={loadIframe}
    >
      {isIframeLoaded ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Poster Image (High Quality) */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          
          {/* Gradient Overlay for aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </>
      )}
    </div>
  );
};

export default LiteYouTubeEmbed;