import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to update meta tag
    const updateMeta = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // 3. Update Meta Tags
    if (description) {
      updateMeta('meta[name="description"]', description);
      updateMeta('meta[property="og:description"]', description);
      updateMeta('meta[property="twitter:description"]', description);
    }

    if (image) {
      updateMeta('meta[property="og:image"]', image);
      updateMeta('meta[property="twitter:image"]', image);
    }

    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="twitter:title"]', title);

  }, [title, description, image]);

  return null;
};

export default SEO;