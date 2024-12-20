import React, { useState } from 'react';
import { CiCloudSun } from "react-icons/ci";
import { WiHot } from "react-icons/wi";
import { WiHorizonAlt } from "react-icons/wi";
import { WiNightAltSleet } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiHail } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useSearchParams } from 'react-router-dom';

export default function Filter() {
  const [isFilterVisible, setIsFilterVisible] = useState(true); 
  const [searchParams, setSearchParams] = useSearchParams();
  const [rating, setRating] = useState<number>(5); 
  const [price, setPrice] = useState<number>(1000);

  const toggleFilterVisibility = () => setIsFilterVisible(!isFilterVisible);

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

  function handleResetParams() {
    searchParams.set("title", "");
    searchParams.set("subject", "all");
    searchParams.set("price", "1000");
    searchParams.set("isGroup", "all");
    searchParams.set("level", "all");
    searchParams.set("day", "all");
    searchParams.set("hour", [0, 24].join("-"));
    setSearchParams(searchParams);
  }

  return (
    <div className="relative text-black">
      {/* כפתור הפילטר עבור מכשירים ניידים */}
      <button
        className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded-full z-50 text-sm md:hidden"
        onClick={toggleFilterVisibility}
      >
        {isFilterVisible ? 'Hide' : 'Show'} Filter
      </button>

      {/* הפילטר עבור מחשבים */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-[100vh] bg-white shadow-lg overflow-y-auto p-4 rounded-lg transition-all z-40 md:block ${isFilterVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div>
        <div className='border-b grid justify-center justify-items-center	p-5'>Leaderboard 
          <Input value={searchParams.get("title") || ""} onChange={(e)=> changeParams(e, "title")}/>
        </div>
        <div className='grid justify-center justify-items-center border-b p-5'>Choose Subject
          <select value={searchParams.get("subject")?.toLowerCase() || "all"} onChange={(e)=> changeParams(e, "subject") } className='p-4 rounded-[25px]  border'>
            <option value="all">All subject</option>
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
        <div className='border-b pb-5'>
          <div className=' grid grid-cols-3 gap-1 w-[225px] h-[100%]'>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="9-12" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ... "><CiCloudSun />9-12</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="12-15" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiDaySunny />12-15</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="15-18" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHorizonAlt />15-18</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="18-21" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHot />18-21</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="21-24" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiHail />21-24</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="0-3" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiNightAltSleet />0-3</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="3-6" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ..."><WiNightAltCloudy />3-6</button>
            <button onClick={(e)=> changeParams(e, "hour")} data-value="0-24" className="grid align-center justify-items-center content-center		 border  rounded p-3 h-[50px] hover:bg-slate-400 ...">all hours</button>
          </div>
        </div>
        <div className=' p-5 border-b'>
        <div className='h-[50px] text-xl'>Price per lesson: <span>{price}</span></div>
        <Slider
        className='h-[50px] w-[200px]'
        defaultValue={[1000]}
        max={1000}
        min={50}
        step={50}
        onValueChange={(value) => {
          setPrice(value[0]);
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
          <select onChange={(e) => changeParams(e, "day")}>
            <option value="all">All</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
          </div>
        </div>
        <div className='grid justify-items-center p-5 border-b'>By Level:
          <div>
          <select onChange={(e) => changeParams(e, "level")}>
            <option value="all">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
          </div>
        </div>
        <div className='grid justify-items-center p-5 border-b'> Group
          <div>
          <select onChange={(e) => changeParams(e, "isGroup")}>
            <option value="Solo">All</option>
            <option value="Solo">Solo</option>
            <option value="Group">Group</option>
          </select>
          </div>
        </div>
        <div className='grid justify-items-center  p-5'>
          <button onClick={() => handleResetParams} className='p-3 border w-[120px] rounded-[25px] hover:bg-slate-400 ... '>Reset Filters</button>
        </div>
      </div>
    </div>
    </div>
  );

}
