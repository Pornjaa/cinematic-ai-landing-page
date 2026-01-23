
import React, { useState, useEffect, useCallback } from 'react';
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
import FAQSection from './components/FAQSection';
import AiDirectorTool from './components/AiDirectorTool';
import CharacterPrompter from './components/CharacterPrompter';
import VideoMotionBuddy from './components/VideoMotionBuddy';
import { FACEBOOK_PAGE_URL, YOUTUBE_URL, TIKTOK_URL } from './constants';

const App: React.FC = () => {
  const getPageFromPath = () => {
    try {
      const path = window.location.pathname.replace(/\/$/, '');
      if (path === '/courses') return 'courses';
      if (path === '/articles') return 'articles';
      if (path === '/showreel-page') return 'showreel-page';
      if (path === '/free-tutorials') return 'free-tutorials';
      if (path === '/enroll') return 'enroll';
      if (path === '/ai-director') return 'ai-director';
      if (path === '/character-prompter') return 'character-prompter';
      if (path === '/video-motion') return 'video-motion';
      return 'home';
    } catch (e) {
      return 'home';
    }
  };

  const [currentPage, setCurrentPage] = useState(getPageFromPath);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((pageId: string) => {
    let targetPage = pageId;
    let targetPath = '/';

    switch (pageId) {
      case 'home': targetPath = '/'; break;
      case 'courses': targetPath = '/courses'; break;
      case 'articles': targetPath = '/articles'; break;
      case 'showreel-page': targetPath = '/showreel-page'; break;
      case 'free-tutorials': targetPath = '/free-tutorials'; break;
      case 'enroll': targetPath = '/enroll'; break;
      case 'ai-director': targetPath = '/ai-director'; break;
      case 'character-prompter': targetPath = '/character-prompter'; break;
      case 'video-motion': targetPath = '/video-motion'; break;
      default: targetPath = '/';
    }
    
    window.scrollTo(0, 0);
    setCurrentPage(targetPage);

    try {
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
    } catch (e) {}
  }, []);

  const handleReadArticle = useCallback((articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentPage('article-detail');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-cinematic-900 text-white selection:bg-cinematic-accent selection:text-white flex flex-col">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Portfolio />
            <FAQSection />
            <OnsiteAtmosphere />
          </>
        )}

        {currentPage === 'ai-director' && (
          <AiDirectorTool />
        )}

        {currentPage === 'character-prompter' && (
          <CharacterPrompter />
        )}

        {currentPage === 'video-motion' && (
          <VideoMotionBuddy />
        )}

        {currentPage === 'showreel-page' && <ShowreelPage />}
        {currentPage === 'courses' && <CoursesPage onNavigate={handleNavigate} />}
        {currentPage === 'articles' && <ArticlesPage onReadArticle={handleReadArticle} />}

        {currentPage === 'article-detail' && selectedArticleId && (
          <ArticleDetailPage articleId={selectedArticleId} onBack={() => handleNavigate('articles')} />
        )}

        {currentPage === 'free-tutorials' && <FreeTutorialsPage />}
        {currentPage === 'enroll' && <EnrollmentPage />}
      </main>
      
      <footer className="bg-black py-12 border-t border-gray-900 mt-auto">
        <div className="container mx-auto px-6 text-center">
          {/* Changed <h3> to <div> to maintain heading hierarchy integrity for SEO */}
          <div className="text-2xl font-display font-bold mb-4">CINEMATIC AI</div>
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Cinematic AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
