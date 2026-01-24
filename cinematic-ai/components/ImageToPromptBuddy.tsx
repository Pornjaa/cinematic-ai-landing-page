
import { GoogleGenAI, Type } from '@google/genai';
import React, { useState, useRef } from 'react';
import SEO from './SEO';

const ImageToPromptBuddy: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [instruction, setInstruction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ optimizedPrompt: string; analysis: string } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const SUPPORTED_MIMES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // ตรวจสอบ MIME Type เพื่อป้องกัน Error 400 (เช่นไฟล์ AVIF)
      if (!SUPPORTED_MIMES.includes(file.type)) {
        alert('ขออภัย ระบบไม่รองรับไฟล์ภาพประเภทนี้ (เช่น AVIF) กรุณาใช้ไฟล์ JPG, PNG หรือ WebP แทน เพื่อประสิทธิภาพสูงสุด');
        if (fileInputRef.current) fileInputRef.current.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = (reader.result as string).split(',')[1];
        setImage(base64Data);
        setMimeType(file.type);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return alert('กรุณาอัปโหลดรูปภาพที่ต้องการวิเคราะห์');

    setIsLoading(true);
    setResult(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const imagePart = {
        inlineData: {
          data: image,
          mimeType: mimeType,
        },
      };

      const textPart = {
        text: `คุณเป็น "World-Class Vision Architect" 
วิเคราะห์รูปภาพที่แนบมา และเขียน English Prompt เพื่อสร้างภาพใหม่ที่เหมือนต้นฉบับนี้ 100% 

คำสั่งพิเศษ: "${instruction || 'วิเคราะห์ทั้งภาพ'}"

ตอบกลับเป็น JSON เท่านั้น:
{
  "optimizedPrompt": "...",
  "analysis": "..."
}`
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
              analysis: { type: Type.STRING }
            },
            required: ['optimizedPrompt', 'analysis']
          }
        }
      });

      const rawText = response.text?.trim();
      if (!rawText) throw new Error('ไม่ได้รับข้อมูลจาก AI');

      const data = JSON.parse(rawText);
      setResult(data);
    } catch (error: any) {
      console.error(error);
      // จัดการ Error 503 (Overloaded) และ 400 (MIME Type)
      let errorMsg = 'เกิดข้อผิดพลาดในการวิเคราะห์: ' + error.message;
      if (error.message?.includes('503')) {
        errorMsg = 'ขออภัย ขณะนี้ระบบ AI มีผู้ใช้งานจำนวนมากเกินไป (Overloaded) กรุณารอสัก 10-20 วินาทีแล้วลองใหม่อีกครั้งครับ';
      } else if (error.message?.includes('400') || error.message?.includes('MIME')) {
        errorMsg = 'ขออภัย ประเภทไฟล์ภาพของคุณไม่รองรับ กรุณาลองอัปโหลดเป็นไฟล์ JPG หรือ PNG แทนครับ';
      }
      alert(errorMsg);
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
        title="AI Vision Analyst - เครื่องมือแกะรหัสภาพเป็น Prompt" 
        description="อัปโหลดรูปภาพ Infographic, ท่าทางตัวละคร หรือฉาก เพื่อให้ AI วิเคราะห์สไตล์และเขียน Prompt ที่แม่นยำที่สุดสำหรับสร้างซ้ำ" 
      />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-cinematic-accent/10 border border-cinematic-accent/30 rounded-full text-cinematic-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Advanced Vision AI
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">AI Vision <span className="text-cinematic-accent">Analyst</span></h1>
          <p className="text-gray-400 font-light text-lg">แกะรหัสความสวยงามจากภาพถ่ายและกราฟิกสู่ Prompt ระดับมืออาชีพ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-cinematic-800 p-8 rounded-[32px] border border-gray-800 shadow-2xl space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">อัปโหลดภาพต้นฉบับ</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl aspect-video flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden ${image ? 'border-cinematic-accent/50' : 'border-gray-700 hover:border-cinematic-accent'}`}
              >
                {image ? (
                  <img src={`data:${mimeType};base64,${image}`} alt="Preview" className="w-full h-full object-contain bg-black" />
                ) : (
                  <div className="text-center p-6 text-gray-500">
                    <p className="text-sm font-light">คลิกเพื่ออัปโหลดภาพ</p>
                    <p className="text-[10px] mt-2 opacity-50 uppercase tracking-tighter">รองรับ JPG, PNG, WEBP</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/jpeg,image/png,image/webp" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">คำสั่งกำกับเป็นพิเศษ</label>
              <textarea
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
                placeholder="เช่น: เน้นแกะแค่โครงสร้าง Infographic..."
                className="w-full h-24 bg-cinematic-900 border border-gray-700 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-cinematic-accent outline-none transition-all resize-none"
              />
            </div>
            
            <button
              onClick={analyzeImage}
              disabled={isLoading}
              className="w-full py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg disabled:opacity-50"
            >
              {isLoading ? 'กำลังวิเคราะห์...' : 'วิเคราะห์ภาพและสร้าง Prompt'}
            </button>
          </div>

          <div className="space-y-6">
            {result && !isLoading && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-cinematic-800 p-8 rounded-[32px] border border-gray-800 shadow-2xl relative">
                  <button 
                    onClick={copyPrompt}
                    className="absolute top-4 right-4 text-[10px] font-black text-cinematic-accent px-3 py-1 bg-black/50 rounded-full"
                  >
                    {isCopied ? 'COPIED ✓' : 'COPY'}
                  </button>
                  <label className="block text-[10px] font-black text-cinematic-accent uppercase tracking-widest mb-4">Prompt</label>
                  <div className="p-6 bg-black/60 rounded-2xl border border-gray-700 font-mono text-xs text-gray-400 leading-relaxed">
                    {result.optimizedPrompt}
                  </div>
                </div>

                <div className="bg-cinematic-accent/10 p-8 rounded-[32px] border border-cinematic-accent/20">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest block mb-4">AI Analysis</label>
                  <p className="text-gray-300 font-light text-sm italic">{result.analysis}</p>
                </div>
              </div>
            )}
            {!result && !isLoading && (
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-800 rounded-[32px] flex items-center justify-center text-gray-600">
                 <p className="font-light">อัปโหลดภาพเพื่อเริ่มต้น</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageToPromptBuddy;
