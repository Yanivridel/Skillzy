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
import { useSearchParams } from 'react-router-dom';



export default function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState<number>(50); 
  const [rating, setRating] = useState<number>(5); 

  const changeParams = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    sub: string
  ) => {
    let value: string | null = null;
  
    
    if (e.target instanceof HTMLSelectElement || e.target instanceof HTMLInputElement) {
      value = e.target.value; 
    } else if (e.target instanceof HTMLButtonElement) {
      value = e.target.getAttribute("data-value"); 
    }
  
    if (value !== null) {
      searchParams.set(sub, value);
      setSearchParams(searchParams);
    }
  };


  return (
    <div className='p-2  w-[88%] h-[100vh] rounded-[25px] '>
      <div className=' '>
        <div className='border-b grid justify-center justify-items-center	p-5'>Leaderboard <Input onChange={(e)=> changeParams(e, "title")}/></div>
        <div className='grid justify-center justify-items-center border-b p-5'>Choose Subject
          <select value={searchParams.get("subject") || "all"} onChange={(e)=> changeParams(e, "subject") } className='p-4 rounded-[25px]  border'>
            <option value="all">All subject</option>
            <option value="mathematics">Mathematics</option>
            <option value="science">Science</option>
            <option value="computer science">Computer Science</option>
            <option value="engineering">Engineering</option>
            <option value="history">History</option>
            <option value="geography">Geography</option>
            <option value="languages">Languages</option>
            <option value="literature">Literature</option>
            <option value="arts">Arts</option>
            <option value="music">Music</option>
            <option value="physical education">Physical Education</option>
            <option value="health wellness">Health and Wellness</option>
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
            <button onClick={(e)=> changeParams(e, "times")} data-value="9-12" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ... "><CiCloudSun />9-12</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="12-15" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiDaySunny />12-15</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="15-18" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHorizonAlt />15-18</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="18-21" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHot />18-21</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="21-24" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHail />21-24</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="0-3" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiNightAltSleet />0-3</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="3-6" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiNightAltCloudy />3-6</button>
            <button onClick={(e)=> changeParams(e, "times")} data-value="all" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><CiCloudSun />all hours</button>
          </div>
        </div>
        <div className='  p-5 border-b'>
        <div className='h-[50px] text-xl'>Price per lesson: <span>{price}</span></div>
        <Slider
  className='h-[50px] w-[200px]'
  defaultValue={[50]}
  max={1000}
  min={50}
  step={50}
  onValueChange={(value) => {
    setPrice(value[0]); // עדכון המחיר ב-state
    setSearchParams((prev) => {
      prev.set("price", value[0].toString());
      return prev;
    });
  }}
/>
        </div>
        <div className='grid justify-center justify-items-center border-b'>
          <div className='p-10'>By rating: <span>{rating}</span></div>
          <div>
          <Slider
  className='h-[50px] w-[250px]'
  defaultValue={[33]}
  max={5}
  step={1}
  onValueChange={(value) => {
    setRating(value[0]); // עדכון הדירוג ב-state
    setSearchParams((prev) => {
      prev.set("rating", value[0].toString());
      return prev;
    });
  }}
/>
          </div>
        </div>
        <div className='grid justify-items-center p-5 border-b'>By Date:
          <div className=''>
          <select onChange={(e) => changeParams(e, "date")}>
            <option value="ss">Sunday</option>
            <option value="mo">Monday</option>
            <option value="tu">Tuesday</option>
            <option value="we">Wednesday</option>
            <option value="th">Thursday</option>
            <option value="fr">Friday</option>
            <option value="sa">Saturday</option>
          </select>
          </div>
        </div>
        <div className='grid justify-items-center p-5 border-b'>By Level:
          <div>
          <select onChange={(e) => changeParams(e, "level")}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          </div>
        </div>
        <div className='grid justify-items-center p-5 border-b'> Group
          <div>
          <select onChange={(e) => changeParams(e, "group")}>
            <option value="Solo">All</option>
            <option value="Solo">Solo</option>
            <option value="Group">Group</option>
          </select>
          </div>
        </div>
        <div className='grid justify-items-center  p-5'>
          <button onClick={() => console.log(searchParams.toString())} className='p-3 border w-[120px] rounded-[25px] hover:bg-slate-400 ... '>Apply</button>
        </div>

      </div>

    </div>
  )
}
