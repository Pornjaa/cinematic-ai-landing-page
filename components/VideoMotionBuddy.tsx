
import { GoogleGenAI, Type } from '@google/genai';
import React, { useState, useRef } from 'react';
import SEO from './SEO';

const VideoMotionBuddy: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ prompt: string; explanation: string } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = (reader.result as string).split(',')[1];
        setImage(base64Data);
        setMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideoPrompt = async () => {
    if (!image) return alert('กรุณาอัปโหลดรูปภาพต้นฉบับ');
    if (!description.trim()) return alert('กรุณาบอกสิ่งที่ต้องการให้เกิดขึ้นในภาพ');

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const imagePart = {
        inlineData: {
          data: image,
          mimeType: mimeType,
        },
      };

      const textPart = {
        text: `คุณเป็น "AI Video Motion Director" ผู้เชี่ยวชาญด้าน Image-to-Video
หน้าที่ของคุณคือวิเคราะห์รูปภาพที่แนบมา และความต้องการของผู้ใช้: "${description}"

กฎเหล็กในการทำงาน:
1. PHYSICAL CONSISTENCY: วิเคราะห์ว่าสิ่งที่ผู้ใช้ต้องการเป็นไปได้จริงตามหลักฟิสิกส์หรือไม่ (เช่น ถ้าเป็นภาพคนนั่งนิ่งๆ แต่จะให้กระโดดตีลังกาแบบสมบูรณ์อาจจะยากไปสำหรับ AI) หากไม่ตรง AI ต้องปรับการเคลื่อนไหวให้ "สมจริง" และ "ลื่นไหล" ที่สุดเท่าที่ภาพต้นฉบับจะเอื้ออำนวย
2. CINEMATIC MOTION: เพิ่มเทคนิคการเคลื่อนกล้อง (Camera Movement) เช่น Slow zoom in, Orbit, Pan left เพื่อให้วิดีโอมีพลัง
3. OUTPUT FORMAT: ตอบกลับเป็น JSON เท่านั้น
   - optimizedPrompt: ภาษาอังกฤษสำหรับ AI Video Generation (Kling/Luma/Veo)
   - explanation: อธิบายเป็นภาษาไทยว่าคุณได้ปรับแต่งอะไรของผู้ใช้ไปบ้าง เพราะอะไร และได้เพิ่มการเคลื่อนไหวอะไรเข้าไปใน Prompt เพื่อให้งานดูเป็นมืออาชีพ`
      };

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: { parts: [imagePart, textPart] },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              optimizedPrompt: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ['optimizedPrompt', 'explanation']
          }
        }
      });

      const data = JSON.parse(response.text || '{}');
      setResult(data);
    } catch (error: any) {
      console.error(error);
      alert('เกิดข้อผิดพลาดในการวิเคราะห์ภาพ: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const copyPrompt = () => {
    if (result) {
      navigator.clipboard.writeText(result.optimizedPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <SEO 
        title="AI Video Motion Buddy - วิเคราะห์และสร้าง Prompt วิดีโอ" 
        description="อัปโหลดภาพแล้วบอกสิ่งที่ต้องการ AI จะช่วยวิเคราะห์ความสมจริงและเขียน Prompt วิดีโอที่ต่อเนื่องที่สุดให้คุณ" 
      />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-cinematic-accent/10 border border-cinematic-accent/30 rounded-full text-cinematic-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            AI Motion Master
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">AI Video Motion <span className="text-cinematic-accent">Buddy</span></h1>
          <p className="text-gray-400 font-light text-lg">เปลี่ยนภาพนิ่งให้มีชีวิต ด้วยการวิเคราะห์การเคลื่อนไหวที่สมจริงที่สุด</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Section */}
          <div className="bg-cinematic-800 p-8 rounded-[32px] border border-gray-800 shadow-2xl space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">1. อัปโหลดภาพต้นฉบับ (Reference Image)</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl aspect-video flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden ${image ? 'border-cinematic-accent/50' : 'border-gray-700 hover:border-cinematic-accent'}`}
              >
                {image ? (
                  <img src={`data:${mimeType};base64,${image}`} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 mx-auto text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-sm text-gray-500 font-light">คลิกเพื่ออัปโหลดรูปภาพที่ต้องการขยับ</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">2. เล่าสิ่งที่ต้องการให้เกิดขึ้นในภาพ</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="ตัวอย่าง: ต้องการให้หญิงสาวในภาพค่อยๆ หันหน้ามาส่งยิ้มให้กล้อง ท่ามกลางหิมะที่โปรยปรายลงมาอย่างช้าๆ"
                className="w-full h-32 bg-cinematic-900 border border-gray-700 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-cinematic-accent outline-none transition-all resize-none placeholder:text-gray-600 font-light"
              />
            </div>
            
            <button
              onClick={generateVideoPrompt}
              disabled={isLoading}
              className="w-full py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? (
                <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> กำลังวิเคราะห์องค์ประกอบภาพ...</>
              ) : (
                <>วิเคราะห์และสร้าง Prompt วิดีโอ</>
              )}
            </button>
          </div>

          {/* Result Section */}
          <div className="space-y-6">
            {!result && !isLoading && (
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-800 rounded-[32px] flex flex-col items-center justify-center p-10 text-center text-gray-600">
                 <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                 <p className="font-light">อัปโหลดภาพและเล่าเรื่องด้านซ้ายเพื่อรับ Prompt วิดีโอระดับโปร</p>
              </div>
            )}

            {isLoading && (
               <div className="h-full min-h-[400px] bg-cinematic-800/40 rounded-[32px] border border-gray-800 p-8 flex flex-col items-center justify-center animate-pulse">
                  <div className="w-full h-4 bg-gray-700 rounded-full mb-4 max-w-[80%]"></div>
                  <div className="w-full h-4 bg-gray-700 rounded-full mb-4 max-w-[60%]"></div>
                  <div className="w-full h-4 bg-gray-700 rounded-full mb-4 max-w-[90%]"></div>
                  <p className="mt-4 text-gray-500 text-sm">AI กำลังคำนวณระยะการเคลื่อนที่ของวัตถุและมุมกล้อง...</p>
               </div>
            )}

            {result && !isLoading && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-cinematic-800 p-8 rounded-[32px] border border-gray-800 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4">
                    <button 
                      onClick={copyPrompt}
                      className="text-xs font-black text-cinematic-accent bg-black/50 px-3 py-1 rounded-full hover:bg-cinematic-accent hover:text-white transition-all"
                    >
                      {isCopied ? 'COPIED ✓' : 'COPY PROMPT'}
                    </button>
                  </div>
                  <label className="block text-[10px] font-black text-cinematic-accent uppercase tracking-[0.3em] mb-4">Optimized Video Prompt (English)</label>
                  <div className="p-6 bg-black/60 rounded-2xl border border-gray-700/50 font-mono text-sm text-gray-300 leading-relaxed cursor-pointer" onClick={copyPrompt}>
                    {result.optimizedPrompt}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cinematic-accent/10 to-transparent p-8 rounded-[32px] border border-cinematic-accent/20">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-cinematic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <label className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Motion Analysis & Explanation (ภาษาไทย)</label>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed italic text-sm whitespace-pre-line">
                    {result.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 p-8 bg-black/40 rounded-[32px] border border-gray-800 text-center">
           <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
             <strong>Motion Secret:</strong> การปรับความแรงของการเคลื่อนไหว (Motion Buckets) มีผลอย่างมากต่อคุณภาพวิดีโอ แนะนำให้นำ Prompt นี้ไปใช้ใน <strong>Kling AI</strong> หรือ <strong>Luma Dream Machine</strong> โดยเริ่มที่ค่า Motion 5-7 เพื่อความลื่นไหลสูงสุด
           </p>
        </div>
      </div>
    </div>
  );
};

export default VideoMotionBuddy;
