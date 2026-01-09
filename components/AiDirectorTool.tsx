
import { GoogleGenAI, Type, GenerateContentResponse } from '@google/genai';
import React, { useState, useEffect } from 'react';
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

กฎเหล็กที่คุณต้องปฏิบัติอย่างเคร่งครัด:
1. Establishing the Anchor: ในฉากแรก คุณต้องกำหนด "ลักษณะสภาพแวดล้อม" (เช่น ชนิดของสะพาน, โทนสีฟ้าของฝน, ตึกในฉากหลัง) และ "ลักษณะตัวละคร" (เสื้อผ้า, ทรงผม) ให้ชัดเจนที่สุด
2. Visual Inheritance: ทุกฉากที่ตามมา "ต้อง" ใช้รายละเอียดสภาพแวดล้อมและตัวละครตัวเดิมจากฉากแรก ห้ามเปลี่ยนชนิดสะพานหรือเปลี่ยนสถานที่เด็ดขาด
3. Camera Orientation: ต้องระบุทิศทางกล้องอย่างละเอียด (เช่น Frontal View, 45-degree Side Profile, View from Behind, Low-angle Eye Level, Wide Establishing Shot)
4. Cinematic Reasoning (ภาษาไทย): ต้องอธิบายเหตุผลความต่อเนื่อง เช่น "ใช้มุมมองจากด้านหลัง (Back View) ของแฟนหนุ่ม เพื่อให้เห็นหญิงสาววิ่งเข้ามาจากระยะไกลบนสะพานไม้สีแดงตัวเดิม"
5. Optimized Prompt (ภาษาอังกฤษ): ต้องเริ่มด้วยรายละเอียดกล้อง ตามด้วยลักษณะตัวละครที่คงที่ และลักษณะสถานที่ที่คงที่ เช่น "[Camera Direction], [Character Descs], [Environment Descs from Shot 1], cinematic lighting, 8k"
6. บังคับแตกอย่างน้อย 5 ช็อตเพื่อให้เห็นความต่อเนื่องของเรื่องราว`,
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
                    action: { type: Type.STRING, description: "เหตุการณ์ในฉาก" },
                    shotSize: { type: Type.STRING, description: "ระยะภาพ (e.g. Medium Shot, Close-up)" },
                    angle: { type: Type.STRING, description: "มุมก้ม/เงย (e.g. Low Angle, Eye Level)" },
                    orientation: { type: Type.STRING, description: "ทิศทางกล้อง (e.g. Front View, 45-degree Side Profile, Back View)" },
                    lighting: { type: Type.STRING, description: "การจัดแสง (e.g. Moody blue rain light, Neon glow)" },
                    cinematicReasoning: { type: Type.STRING, description: "การวิเคราะห์ความต่อเนื่องและการกำกับ (ภาษาไทย)" },
                    optimizedPrompt: { type: Type.STRING, description: "Prompt ที่คุมความต่อเนื่องเป๊ะๆ (ภาษาอังกฤษ)" },
                  },
                  required: ['sceneNumber', 'action', 'shotSize', 'angle', 'orientation', 'lighting', 'cinematicReasoning', 'optimizedPrompt'],
                }
              },
              directorTips: { type: Type.STRING, description: "คำแนะนำเรื่อง Continuity และการใช้ AI เจนภาพ (ภาษาไทย)" },
              suggestedStyle: { type: Type.STRING, description: "แนวทางสไตล์สีและโทนภาพรวม" }
            },
            required: ['scenes', 'directorTips', 'suggestedStyle']
          }
        }
      });

      const result = JSON.parse(response.text || '{}') as AiStoryAnalysis;
      setAnalysis(result);
      setStep('result');
      window.scrollTo(0, 0);
    } catch (error: any) {
      console.error(error);
      alert('เกิดข้อผิดพลาดในการวิเคราะห์: ' + error.message);
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
          <p className="text-gray-400 font-light text-lg">ช่วยแตกช็อตและคุมความต่อเนื่อง (Visual Continuity) ให้กับหนังของคุณ</p>
          
          <div className="mt-6 p-5 bg-cinematic-accent/5 border border-cinematic-accent/20 rounded-2xl inline-block text-left max-w-2xl relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-1 h-full bg-cinematic-accent"></div>
             <p className="text-xs text-gray-300 leading-relaxed pl-2">
                <strong>📢 หมายเหตุสำคัญ:</strong> เครื่องมือนี้ใช้สำหรับ <strong>ฝึกการแตกช็อตและการเขียน Prompt เบื้องต้น</strong> เท่านั้น การใช้เพียง Prompt ไม่สามารถคุมหน้าตาตัวละครหรือฉากให้เหมือนเดิม 100% ได้ หากต้องการความแม่นยำระดับมืออาชีพ แนะนำให้ใช้ <strong>Google Nano Banana (Gemini)</strong> ในโหมด Reference ซึ่งเรามีการสอนเทคนิคนี้อย่างละเอียดในคอร์สของ <strong>Cinematic AI</strong>
             </p>
          </div>
        </div>

        {step === 'input' && (
          <div className="bg-cinematic-800 p-8 rounded-3xl border border-gray-700 shadow-2xl animate-fade-in relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cinematic-accent/10 blur-3xl rounded-full"></div>
            <label className="block text-sm font-medium text-gray-300 mb-4">ใส่เนื้อเรื่องที่ต้องการให้ AI ช่วยแตกช็อตและคุมความต่อเนื่อง</label>
            <textarea
              className="w-full h-56 bg-cinematic-900 border border-gray-700 rounded-2xl p-6 text-white focus:ring-2 focus:ring-cinematic-accent outline-none transition-all resize-none font-light leading-relaxed text-lg"
              placeholder="ตัวอย่าง: หญิงสาวชาวญี่ปุ่นวิ่งตากฝนข้ามสะพานไม้สีแดงในโตเกียว เพื่อไปพบแฟนหนุ่มที่รออยู่อีกฝั่งหนึ่งของสะพาน..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
            <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                 <svg className="w-4 h-4 text-cinematic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 AI จะสร้าง Visual Anchor เพื่อคุมฉากให้ต่อเนื่องกัน
              </div>
              <button
                onClick={analyzeStory}
                disabled={isLoading}
                className="w-full md:w-auto px-12 py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
              >
                {isLoading ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> กำลังวิเคราะห์ช็อต...</>
                ) : 'เริ่มวิเคราะห์ช็อตต่อเนื่อง'}
              </button>
            </div>
          </div>
        )}

        {step === 'result' && analysis && (
          <div className="space-y-16 animate-fade-in">
             <div className="bg-cinematic-800/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
                <div className="text-center md:text-left">
                   <span className="text-[10px] text-cinematic-accent font-black uppercase tracking-[0.3em] block mb-2">Visual Style & Mood</span>
                   <h2 className="text-2xl font-bold text-white tracking-tight">{analysis.suggestedStyle}</h2>
                </div>
                <button onClick={() => setStep('input')} className="px-8 py-3 bg-white text-black font-bold rounded-full text-xs transition-all hover:bg-gray-200 active:scale-95 shadow-lg">วิเคราะห์เรื่องใหม่</button>
             </div>

             <div className="relative">
               {/* Vertical Continuity Line */}
               <div className="absolute left-[20px] md:left-[40px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-cinematic-accent via-gray-700 to-cinematic-accent/20"></div>

               <div className="space-y-12">
                 {analysis.scenes.map((scene, index) => (
                   <div key={index} className="relative pl-12 md:pl-24 group">
                     {/* Timeline Node */}
                     <div className="absolute left-[12px] md:left-[32px] top-6 w-4 h-4 rounded-full bg-cinematic-accent border-4 border-cinematic-900 z-10 shadow-[0_0_15px_rgba(229,9,20,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                     
                     <div className="bg-cinematic-800 rounded-3xl border border-gray-700 overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-300 hover:border-cinematic-accent/40 hover:shadow-cinematic-accent/5">
                       {/* Shot Metadata Side */}
                       <div className="lg:w-[280px] p-8 bg-black/40 border-b lg:border-b-0 lg:border-r border-gray-700/50">
                          <div className="text-xs font-black text-cinematic-accent/40 mb-1 tracking-widest">SHOT {scene.sceneNumber}</div>
                          <div className="space-y-4">
                             <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Camera Plan</p>
                                <p className="text-sm font-bold text-white leading-tight mb-1">{scene.orientation}</p>
                                <p className="text-[11px] text-gray-400 font-medium">{scene.shotSize} | {scene.angle}</p>
                             </div>
                             <div>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Lighting</p>
                                <p className="text-[11px] text-gray-300 leading-relaxed">{scene.lighting}</p>
                             </div>
                          </div>
                       </div>
                       
                       {/* Content Side */}
                       <div className="flex-1 p-8">
                          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cinematic-accent transition-colors">{scene.action}</h3>
                          
                          <div className="mb-6 p-5 bg-cinematic-accent/5 border-l-4 border-cinematic-accent rounded-r-2xl">
                             <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-cinematic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                <p className="text-[11px] text-cinematic-accent font-black uppercase tracking-widest">Visual Continuity Analysis</p>
                             </div>
                             <p className="text-sm text-gray-300 font-light leading-relaxed italic">{scene.cinematicReasoning}</p>
                          </div>

                          <div className="relative group/prompt">
                             <div className="flex justify-between items-center mb-2 px-1">
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Optimized AI Prompt (Visual Anchor Enabled)</p>
                                <button 
                                   onClick={() => copyToClipboard(scene.optimizedPrompt, index)}
                                   className="text-[10px] font-black text-cinematic-accent hover:text-white transition-colors"
                                >
                                   {copiedIndex === index ? '✓ COPIED' : 'COPY PROMPT'}
                                </button>
                             </div>
                             <div 
                                className="p-5 bg-black/60 rounded-2xl border border-gray-700/50 font-mono text-sm text-gray-400 leading-relaxed break-words cursor-pointer hover:border-cinematic-accent/30 transition-colors"
                                onClick={() => copyToClipboard(scene.optimizedPrompt, index)}
                             >
                                {scene.optimizedPrompt}
                             </div>
                          </div>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Footer Tips with Educational Focus */}
             <div className="bg-gradient-to-br from-cinematic-800 to-black p-10 rounded-[40px] border border-gray-700 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cinematic-accent/5 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-cinematic-accent rounded-2xl flex items-center justify-center shadow-lg shadow-cinematic-accent/20">
                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.642.321a2 2 0 01-1.584 0l-.642-.321a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.34.34a2 2 0 000 2.828l1.245 1.245a2 2 0 002.828 0l.34-.34a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.321-.642a2 2 0 010-1.584l.321-.642a6 6 0 00.517-3.86l-.477-2.387a2 2 0 00-.547-1.022l-.34-.34a2 2 0 00-2.828 0" /></svg>
                      </div>
                      <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Continuity Master Tips</h2>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-4">
                         <h4 className="text-cinematic-accent font-bold text-sm uppercase tracking-widest">การกำกับความต่อเนื่อง</h4>
                         <p className="text-gray-300 font-light leading-relaxed">{analysis.directorTips}</p>
                      </div>
                      <div className="bg-cinematic-accent/10 border border-cinematic-accent/30 p-6 rounded-3xl">
                         <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cinematic-accent rounded-full animate-pulse"></span>
                            PRO TIP: Character Consistency
                         </h4>
                         <p className="text-gray-400 text-xs leading-relaxed font-light">
                            การเขียน Prompt เพียงอย่างเดียว มักจะทำให้หน้าตัวละครเปลี่ยนไปมาในแต่ละช็อต (Consistency Error) วิธีการแก้ปัญหาแบบมืออาชีพที่ <strong>Cinematic AI</strong> คือการใช้ <strong>Google Nano Banana (Gemini)</strong> ในการทำ Reference Character และ Reference Scene ซึ่งจะทำให้ภาพทุกช็อตของคุณมีสะพานตัวเดิม หน้าตาคนเดิม และแสงแบบเดิมเป๊ะๆ 
                         </p>
                         <button className="mt-4 text-[10px] font-black text-cinematic-accent hover:underline uppercase tracking-widest">เรียนรู้วิธีการคุมหน้าตัวละครที่นี่ →</button>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row gap-6 items-center justify-between">
                      <p className="text-gray-500 text-sm font-light">อยากเปลี่ยนจาก Prompt เป็นหนังที่สมบูรณ์แบบใช่ไหม?</p>
                      <button className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all shadow-xl active:scale-95">ดูคอร์สเรียนทั้งหมด</button>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiDirectorTool;
