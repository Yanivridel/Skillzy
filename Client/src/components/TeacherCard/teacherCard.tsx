import React from 'react'
import { Link } from 'react-router-dom';
import personPhoto from '../../assets/pexel.jpg'
import { CiClock2 } from "react-icons/ci";
import { AiOutlineContacts } from "react-icons/ai";
import { Lesson } from '@/types/lessonTypes';
import Anonymous from './../../assets/images/anonymous-user.png'

interface LessonCardProps {
  lesson : Lesson;
}

export default function LessonCard({ lesson } : LessonCardProps) {
  lesson.startDate = new Date(lesson.startDate);


  return (
      <Link to="/TeacherProfile/:id"><div className=' cursor-[pointer] border-2 h-72 w-full rounded-2xl p-[10px]'>
        <div className=' border-b-2 flex h-[70%]  '>
          <div className='grid w-[50%] '>
            <div className=' '>
              <p className='font-semibold	text-2xl'>{lesson.startDate.getDay()}</p>
              <p className='text-sm text-slate-400'>{lesson.startDate.getMonth()}</p>
            </div>
            <div className='font-semibold	 text-2xl '>{lesson.teacher.fName + " " + lesson.teacher.lName}</div>
            <div className='text-sm text-slate-400 '>{lesson.teacher.location}</div>
          </div>
          <div className='w-[50%] '>
            <div className=' h-[100%]'>
              <img src={lesson.teacher.userImage ? lesson.teacher.userImage : Anonymous} alt="" className=' h-[80%] rounded-[100px]'/>
            </div>
          </div>
        </div>
        <div className='flex items-center	 h-[30%]  '>
          <div className='w-[50%] ' >
            <p className='font-semibold'>{lesson.description}</p>
            <div className='flex items-center gap-1.5	'>
              <p className='text-slate-400'><CiClock2 /></p>
              <p className='text-slate-400'>{lesson.duration}</p>
            </div>
          </div>
          <div className='flex justify-center w-[50%] '>
            <div className='text-[35px] cursor-[pointer]'><AiOutlineContacts /></div>
          </div>
        </div>
    </div>
    </Link>
  )
}
