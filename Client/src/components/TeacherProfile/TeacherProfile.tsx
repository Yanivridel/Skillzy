import React from 'react'
import { FaMessage } from "react-icons/fa6";


export default function TeacherProfile() {
  return (
    <div className='border h-[100vh] w-screen'>
        <div className='border-b h-[50%]'>
            <div className='flex items-center border-b h-[25%]'>
                <div className='border w-[20%]'>logo</div>
                <div className='border w-[30%]'>search</div>
                <div className='border w-[30%]'>links links links</div>
                <div className='border w-[20%]'>profilePhoto</div>

            </div>
            <div className='flex border-b h-[75%]'>
                <div className='border w-[30%] h-[100%]'>Teacher Photo</div>
                <div className='border w-[70%] h-[100%]'>
                    <div className='border  h-[50%]'>
                        <p className='text-xl font-bold	'>Jeremy Rose</p>
                    </div>
                    <div className='border h-[50%]'>
                        <p className='flex items-center gap-[10px] border'><FaMessage /> Send Message</p>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex border-b h-[50%]'>
            <div className='border w-[35%] h-[100%]'>
                <div className='border h-[30%]'>
                    <div className=''>Spotify New York</div>
                    <button className='border bg-slate-200 p-1 rounded-[10px]'>Privacy</button>
                    <p className='text-slate-300' >120 Million Students</p>
                    <p className='text-slate-300' >New York</p>

                </div>
                <div className='border h-[40%]'>s</div>
                <div className='border h-[30%]'>s</div>
            </div>
            <div className='border w-[65%] h-[100%]'>s</div>
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
