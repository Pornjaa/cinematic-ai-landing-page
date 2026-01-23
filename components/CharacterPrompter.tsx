
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
      const promptText = `คุณเป็น "World-Class AI Character Artist" หน้าที่ของคุณคือสร้าง Prompt สำหรับเจนภาพตัวละครที่สมจริงที่สุด (Hyper-realistic) 
อ้างอิงจากข้อมูลที่ผู้ใช้กรอกด้านล่างนี้ หากช่องไหนว่างไว้ ให้คุณใช้จินตนาการระดับมาสเตอร์ของคุณเติมเต็มให้สมบูรณ์และดูเป็นงาน Cinematic ระดับโปร

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

รูปแบบการตอบกลับ (JSON):
{
  "prompt": "Detailed English Prompt for AI Image Generation",
  "explanation": "คำอธิบายภาพนี้ภาษาไทยแบบละเอียด"
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

      const rawText = response.text || '';
      if (!rawText) throw new Error('AI ไม่ส่งข้อมูลกลับมา (อาจติดตัวกรองความปลอดภัย)');

      // ฟังก์ชันสกัด JSON เผื่อกรณี AI ส่ง Markdown ครอบมา
      const extractJson = (text: string) => {
        try {
          return JSON.parse(text);
        } catch (e) {
          const jsonMatch = text.match(/\{[\s\S]*\}/);
          if (jsonMatch) return JSON.parse(jsonMatch[0]);
          throw e;
        }
      };

      const data = extractJson(rawText.trim());
      setResult(data);
    } catch (error: any) {
      console.error("Character generation error:", error);
      alert('เกิดข้อผิดพลาด: ' + (error.message || 'ไม่สามารถสร้างข้อมูลได้ในขณะนี้ กรุณาลองใหม่ด้วยคำอธิบายที่ต่างออกไป'));
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
    { name: 'gender', label: 'ตัวละครเป็นเพศใด', placeholder: 'ชาย, หญิง, ไม่ระบุ' },
    { name: 'age', label: 'อายุ', placeholder: '25 ปี, วัยกลางคน, 60 ปี' },
    { name: 'skin', label: 'สีผิว', placeholder: 'ผิวแทน, ผิวขาวเหลือง, ผิวเข้มเนียน' },
    { name: 'hair', label: 'ทรงผม', placeholder: 'ผมยาวลอนสีน้ำตาล, ผมสั้นสไตล์พังก์' },
    { name: 'outfit', label: 'ชุดที่ใส่', placeholder: 'ชุดกิโมโนร่วมสมัย, ชุดแจ็คเก็ตหนัง' },
    { name: 'pose', label: 'ท่าโพสต์', placeholder: 'ยืนกอดอก, นั่งเหม่อมองท้องฟ้า' },
    { name: 'location', label: 'สถานที่', placeholder: 'ป้ายรถเมล์ตอนฝนตก, ตลาดสดเก่ายามเช้า' },
    { name: 'angle', label: 'มุมกล้อง', placeholder: 'Low Angle (มุมต่ำ), Eye Level' },
    { name: 'lighting', label: 'ลักษณะแสง', placeholder: 'แสงเช้าโทนอบอุ่น, แสงเย็น golden hour' },
    { name: 'aspectRatio', label: 'สัดส่วนภาพ', placeholder: '16:9, 9:16, 2.35:1' },
    { name: 'shotSize', label: 'ระยะภาพ', placeholder: 'Close-up, Wide Shot, Full Body' },
    { name: 'lens', label: 'เลนส์และกล้อง', placeholder: '35mm f/1.4, Sony A7S III' },
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
                    className="w-full bg-cinematic-900 border border-gray-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cinematic-accent focus:border-transparent outline-none transition-all placeholder:text-gray-600 font-light"
                  />
                </div>
              ))}
            </div>
            
            <button
              onClick={generateCharacter}
              disabled={isLoading}
              className="w-full py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
            >
              {isLoading ? (
                <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> กำลังร่างตัวละคร...</>
              ) : (
                <>สร้าง Prompt ตัวละคร</>
              )}
            </button>
          </div>

          <div className="space-y-6">
            {!result && !isLoading && (
              <div className="h-full min-h-[400px] border-2 border-dashed border-gray-800 rounded-[32px] flex flex-col items-center justify-center p-10 text-center text-gray-600">
                 <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                 <p className="font-light">กรอกรายละเอียดด้านซ้ายแล้วกดปุ่มเพื่อดูผลลัพธ์</p>
              </div>
            )}

            {isLoading && (
               <div className="h-full min-h-[400px] bg-cinematic-800/40 rounded-[32px] border border-gray-800 p-8 flex flex-col items-center justify-center animate-pulse">
                  <div className="w-full h-4 bg-gray-700 rounded-full mb-4 max-w-[80%]"></div>
                  <div className="w-full h-4 bg-gray-700 rounded-full mb-4 max-w-[60%]"></div>
                  <div className="w-full h-4 bg-gray-700 rounded-full mb-4 max-w-[90%]"></div>
                  <p className="mt-4 text-gray-500 text-sm">AI กำลังคัดเกรดเลนส์และจัดแสงที่เหมาะสม...</p>
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
                  <label className="block text-[10px] font-black text-cinematic-accent uppercase tracking-[0.3em] mb-4">Optimized English Prompt</label>
                  <div className="p-6 bg-black/60 rounded-2xl border border-gray-700/50 font-mono text-sm text-gray-300 leading-relaxed cursor-pointer" onClick={copyPrompt}>
                    {result.prompt}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cinematic-accent/10 to-transparent p-8 rounded-[32px] border border-cinematic-accent/20">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-cinematic-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <label className="text-[10px] font-black text-white uppercase tracking-[0.3em]">AI Artistic Direction (ภาษาไทย)</label>
                  </div>
                  <p className="text-gray-300 font-light leading-relaxed italic text-sm">
                    {result.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 p-8 bg-black/40 rounded-[32px] border border-gray-800 text-center">
           <p className="text-gray-500 text-xs leading-relaxed max-w-2xl mx-auto">
             <strong>Pro Tip:</strong> หากต้องการให้ใบหน้าตัวละครเหมือนคนเดิมในทุกช็อต แนะนำให้นำ Prompt นี้ไปใช้ในโหมด Character Reference ใน <strong>Kling AI</strong> หรือ <strong>Google Nano Banana</strong> ซึ่งเรามีคอร์สสอนโดยเฉพาะ!
           </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterPrompter;
