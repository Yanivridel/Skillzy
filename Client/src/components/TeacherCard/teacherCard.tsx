import React from 'react'
import { Link } from 'react-router-dom';
import personPhoto from '../../assets/pexel.jpg'
import { CiClock2 } from "react-icons/ci";
import { AiOutlineContacts } from "react-icons/ai";
import TeacherProfile from '../TeacherProfile/teacherProfile';

export default function TeacherCard() {
  return (
      <Link to="/TeacherProfile/:id"><div className=' cursor-[pointer] border-2 h-72 w-80 rounded-2xl p-[10px]'>
        <div className=' border-b-2 flex h-[70%]  '>
          <div className='grid w-[50%] '>
            <div className=' '>
              <p className='font-semibold	text-2xl'>19</p>
              <p className='text-sm text-slate-400'>Mai</p>
            </div>
            <div className='font-semibold	 text-2xl '>Michael Cohen</div>
            <div className='text-sm text-slate-400 '>CEO</div>
          </div>
          <div className='w-[50%] '>
            <div className=' h-[100%]'>
              <img src={personPhoto} alt="" className=' h-[80%] rounded-[100px]'/>
            </div>
          </div>
        </div>
        <div className='flex items-center	 h-[30%]  '>
          <div className='w-[50%] ' >
            <p className='font-semibold'>Meet the swang</p>
            <div className='flex items-center gap-1.5	'>
              <p className='text-slate-400'><CiClock2 /></p>
              <p className='text-slate-400'>48 min</p>
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
