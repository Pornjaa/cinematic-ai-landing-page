
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import OnsiteAtmosphere from './components/OnsiteAtmosphere';
import CoursesPage from './components/CoursesPage';
import ArticlesPage from './components/ArticlesPage';
import ArticleDetailPage from './components/ArticleDetailPage';
import FreeTutorialsPage from './components/FreeTutorialsPage';
import EnrollmentPage from './components/EnrollmentPage';
import ShowreelPage from './components/ShowreelPage';
import { FACEBOOK_PAGE_URL, YOUTUBE_URL, TIKTOK_URL } from './constants';

const App: React.FC = () => {
  // Simple state-based router
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleNavigate = (pageId: string) => {
    if (pageId === 'apply') {
      // Go to courses page and scroll to enroll section
       setCurrentPage('courses');
       setTimeout(() => {
          const element = document.getElementById('enroll-section');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
      // Normal page navigation
      setCurrentPage(pageId);
      window.scrollTo(0, 0);
    }
  };

  const handleReadArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentPage('article-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen font-sans bg-cinematic-900 text-white selection:bg-cinematic-accent selection:text-white flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      {/* Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Portfolio />
            <OnsiteAtmosphere />
          </>
        )}

        {currentPage === 'showreel-page' && (
          <ShowreelPage />
        )}

        {currentPage === 'courses' && (
          <CoursesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'articles' && (
          <ArticlesPage onReadArticle={handleReadArticle} />
        )}

        {currentPage === 'article-detail' && selectedArticleId && (
          <ArticleDetailPage 
            articleId={selectedArticleId} 
            onBack={() => handleNavigate('articles')} 
          />
        )}

        {currentPage === 'free-tutorials' && (
          <FreeTutorialsPage />
        )}

        {currentPage === 'enroll' && (
          <EnrollmentPage />
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-900 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">CINEMATIC AI</h3>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto font-light">
            สถาบันสอนสร้างภาพยนตร์ด้วยปัญญาประดิษฐ์ครบวงจร เปลี่ยนจินตนาการของคุณให้เป็นภาพเคลื่อนไหวที่น่าตื่นตาตื่นใจ
          </p>

          {/* Contact / Social Links */}
          <div className="mb-10">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">ติดต่อเรา</h4>
            <div className="flex justify-center flex-wrap gap-8">
              <a 
                href={FACEBOOK_PAGE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#1877F2] transition-colors flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <span className="font-light">Facebook</span>
              </a>
              <a 
                href={YOUTUBE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#FF0000] transition-colors flex items-center gap-2 group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span className="font-light">YouTube</span>
              </a>
              <a 
                href={TIKTOK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#00f2ea] transition-colors flex items-center gap-2 group"
              >
                 <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 1.62-.03 3.25-.32 4.85-.25 1.37-.8 2.69-1.62 3.82-1.35 1.83-3.62 3.01-5.91 3.02-3.03.01-5.81-1.46-7.37-3.95-1.57-2.5-1.57-5.69 0-8.18 1.56-2.49 4.34-3.96 7.37-3.95.45 0 .9.02 1.35.06V7.52c-.45-.05-.9-.07-1.35-.06-1.59-.01-3.09.78-3.93 2.08-.83 1.29-.83 2.94 0 4.23.83 1.29 2.33 2.08 3.93 2.08 1.27 0 2.45-.48 3.32-1.35.88-.87 1.36-2.06 1.36-3.29V.02h-4.84z"/></svg>
                <span className="font-light">TikTok</span>
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Cinematic AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
