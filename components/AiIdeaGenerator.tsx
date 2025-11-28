import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from '../types';

const AiIdeaGenerator: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    if (!keyword.trim() || !process.env.API_KEY) {
        if (!process.env.API_KEY) {
            setGeneratedIdea("API Key is missing. Please configure it to use this feature.");
        }
        return;
    }

    setLoading(true);
    setGeneratedIdea('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Act as a professional film director and screenwriter.
        Generate a short, intriguing film plot synopsis based on the keyword: "${keyword}".
        The output must be in Thai language.
        Keep it under 100 words.
        Format:
        Title: [Creative Title]
        Genre: [Genre]
        Synopsis: [Plot]
      `;

      const response = await ai.models.generateContent({
        model: GeminiModel.FLASH,
        contents: prompt,
      });

      setGeneratedIdea(response.text || "ขออภัย ไม่สามารถสร้างไอเดียได้ในขณะนี้");
    } catch (error) {
      console.error("Error generating idea:", error);
      setGeneratedIdea("เกิดข้อผิดพลาดในการเชื่อมต่อกับ AI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cinematic-900 to-black relative border-t border-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cinematic-accent rounded-full filter blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              ทดลองสร้างพล็อตหนังด้วย AI
            </h2>
            <p className="text-gray-400 mb-8 font-light text-lg">
              ยังไม่มีไอเดีย? ลองพิมพ์คำที่คุณสนใจ เช่น "อวกาศ", "ความรัก", "สืบสวน" แล้วให้ Gemini AI ช่วยร่างโครงเรื่องให้คุณทันที นี่คือส่วนหนึ่งของสิ่งที่คุณจะได้เรียนรู้ในคอร์สของเรา
            </p>
            
            <div className="flex gap-4 mb-6">
              <input 
                type="text" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="พิมพ์คีย์เวิร์ด (เช่น: ไซเบอร์พังค์, แมวครองโลก)"
                className="flex-1 bg-cinematic-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cinematic-accent focus:ring-1 focus:ring-cinematic-accent transition-all"
                onKeyDown={(e) => e.key === 'Enter' && generateIdea()}
              />
              <button 
                onClick={generateIdea}
                disabled={loading}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${loading ? 'bg-gray-700 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'}`}
              >
                {loading ? 'กำลังคิด...' : 'สร้างพล็อต'}
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-cinematic-800/50 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl min-h-[200px] flex items-center justify-center relative overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-0 left-0 w-2 h-2 bg-gray-500 rounded-full m-2"></div>
               <div className="absolute top-0 right-0 w-2 h-2 bg-gray-500 rounded-full m-2"></div>
               <div className="absolute bottom-0 left-0 w-2 h-2 bg-gray-500 rounded-full m-2"></div>
               <div className="absolute bottom-0 right-0 w-2 h-2 bg-gray-500 rounded-full m-2"></div>

              {generatedIdea ? (
                <div className="text-left w-full whitespace-pre-line font-light leading-relaxed">
                  {generatedIdea}
                </div>
              ) : (
                <div className="text-gray-500 italic">
                  ผลลัพธ์จาก AI จะแสดงที่นี่...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiIdeaGenerator;