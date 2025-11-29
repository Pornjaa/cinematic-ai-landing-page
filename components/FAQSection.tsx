
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import SEO from './SEO';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Create FAQPage Schema for AEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-cinematic-900 border-t border-gray-800">
      {/* Inject FAQ Schema specifically for this section if it's on the home page */}
      <SEO 
         title="Cinematic AI - สถาบันสอนสร้างภาพยนตร์ด้วย AI" // Fallback title
         description="คำถามที่พบบ่อยเกี่ยวกับ Cinematic AI" 
         schema={faqSchema}
         schemaId="seo-faq"
      />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            คำถามที่พบบ่อย (FAQ)
          </h2>
          <div className="h-1 w-20 bg-cinematic-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">คำถามยอดฮิตเกี่ยวกับการเรียน AI Filmmaking</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="bg-cinematic-800 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-cinematic-accent/50"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white">{item.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-cinematic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 font-light border-t border-gray-700/50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
