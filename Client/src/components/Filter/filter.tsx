import React, { useState } from 'react';



import { CiCloudSun } from "react-icons/ci";
import { WiHot } from "react-icons/wi";
import { WiHorizonAlt } from "react-icons/wi";
import { WiNightAltSleet } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"



export default function Filter() {
  return (
    <div className='p-2  w-[88%] h-[100vh] rounded-[25px] '>
      <div className=' '>
        <div className='border-b grid justify-center justify-items-center	p-5'>Leaderboard <Input /></div>
        <div className='grid justify-center justify-items-center border-b p-5'>Choose Subject
          <select className='p-4 rounded-[25px]  border'>
            <option value="mathematics">Mathematics</option>
            <option value="science">Science</option>
            <option value="computer-science">Computer Science</option>
            <option value="engineering">Engineering</option>
            <option value="history">History</option>
            <option value="geography">Geography</option>
            <option value="languages">Languages</option>
            <option value="literature">Literature</option>
            <option value="arts">Arts</option>
            <option value="music">Music</option>
            <option value="physical-education">Physical Education</option>
            <option value="health-wellness">Health and Wellness</option>
            <option value="business">Business</option>
            <option value="economics">Economics</option>
            <option value="finance">Finance</option>
            <option value="law">Law</option>
            <option value="political-science">Political Science</option>
            <option value="philosophy">Philosophy</option>
            <option value="psychology">Psychology</option>
            <option value="sociology">Sociology</option>
            <option value="anthropology">Anthropology</option>
            <option value="environmental-studies">Environmental Studies</option>
            <option value="religious-studies">Religious Studies</option>
            <option value="vocational-skills">Vocational Skills</option>
            <option value="technology">Technology</option>
            <option value="media-studies">Media Studies</option>
            <option value="communication">Communication</option>
            <option value="public-speaking">Public Speaking</option>
            <option value="creative-writing">Creative Writing</option>
            <option value="architecture">Architecture</option>
          </select>
        </div>
      </div>
      <div className='  p-5 '>
        <p>Times:</p>
        <div className='border-b'>
          <div className=' grid grid-cols-3 gap-1'>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ... "><CiCloudSun />9-12</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiDaySunny />12-15</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHorizonAlt />15-18</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHot />18-21</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHail />21-24</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiNightAltSleet />0-3</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiNightAltCloudy />3-6</button>
            <button className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><CiCloudSun />3-6</button>
          </div>
        </div>
        <div className='  p-5 border-b'>
          <div className='h-[50px] text-xl'>Price per lesson</div>
          <Slider className='h-[50px]  w-[250px]' defaultValue={[33]} max={100} step={1} />
        </div>
        <div className='grid justify-center justify-items-center border-b'>
          <div className='p-10'>By rating:</div>
          <div>
          <Slider className='h-[50px] w-[250px]' defaultValue={[33]} max={100} step={1} />
          </div>
        </div>
        <div className='grid justify-items-center  p-5'>
          <button className='p-3 border w-[120px] rounded-[25px] hover:bg-slate-400 ... '>Apply</button>
        </div>

      </div>

    </div>
  )
}
