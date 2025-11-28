import React from 'react';
import { ARTICLES_DATA } from '../constants';

interface ArticleDetailPageProps {
  articleId: string;
  onBack: () => void;
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleId, onBack }) => {
  const article = ARTICLES_DATA.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center text-white">
        <h2 className="text-2xl font-bold">ไม่พบบทความ</h2>
        <button onClick={onBack} className="mt-4 text-cinematic-accent underline">กลับหน้ารวมบทความ</button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          กลับไปหน้ารวมบทความ
        </button>

        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-10 border-b border-gray-800 pb-6">
          <span>{article.date}</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>By Cinematic AI Team</span>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl bg-black">
          {article.youtubeId ? (
            <div className="relative aspect-video">
              <iframe 
                src={`https://www.youtube.com/embed/${article.youtubeId}`}
                title={article.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-light">
          {article.content.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;