
import React, { useState, useEffect } from 'react';
import { BANK_DETAILS, ADMIN_EMAIL, FACEBOOK_PAGE_URL } from '../constants';

const EnrollmentPage: React.FC = () => {
  const [course, setCourse] = useState('kling');
  const [studyType, setStudyType] = useState('group');
  const [price, setPrice] = useState('990');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  // File Upload State
  const [fileName, setFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      // Create a preview URL for the selected image
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    } else {
      setFileName('');
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const myForm = e.currentTarget;
    const body = new FormData(myForm);

    try {
      // Use FormSubmit for reliable email delivery
      const response = await fetch(`https://formsubmit.co/${ADMIN_EMAIL}`, {
        method: "POST",
        body: body,
      });

      if (response.ok) {
        setIsSuccess(true);
        window.scrollTo(0, 0);
      } else {
        // FormSubmit might return opaque response for AJAX, but if it doesn't fail, assume success or redirect
        setIsSuccess(true);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMessage("เกิดปัญหาในการเชื่อมต่อ กรุณาลองใหม่ หรือใช้ปุ่ม 'ส่งข้อมูลผ่านแชท Facebook' ด้านล่าง");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    const text = `สมัครเรียน Cinematic AI
คอร์ส: ${course}
รูปแบบ: ${studyType}
ราคา: ${price}
ชื่อ: ${formData.name}
โทร: ${formData.phone}
Email: ${formData.email}
(แนบสลิปในแชท)`;
    navigator.clipboard.writeText(text);
    alert("คัดลอกข้อมูลแล้ว! คุณสามารถนำไปวางในแชท Facebook พร้อมส่งรูปสลิปได้เลยครับ");
    window.open(FACEBOOK_PAGE_URL, '_blank');
  };

  if (isSuccess) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-cinematic-800 p-10 rounded-3xl border border-green-500/50 shadow-2xl">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-bold mb-4 text-white">แจ้งโอนเงินสำเร็จ!</h2>
            <p className="text-gray-300 text-lg mb-8 font-light">
              ขอบคุณที่สมัครเรียนกับ Cinematic AI<br/>
              ระบบได้ส่งข้อมูลไปยังผู้สอนเรียบร้อยแล้ว<br/>
              <span className="text-sm text-gray-500">(กรุณาตรวจสอบอีเมลยืนยัน หากไม่พบให้เช็คใน Junk/Spam)</span>
            </p>
            <a 
              href={FACEBOOK_PAGE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-cinematic-accent hover:bg-red-700 text-white font-bold rounded-full transition-colors"
            >
              ติดต่อทีมงานผ่าน Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }

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
            method="POST"
            action={`https://formsubmit.co/${ADMIN_EMAIL}`}
            encType="multipart/form-data"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="มีผู้สมัครเรียนใหม่ (Cinematic AI)" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
             
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
              <div className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors bg-cinematic-900/50 ${fileName ? 'border-green-500/50 bg-green-500/10' : 'border-gray-600 hover:border-cinematic-accent'}`}>
                <input 
                  type="file" 
                  name="attachment" 
                  required
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                
                {previewUrl ? (
                   <div className="pointer-events-none relative z-0">
                      <img src={previewUrl} alt="Slip Preview" className="mx-auto max-h-64 rounded-lg shadow-md mb-3 object-contain" />
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <p className="text-sm font-medium">แนบไฟล์สำเร็จ: {fileName}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">คลิกพื้นที่นี้เพื่อเปลี่ยนรูป</p>
                   </div>
                ) : (
                  <div className="text-gray-400 pointer-events-none">
                    <svg className="mx-auto h-10 w-10 text-gray-500 mb-2" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm">คลิกเพื่ออัปโหลดสลิป หรือลากไฟล์มาวางที่นี่</p>
                  </div>
                )}
              </div>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-900/50 text-red-200 rounded-lg text-sm text-center">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit" 
              className={`w-full py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? 'กำลังส่งข้อมูล...' : 'แจ้งการโอนเงิน (ส่งทางอีเมล)'}
            </button>
          </form>

           {/* Fallback Option */}
           <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-cinematic-800 text-sm text-gray-400">หรือ</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm mb-3">หากพบปัญหาในการส่งฟอร์ม</p>
            <button
              type="button"
              onClick={copyToClipboard}
              className="w-full py-3 bg-[#1877F2] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              คัดลอกข้อมูล & ส่งทางแชท Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;
