import React from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineContacts } from "react-icons/ai";
import { Lesson } from '@/types/lessonTypes';
import Anonymous from './../../assets/images/anonymous-user.png';

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  lesson.startDate = new Date(lesson.startDate);

  return (
    <Link to={`/TeacherProfile/${lesson.teacher._id}`}>
      <div className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-[380px] flex flex-col">
        {/* Teacher Info Section */}
        <div className="flex mb-4 justify-between items-center h-[60%]">
          <div className="w-[60%]">
            <p className="text-3xl font-semibold">{lesson.startDate.getDate()}</p>
            <p className="text-sm text-slate-400">{lesson.startDate.toLocaleString('default', { month: 'long' })}</p>
            <div className="text-xl font-semibold">{lesson.teacher.fName} {lesson.teacher.lName}</div>
            <p className="text-sm text-slate-400">{lesson.teacher.location}</p>
          </div>
          <div className="w-[40%] flex justify-center items-center">
            <img 
              src={lesson.teacher.userImage || Anonymous} 
              alt="Teacher"
              className="h-24 w-24 object-cover rounded-full border-4 border-gray-200 shadow-md"
            />
          </div>
        </div>

        {/* Lesson Description and Details */}
        <div className="flex justify-between items-center mb-4 flex-grow">
          <div className="w-[60%]">
          {lesson.description.split(" ").slice(0, 20).join(" ")}{lesson.description.split(" ").length > 20 ? "..." : ""}
            <div className="flex items-center gap-2 text-slate-500">
              <CiClock2 className="text-xl" />
              <p>{lesson.duration} minutes</p>
            </div>
          </div>

          {/* Contact Icon */}
          <div className="w-[30%] flex justify-center">
            <div className="text-3xl text-blue-600 cursor-pointer">
              <AiOutlineContacts />
            </div>
          </div>
        </div>

        {/* Lesson Footer (optional additional info like price) */}
        <div className="border-t pt-4 text-center text-gray-500 text-sm">
          <p>{lesson.price ? `Price: ${lesson.price} ₪` : "Contact for pricing"}</p>
        </div>
      </div>
    </Link>
  );
}
