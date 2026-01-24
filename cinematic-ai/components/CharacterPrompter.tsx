
import { GoogleGenAI, Type } from '@google/genai';
import React, { useState } from 'react';
import SEO from './SEO';

interface CharacterFormData {
  gender: string;
  age: string;
  skin: string;
  hair: string;
  outfit: string;
  pose: string;
  location: string;
  angle: string;
  lighting: string;
  aspectRatio: string;
  shotSize: string;
  lens: string;
}

const CharacterPrompter: React.FC = () => {
  const [formData, setFormData] = useState<CharacterFormData>({
    gender: '',
    age: '',
    skin: '',
    hair: '',
    outfit: '',
    pose: '',
    location: '',
    angle: '',
    lighting: '',
    aspectRatio: '',
    shotSize: '',
    lens: '',
  });

  const [result, setResult] = useState<{ prompt: string; explanation: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateCharacter = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setResult(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const promptText = `คุณเป็น "World-Class AI Character Artist" หน้าที่ของคุณคือสร้าง Prompt สำหรับเจนภาพตัวละครที่สมจริงที่สุด 
อ้างอิงจากข้อมูลที่ผู้ใช้กรอกด้านล่างนี้ หากช่องไหนว่างไว้ ให้คุณใช้จินตนาการระดับมาสเตอร์ของคุณเติมเต็มให้สมด้วยสไตล์ Cinematic

ข้อมูลตัวละคร:
- เพศ: ${formData.gender || 'ตามความเหมาะสม'}
- อายุ: ${formData.age || 'ตามความเหมาะสม'}
- สีผิว: ${formData.skin || 'ตามความเหมาะสม'}
- ทรงผม: ${formData.hair || 'ตามความเหมาะสม'}
- ชุดที่ใส่: ${formData.outfit || 'ตามความเหมาะสม'}
- ท่าโพสต์: ${formData.pose || 'ตามความเหมาะสม'}
- สถานที่: ${formData.location || 'ตามความเหมาะสม'}
- มุมกล้อง: ${formData.angle || 'ตามความเหมาะสม'}
- ลักษณะแสง: ${formData.lighting || 'ตามความเหมาะสม'}
- สัดส่วนภาพ: ${formData.aspectRatio || 'ตามความเหมาะสม'}
- ระยะภาพ: ${formData.shotSize || 'ตามความเหมาะสม'}
- เลนส์และกล้อง: ${formData.lens || 'ตามความเหมาะสม'}

ตอบกลับเป็น JSON เท่านั้น:
{
  "prompt": "...",
  "explanation": "..."
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: promptText,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              prompt: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ['prompt', 'explanation']
          }
        }
      });

      const rawText = response.text?.trim();
      if (!rawText) throw new Error('AI ไม่ส่งข้อมูลกลับมา');

      const data = JSON.parse(rawText);
      setResult(data);
    } catch (error: any) {
      console.error(error);
      let errorMsg = 'เกิดข้อผิดพลาดในการสร้าง Prompt: ' + error.message;
      if (error.message?.includes('503')) {
        errorMsg = 'ขออภัย ขณะนี้ระบบ AI มีผู้ใช้งานจำนวนมากเกินไป (Overloaded) กรุณารอสัก 10-20 วินาทีแล้วลองใหมีกครั้งครับ';
      }
      alert(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const copyPrompt = () => {
    if (result) {
      navigator.clipboard.writeText(result.prompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const formFields = [
    { name: 'gender', label: 'เพศ', placeholder: 'ชาย, หญิง' },
    { name: 'age', label: 'อายุ', placeholder: 'ระบุอายุ' },
    { name: 'skin', label: 'สีผิว', placeholder: 'ระบุสีผิว' },
    { name: 'hair', label: 'ทรงผม', placeholder: 'ระบุทรงผม' },
    { name: 'outfit', label: 'ชุดที่ใส่', placeholder: 'ระบุชุด' },
    { name: 'pose', label: 'ท่าโพสต์', placeholder: 'ระบุท่าทาง' },
    { name: 'location', label: 'สถานที่', placeholder: 'ระบุฉากหลัง' },
    { name: 'angle', label: 'มุมกล้อง', placeholder: 'มุมต่ำ, ระดับสายตา' },
    { name: 'lighting', label: 'แสง', placeholder: 'แสงเย็น, แสงนีออน' },
    { name: 'aspectRatio', label: 'สัดส่วน', placeholder: '16:9, 9:16' },
    { name: 'shotSize', label: 'ระยะภาพ', placeholder: 'Close-up, Wide' },
    { name: 'lens', label: 'เลนส์', placeholder: '35mm, 85mm' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <SEO 
        title="Character Prompter - สร้างตัวละครสมจริง" 
        description="สร้าง Prompt สำหรับตัวละครภาพยนตร์ที่สมจริงที่สุดด้วยระบบ Template และ AI" 
      />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <div className="inline-block px-4 py-1 bg-cinematic-accent/10 border border-cinematic-accent/30 rounded-full text-cinematic-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Master of Realism
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Character <span className="text-cinematic-accent">Prompter</span></h1>
          <p className="text-gray-400 font-light text-lg">ออกแบบตัวละครในฝันของคุณด้วย AI เพียงแค่กรอกรายละเอียดที่ต้องการ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-cinematic-800 p-8 rounded-[32px] border border-gray-800 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formFields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">{field.label}</label>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full bg-cinematic-900 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cinematic-accent outline-none transition-all placeholder:text-gray-600 font-light"
                  />
                </div>
              ))}
            </div>
            
            <button
              onClick={generateCharacter}
              disabled={isLoading}
              className="w-full py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? 'กำลังร่างตัวละคร...' : 'สร้าง Prompt ตัวละคร'}
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
                  <div className="p-6 bg-black/60 rounded-2xl border border-gray-700 font-mono text-sm text-gray-300 leading-relaxed cursor-pointer" onClick={copyPrompt}>
                    {result.prompt}
                  </div>
                </div>

                <div className="bg-cinematic-accent/10 p-8 rounded-[32px] border border-cinematic-accent/20">
                  <label className="text-[10px] font-black text-white uppercase tracking-widest block mb-4">Direction (ภาษาไทย)</label>
                  <p className="text-gray-300 font-light text-sm italic">{result.explanation}</p>
                </div>
              </div>
            )}
            {!result && !isLoading && (
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-800 rounded-[32px] flex items-center justify-center text-gray-600">
                 <p className="font-light">กรอกรายละเอียดเพื่อเริ่มต้น</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPrompter;
