import React, { useState, useEffect } from 'react';
import { BANK_DETAILS } from '../constants';

const EnrollmentPage: React.FC = () => {
  const [course, setCourse] = useState('kling');
  const [studyType, setStudyType] = useState('group');
  const [price, setPrice] = useState('990');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Pricing Logic
  useEffect(() => {
    if (course === 'horror') {
      setStudyType('private'); // Master of Horror only has private option
      setPrice('3,000');
    } else if (course === 'kling') {
      if (studyType === 'group') {
        setPrice('990');
      } else {
        setPrice('3,000');
      }
    }
  }, [course, studyType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            สมัครเรียนกับ Cinematic AI
          </h1>
          <p className="text-gray-400 font-light">กรอกข้อมูลเพื่อลงทะเบียนเรียน</p>
        </div>

        <div className="bg-cinematic-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
          <form 
            name="enrollment" 
            method="POST" 
            data-netlify="true"
            encType="multipart/form-data"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="enrollment" />
            
            {/* Course Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">คอร์สที่ต้องการสมัคร</label>
              <select 
                name="course" 
                value={course} 
                onChange={(e) => setCourse(e.target.value)}
                className="w-full bg-cinematic-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cinematic-accent focus:border-transparent outline-none transition-all"
              >
                <option value="kling">Generative Kling</option>
                <option value="horror">Master of Horror</option>
              </select>
            </div>

            {/* Study Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">รูปแบบการเรียนที่ต้องการ</label>
              <select 
                name="studyType" 
                value={studyType}
                onChange={(e) => setStudyType(e.target.value)}
                disabled={course === 'horror'}
                className={`w-full bg-cinematic-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cinematic-accent focus:border-transparent outline-none transition-all ${course === 'horror' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {course === 'kling' && <option value="group">Online Group (กลุ่มปิด Facebook)</option>}
                <option value="private">Online Live 1:1 (Google Meet)</option>
              </select>
              {course === 'horror' && <p className="text-xs text-yellow-500 mt-1">* คอร์สนี้มีเฉพาะรูปแบบสอนสด 1:1 เท่านั้น</p>}
            </div>

            {/* Price Display */}
            <div className="bg-black/40 p-4 rounded-lg border border-gray-700 flex justify-between items-center">
              <span className="text-gray-300">ราคาคอร์ส</span>
              <span className="text-2xl font-bold text-cinematic-accent">{price} บาท</span>
            </div>
            <input type="hidden" name="final_price" value={price} />

            {/* Personal Info */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">ชื่อ - นามสกุล (ภาษาไทย)</label>
              <input 
                type="text" 
                name="name" 
                required
                placeholder="กรอกชื่อและนามสกุลจริง"
                className="w-full bg-cinematic-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cinematic-accent outline-none"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">อีเมล (Email)</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  placeholder="email@example.com"
                  className="w-full bg-cinematic-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cinematic-accent outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
               <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">เบอร์โทรศัพท์</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  placeholder="08x-xxx-xxxx"
                  className="w-full bg-cinematic-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cinematic-accent outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-cinematic-accent/10 border border-cinematic-accent/30 p-6 rounded-xl space-y-3">
              <h3 className="font-semibold text-cinematic-accent mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                ช่องทางการชำระเงิน
              </h3>
              <div className="space-y-1 text-sm md:text-base">
                <p><span className="text-gray-400">ธนาคาร:</span> {BANK_DETAILS.bankName}</p>
                <p><span className="text-gray-400">ชื่อบัญชี:</span> <span className="font-medium text-white">{BANK_DETAILS.accountName}</span></p>
                <p className="flex items-center gap-2">
                  <span className="text-gray-400">เลขบัญชี:</span> 
                  <span className="font-mono text-xl font-bold text-white tracking-wider">{BANK_DETAILS.accountNumber}</span>
                </p>
              </div>
            </div>

            {/* Slip Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">แนบสลิปการโอนเงิน</label>
              <div className="relative border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-cinematic-accent transition-colors bg-cinematic-900/50">
                <input 
                  type="file" 
                  name="slip" 
                  required
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-gray-400 pointer-events-none">
                  <svg className="mx-auto h-10 w-10 text-gray-500 mb-2" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm">คลิกเพื่ออัปโหลดสลิป หรือลากไฟล์มาวางที่นี่</p>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              แจ้งการโอนเงิน
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">
              *เมื่อกดแจ้งการโอนเงิน ระบบจะบันทึกข้อมูลและแจ้งเตือนไปยังทีมงานทันที
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;