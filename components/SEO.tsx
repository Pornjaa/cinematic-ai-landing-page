
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object; // For JSON-LD Structured Data
  schemaId?: string; // Unique ID for the schema script tag to prevent overwriting
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = "https://i.postimg.cc/TYspy9Fb/1004.png", 
  type = 'website',
  schema,
  schemaId
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
    // We utilize a cleanup function to remove the script when the component unmounts
    // or when the page changes, preventing stale data.
    if (schema) {
      const scriptId = schemaId || 'seo-schema-main';
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);

      // Cleanup: Remove this specific schema when the component unmounts
      return () => {
        const s = document.getElementById(scriptId);
        if (s) s.remove();
      };
    }

  }, [title, description, image, type, schema, schemaId]);

  return null;
};

export default SEO;
