import React from 'react';
import { COURSES_DATA, ENROLLMENT_STEPS, FACEBOOK_PAGE_URL } from '../constants';
import SEO from './SEO';

interface CoursesPageProps {
  onNavigate: (pageId: string) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-cinematic-900 text-white animate-fade-in">
      <SEO 
        title="คอร์สเรียน AI Filmmaking | Cinematic AI"
        description="เรียนรู้การสร้างภาพยนตร์ด้วย Generative AI ทั้ง Kling, Sora2, Nano Banana สมัครเรียนวันนี้เพื่อยกระดับผลงานของคุณสู่ระดับมืออาชีพ"
      />
      
      {/* Header Section */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
          คอร์สเรียนและวิธีสมัครเรียน
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          ปลดล็อคศักยภาพการสร้างสรรค์ของคุณสู่ระดับมืออาชีพ เรียนรู้การใช้เครื่องมือ AI ที่ล้ำสมัยที่สุดในวงการเพื่อสร้างสรรค์ผลงานภาพยนตร์และวิดีโอที่น่าทึ่ง ลดต้นทุนและเวลา แต่เพิ่มมูลค่าให้ธุรกิจและผลงานของคุณอย่างก้าวกระโดด
        </p>
      </div>

      <div className="container mx-auto px-6 space-y-20 max-w-5xl">
        {COURSES_DATA.map((course) => (
          <div key={course.id} className="flex flex-col gap-8 bg-cinematic-800/50 p-6 md:p-10 rounded-3xl border border-gray-800 hover:border-cinematic-accent/30 transition-all duration-300">
            
            {/* Course Image */}
            <div className="w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-auto object-contain md:object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Course Content */}
            <div className="w-full flex flex-col">
              <h2 className="text-3xl font-display font-bold mb-4 text-cinematic-accent">{course.title}</h2>
              <p className="text-gray-300 mb-8 font-light leading-relaxed text-lg">{course.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white border-b border-gray-700 pb-2 inline-block">เนื้อหาบทเรียน</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.syllabus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm md:text-base font-light">
                      <svg className="w-5 h-5 text-cinematic-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {course.bonus && (
                  <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 rounded-lg">
                    <p className="text-red-200 font-medium text-sm">{course.bonus}</p>
                  </div>
                )}
              </div>

              {/* Pricing & Action Section */}
              <div className="bg-black/40 rounded-2xl p-6 border border-gray-800 mt-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  ตัวเลือกราคา (Pricing)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {course.pricing.map((priceOption, pIndex) => (
                    <div key={pIndex} className="bg-cinematic-900/80 p-4 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                      <h4 className="font-semibold text-gray-200 text-sm mb-1">{priceOption.title}</h4>
                      {priceOption.description && (
                        <p className="text-xs text-gray-500 mb-2">{priceOption.description}</p>
                      )}
                      <div className="flex items-end gap-2 mt-auto">
                        <span className="text-lg font-bold text-cinematic-accent">{priceOption.price}</span>
                        {priceOption.originalPrice && (
                          <span className="text-xs text-gray-500 line-through mb-1">{priceOption.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('enroll')}
                  className="w-full block text-center py-4 bg-cinematic-accent hover:bg-red-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-900/50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  สมัครเรียน
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enrollment Section */}
      <div id="enroll-section" className="container mx-auto px-6 mt-20">
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-gray-800 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cinematic-accent to-transparent opacity-50"></div>
          
          <h2 className="text-3xl font-display font-bold mb-8">ขั้นตอนการสมัครและชำระเงิน</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 text-left md:text-center">
             {ENROLLMENT_STEPS.map((step, idx) => (
               <div key={idx} className="relative">
                 <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 text-6xl font-bold text-gray-800/50 -z-10">{idx + 1}</div>
                 <div className="md:hidden inline-block bg-cinematic-accent w-6 h-6 rounded-full text-center text-sm font-bold leading-6 mr-2 mb-2">{idx + 1}</div>
                 <span className="text-gray-300 font-light">{step}</span>
               </div>
             ))}
          </div>

          <div className="bg-cinematic-accent/10 border border-cinematic-accent/30 rounded-xl p-6 mb-10 inline-block">
             <h3 className="text-cinematic-accent font-bold text-xl mb-1">โปรโมชั่นพิเศษ!</h3>
             <p className="text-white">สำหรับคอร์ส Generative Kling (Online Group)</p>
             <div className="text-4xl font-bold text-white my-2">990 บาท <span className="text-base font-normal text-gray-400 line-through">1,590 บาท</span></div>
             <p className="text-sm text-red-300">*** สำหรับ 100 ท่านแรกเท่านั้น ***</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('enroll')}
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              สมัครเรียน
            </button>
            <a 
              href={FACEBOOK_PAGE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cinematic-accent text-white font-bold rounded-full hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              สมัครตรงผ่านแชทเพจ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;