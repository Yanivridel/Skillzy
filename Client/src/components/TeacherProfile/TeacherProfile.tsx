import { getUserById } from "@/utils/userApi";
import { useEffect, useState } from "react";
import { FaMessage } from "react-icons/fa6";


export default function TeacherProfile() {
    
    useEffect(() => {
    })

  return (
    <div className='border h-[130vh] w-screen'>
        <div className='border-b h-[50%]'>
            <div className='flex items-center border-b h-[15%]'>
                <div className='border w-[20%]'>logo</div>
                <div className='border w-[30%]'>search</div>
                <div className='border w-[30%]'>links links links</div>
                <div className='border w-[20%]'>profilePhoto</div>
            </div>
            <div className='flex border-b h-[75%]'>
                <div className='border w-[30%] h-[100%]'>Teacher Photo</div>
                <div className='border w-[70%] h-[100%]'>
                    <div className='border  h-[50%]'>
                        <div className='border'>
                            <p className='text-xl font-bold'>Name:  <span className='text-base	'>Yaniv </span></p>
                            <p className='text-xl font-bold'>Email: <span className='text-base	'>YanivRidel123@gmail.com</span></p>
                            <p className='text-xl font-bold'>Phone: <span className='text-base	'>0543232323</span></p>
                        </div>
                        <div>
                        
                        </div>
                    </div>
                    <div className='border h-[50%]'>
                        <p className='flex items-center gap-[10px] border text-sm'><FaMessage /> Send Message</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex border-b h-[50%]'>
            <div className='border w-[35%] h-[100%]'>
                <div className='border h-[20%]'>
                    <div className=''>Spotify New York</div>
                    <button className='border bg-slate-200 p-1 rounded-[10px]'>Privacy</button>
                    <p className='text-slate-200 text-xs' >120 Million Students</p>
                    <p className='text-slate-200 text-xs' >New York</p>
                </div>
                <div className='border h-[80%]'>
                    <div className="border-b flex justify-around items-center">
                        <div className="">logo</div>
                        <input placeholder="Add Comment"></input>
                        <button className="p-2 w-[20%] rounded-full bg-slate-200	">Post</button>
                    </div>
                    <div className="border h-[85%]">
                        <div className="border flex">
                            <div className="border rounded-full p-4">logo</div>
                            <div className="grid border w-[70%]  items-center">
                                <span>Matt Dible</span>
                                <span className="text-slate-200 text-xs">One Minute ago</span>
                                <span className="w-[70%]">The Comments sdsdsdsdsdd</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='border w-[65%] h-[100%]'>Video</div>
        </div>
    </div>

  )
}




















// import React, { useState } from 'react';
// import ReactStars from 'react-rating-stars-component';

// const StarRating = ({ rating, onRatingChange }: { rating: number, onRatingChange: (rating: number) => void }) => {
//   return (
//     <div>
//       <ReactStars
//         count={5} // מספר הכוכבים המקסימלי (5 כוכבים כאן)
//         value={rating} // הדירוג שהמשתמש בחר
//         size={24} // גודל הכוכבים
//         activeColor="#ffd700" // צבע הכוכבים המלאים
//         isHalf={true} // אם אתה רוצה לאפשר דירוג חצי-כוכב
//         onChange={onRatingChange} // שליחה של הדירוג החדש כשמשתנה
//       />
//         <p>Selected Rating: {rating} stars</p> {/* הצגת הדירוג שנבחר */}
//     </div>
//   );
// };

// const TeacherProfile = () => {
//   const [rating, setRating] = useState(0); // שמירה על הדירוג שנבחר

//   const handleRatingChange = (newRating: number) => {
//     setRating(newRating); // עדכון הערך שנבחר
//     console.log('New Rating:', newRating); // אפשר לשלוח את הדירוג לאנשהו
//     // כאן אפשר לשלוח את הדירוג לפונקציה אחרת או לשרת
//   };

//   return (
//     <div className="border h-[100vh] w-screen">
//       <div className="border-b h-[15%]">
//         <h2>Teacher Profile</h2>
//         <StarRating rating={rating} onRatingChange={handleRatingChange} />
//       </div>
//       <div className="border-b h-[65%]"></div>
//       <div className="border-t h-[15%]">
//       </div>
//     </div>
//   );
// };

// export default TeacherProfile;
