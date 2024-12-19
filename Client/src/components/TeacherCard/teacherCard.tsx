import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineContacts } from "react-icons/ai";
import { Lesson } from '@/types/lessonTypes';
import Anonymous from './../../assets/images/anonymous-user.png';
import { registerLesson } from '@/utils/lessonApi';

interface LessonCardProps {
  lesson: Lesson;
  profile: boolean;
}

export default function LessonCard({ lesson, profile}: LessonCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // מצב המודאל (פתוח/סגור)
  lesson.startDate = new Date(lesson.startDate);

  // פונקציה לפתיחת המודאל
  const openModal = async () => {
    await registerLesson(lesson._id as any);
    setIsModalOpen(true);
  };

  // פונקציה לסגירת המודאל
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* כרטיס הלימוד */}
      <div className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col sm:flex-row max-w-4xl mx-auto">
        
        {/* קישור לפרופיל של המורה */}
        <Link to={`/TeacherProfile/${lesson.teacher._id}`} className="flex flex-col sm:w-2/5 mb-4 sm:mb-0 sm:mr-4">
          {/* Teacher Info Section */}
          <div className="flex justify-center sm:justify-start items-center mb-2">
            <img 
              src={lesson.teacher.userImage || Anonymous} 
              alt="Teacher"
              className="h-24 w-24 object-cover rounded-full border-4 border-gray-200 shadow-md"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl font-semibold">{lesson.startDate.getDate()}</p>
            <p className="text-sm text-slate-400">{lesson.startDate.toLocaleString('default', { month: 'long' })}</p>
            <div className="text-xl font-semibold">{lesson.teacher.fName} {lesson.teacher.lName}</div>
            <p className="text-sm text-slate-400">{lesson.teacher.location}</p>
          </div>
        </Link>

        {/* Lesson Description and Details */}
        <div className="flex flex-col sm:w-3/5">
          <p className="font-semibold text-lg mb-2">{lesson.description}</p>
          <div className="flex items-center gap-2 text-slate-500 mb-2">
            <CiClock2 className="text-xl" />
            <p>{lesson.duration} minutes</p>
          </div>

          {/* Contact Icon */}
          <div className="flex justify-start sm:justify-center mb-4">
            <div className="text-3xl text-blue-600 cursor-pointer">
              <AiOutlineContacts />
            </div>
          </div>

          {/* "Register" Button */}
          {!profile && <div className="flex justify-center mb-4">
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
              onClick={openModal}
            >
              Register for Lesson
            </button>
          </div>}

          {/* Lesson Footer (optional additional info like price) */}
          <div className="border-t pt-4 text-center text-gray-500 text-sm">
            <p>{lesson.price ? `Price: ${lesson.price} ₪` : "Contact for pricing"}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-96 shadow-lg">
            <h2 className="text-xl font-semibold text-center mb-4">Registration Successful!</h2>
            <p className="text-center text-lg">You have successfully registered for the lesson.</p>
            <div className="flex justify-center mt-4">
              <button 
                className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CiClock2 } from "react-icons/ci";
// import { AiOutlineContacts } from "react-icons/ai";
// import { Lesson } from '@/types/lessonTypes';
// import Anonymous from './../../assets/images/anonymous-user.png';

// interface LessonCardProps {
//   lesson: Lesson;
// }

// export default function LessonCard({ lesson }: LessonCardProps) {
//   lesson.startDate = new Date(lesson.startDate);

//   return (
//     <Link to={`/TeacherProfile/${lesson.teacher._id}`}>
//       <div className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col sm:flex-row max-w-4xl mx-auto">
//         {/* Teacher Info Section */}
//         <div className="flex flex-col sm:w-2/5 mb-4 sm:mb-0 sm:mr-4">
//           <div className="flex justify-center sm:justify-start items-center mb-2">
//             <img 
//               src={lesson.teacher.userImage || Anonymous} 
//               alt="Teacher"
//               className="h-24 w-24 object-cover rounded-full border-4 border-gray-200 shadow-md"
//             />
//           </div>
//           <div className="text-center sm:text-left">
//             <p className="text-3xl font-semibold">{lesson.startDate.getDate()}</p>
//             <p className="text-sm text-slate-400">{lesson.startDate.toLocaleString('default', { month: 'long' })}</p>
//             <div className="text-xl font-semibold">{lesson.teacher.fName} {lesson.teacher.lName}</div>
//             <p className="text-sm text-slate-400">{lesson.teacher.location}</p>
//           </div>
//         </div>

//         {/* Lesson Description and Details */}
//         <div className="flex flex-col sm:w-3/5">
//           <p className="font-semibold text-lg mb-2">{lesson.description}</p>
//           <div className="flex items-center gap-2 text-slate-500 mb-2">
//             <CiClock2 className="text-xl" />
//             <p>{lesson.duration} minutes</p>
//           </div>

//           {/* Contact Icon */}
//           <div className="flex justify-start sm:justify-center mb-4">
//             <div className="text-3xl text-blue-600 cursor-pointer">
//               <AiOutlineContacts />
//             </div>
//           </div>

//           {/* Lesson Footer (optional additional info like price) */}
//           <div className="border-t pt-4 text-center text-gray-500 text-sm">
//             <p>{lesson.price ? `Price: ${lesson.price} ₪` : "Contact for pricing"}</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }
