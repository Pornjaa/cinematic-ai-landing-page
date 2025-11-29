
import React from 'react';
import { ARTICLES_DATA } from '../constants';

interface ArticlesPageProps {
  onReadArticle: (articleId: string) => void;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ onReadArticle }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">

      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
          บทความและข่าวสารจาก Cinematic AI
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          แหล่งรวมความรู้ แรงบันดาลใจ และเทคนิคใหม่ๆ เกี่ยวกับการใช้ AI ในโลกภาพยนตร์ ที่จะช่วยยกระดับผลงานของคุณไปอีกขั้น
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((article) => (
            <div 
              key={article.id} 
              onClick={() => onReadArticle(article.id)}
              className="group bg-cinematic-800 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-cinematic-accent/50 cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                
                {/* Play Button Overlay for Video Articles */}
                {article.youtubeId && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-cinematic-accent/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-cinematic-accent text-sm font-medium mb-2">{article.date}</div>
                <h2 className="text-xl font-display font-bold mb-3 group-hover:text-white text-gray-100 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-400 font-light text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <span className="text-cinematic-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  {article.youtubeId ? 'รับชมวิดีโอ' : 'อ่านเพิ่มเติม'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
