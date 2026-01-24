
import { GoogleGenAI, Type } from '@google/genai';
import React, { useState } from 'react';
import { AiStoryAnalysis } from '../types';
import SEO from './SEO';

const AiDirectorTool: React.FC = () => {
  const [story, setStory] = useState('');
  const [analysis, setAnalysis] = useState<AiStoryAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'input' | 'result'>('input');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const analyzeStory = async () => {
    if (!story.trim()) return alert('กรุณาใส่เนื้อเรื่องหรือพล็อตของคุณ');

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `คุณเป็น "Master of Cinematic Continuity" และผู้เชี่ยวชาญการเขียน Prompt ระดับโลก 
หน้าที่ของคุณคือวิเคราะห์เนื้อเรื่องด้านล่างนี้ และสร้าง "Visual Continuity Plan" ที่สมบูรณ์แบบ:

เนื้อเรื่อง: "${story}"

ตอบกลับเป็น JSON เท่านั้น:
{
  "scenes": [
    {
      "sceneNumber": 1,
      "action": "...",
      "shotSize": "...",
      "angle": "...",
      "orientation": "...",
      "lighting": "...",
      "cinematicReasoning": "...",
      "optimizedPrompt": "..."
    }
  ],
  "directorTips": "...",
  "suggestedStyle": "..."
}`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              scenes: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    sceneNumber: { type: Type.INTEGER },
                    action: { type: Type.STRING },
                    shotSize: { type: Type.STRING },
                    angle: { type: Type.STRING },
                    orientation: { type: Type.STRING },
                    lighting: { type: Type.STRING },
                    cinematicReasoning: { type: Type.STRING },
                    optimizedPrompt: { type: Type.STRING },
                  },
                  required: ['sceneNumber', 'action', 'shotSize', 'angle', 'orientation', 'lighting', 'cinematicReasoning', 'optimizedPrompt'],
                }
              },
              directorTips: { type: Type.STRING },
              suggestedStyle: { type: Type.STRING }
            },
            required: ['scenes', 'directorTips', 'suggestedStyle']
          }
        }
      });

      const rawText = response.text?.trim();
      if (!rawText) throw new Error('ไม่ได้รับข้อมูลจาก AI');
      
      const result = JSON.parse(rawText) as AiStoryAnalysis;
      setAnalysis(result);
      setStep('result');
      window.scrollTo(0, 0);
    } catch (error: any) {
      console.error(error);
      const errorMsg = error.message?.includes('503') 
        ? 'ขออภัย ขณะนี้ระบบ AI มีผู้ใช้งานจำนวนมาก กรุณารอสักครู่แล้วลองใหม่อีกครั้ง' 
        : 'เกิดข้อผิดพลาดในการวิเคราะห์: ' + error.message;
      alert(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <SEO title="AI Prompt Buddy - วิเคราะห์ความต่อเนื่องภาพยนตร์" description="เรียนรู้การแตกช็อตและเขียน Prompt ที่คุมความต่อเนื่อง (Continuity) ระดับมืออาชีพ" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 bg-cinematic-accent/10 border border-cinematic-accent/30 rounded-full text-cinematic-accent text-[10px] font-black uppercase tracking-widest mb-4">
            Masterclass Continuity Tool
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">AI Prompt <span className="text-cinematic-accent">Buddy</span></h1>
          <p className="text-gray-400 font-light text-lg">วิเคราะห์การแตกช็อตและคุมความต่อเนื่อง (Visual Continuity) ให้กับหนังของคุณ</p>
        </div>

        {step === 'input' && (
          <div className="bg-cinematic-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <label className="block text-sm font-medium text-gray-300 mb-4">ใส่เนื้อเรื่องที่ต้องการให้ AI ช่วยแตกช็อต</label>
            <textarea
              className="w-full h-56 bg-cinematic-900 border border-gray-700 rounded-2xl p-6 text-white outline-none focus:ring-2 focus:ring-cinematic-accent resize-none font-light leading-relaxed text-lg"
              placeholder="ตัวอย่าง: หญิงสาวชาวญี่ปุ่นวิ่งตากฝนข้ามสะพานไม้สีแดง..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
            <div className="mt-6 flex justify-end">
              <button
                onClick={analyzeStory}
                disabled={isLoading}
                className="px-12 py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center gap-3 disabled:opacity-50"
              >
                {isLoading ? 'กำลังวิเคราะห์...' : 'เริ่มวิเคราะห์ช็อต'}
              </button>
            </div>
          </div>
        )}

        {step === 'result' && analysis && (
          <div className="space-y-12 animate-fade-in">
             <div className="bg-cinematic-800 p-8 rounded-3xl border border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                   <span className="text-[10px] text-cinematic-accent font-black uppercase tracking-widest block mb-2">Visual Style</span>
                   <h2 className="text-2xl font-bold">{analysis.suggestedStyle}</h2>
                </div>
                <button onClick={() => setStep('input')} className="px-8 py-3 bg-white text-black font-bold rounded-full text-xs">วิเคราะห์เรื่องใหม่</button>
             </div>

             <div className="space-y-12">
               {analysis.scenes?.map((scene, index) => (
                 <div key={index} className="bg-cinematic-800 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                   <div className="lg:w-[280px] p-8 bg-black/40 border-b lg:border-b-0 lg:border-r border-gray-700/50">
                      <div className="text-xs font-black text-cinematic-accent/40 mb-1">SHOT {scene.sceneNumber}</div>
                      <div className="space-y-4">
                         <div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Camera Plan</p>
                            <p className="text-sm font-bold">{scene.orientation}</p>
                            <p className="text-[11px] text-gray-400">{scene.shotSize} | {scene.angle}</p>
                         </div>
                      </div>
                   </div>
                   
                   <div className="flex-1 p-8">
                      <h3 className="text-xl font-bold mb-4">{scene.action}</h3>
                      <div className="mb-6 p-5 bg-cinematic-accent/5 border-l-4 border-cinematic-accent rounded-r-2xl">
                         <p className="text-sm text-gray-300 font-light italic">{scene.cinematicReasoning}</p>
                      </div>
                      <div className="relative">
                         <div className="flex justify-between items-center mb-2">
                            <p className="text-[10px] text-gray-500 font-bold uppercase">Optimized AI Prompt</p>
                            <button onClick={() => copyToClipboard(scene.optimizedPrompt, index)} className="text-[10px] text-cinematic-accent">
                               {copiedIndex === index ? '✓ COPIED' : 'COPY'}
                            </button>
                         </div>
                         <div className="p-5 bg-black/60 rounded-2xl border border-gray-700/50 font-mono text-xs text-gray-400">
                            {scene.optimizedPrompt}
                         </div>
                      </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiDirectorTool;
