
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object; // For JSON-LD Structured Data
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "https://i.postimg.cc/TYspy9Fb/1004.png", 
  type = 'website',
  schema 
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Cinematic AI`;

    // 2. Update Meta Tags Helper
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Canonical URL (Crucial for preventing duplicate content issues)
    const setCanonical = () => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      // Uses the current window location as the canonical source of truth for SPA navigation
      element.setAttribute('href', window.location.href);
    };

    // Execute Updates
    setMeta('description', description);

    // Open Graph / Facebook
    setOgMeta('og:title', title);
    setOgMeta('og:description', description);
    setOgMeta('og:image', image);
    setOgMeta('og:type', type);
    setOgMeta('og:url', window.location.href);

    // Twitter
    setOgMeta('twitter:card', 'summary_large_image'); // Ensure twitter card is set
    setOgMeta('twitter:title', title);
    setOgMeta('twitter:description', description);
    setOgMeta('twitter:image', image);

    setCanonical();

    // 4. Inject JSON-LD Schema (The most important part for AEO)
    if (schema) {
      let script = document.querySelector('#seo-schema');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'seo-schema');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
       // Cleanup schema if not present
       const script = document.querySelector('#seo-schema');
       if (script) script.remove();
    }

  }, [title, description, image, type, schema]);

  return null;
};

export default SEO;
