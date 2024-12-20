import { User } from "@/types/userTypes";
import { getReviewsByTeacher, getUserById } from "@/utils/userApi";
import { useEffect, useState } from "react";
import { FaEnvelope, FaStar, FaRegStar, FaUserAlt } from 'react-icons/fa'; // הוספנו אייקון של משתמש
import { useParams } from "react-router-dom";
import TeacherReview, { Review } from "./TeacherReview";
import anonym from './../../assets/images/anonymous-user.png'


export default function TeacherProfile() {

    const [teacher, setTeacher] = useState<User | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [rating, setRating] = useState<number>(0); // הוספנו סטייט עבור הדירוג
    const { id } = useParams();

    async function getTeacher() {
        const { user } = await getUserById(id as string);
        console.log(user);
        setTeacher(user);
    }

    async function getReviews() {
        const { reviews } = await getReviewsByTeacher(id as string);
        console.log(reviews);
        setReviews(reviews);
    }
    useEffect(() => {
        getTeacher();
        getReviews();
    }, []);
    const handleRating = (ratingValue: number) => {
        setRating(ratingValue); // עדכון הדירוג שנבחר
        console.log(`You rated this teacher: ${ratingValue} stars`); // מדפיס את הדירוג שנבחר
        // ניתן לשלוח את הדירוג למערכת או לשמור אותו כאן
    };
    return (
        <div className="thin-font bg-[var(--background)] w-full h-screen flex justify-center items-center text-black">
            {/* Teacher Profile Card */}
            <div className="border-[var(--container-bg)] border-4 p-6 rounded-lg shadow-xl w-full max-w-4xl m-auto space-y-6">
                <div className="text-center">
                    <h2 className="bubble-font text-2xl">Teacher Profile</h2>
                </div>
                {/* Teacher Info Section */}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                        {/* תמונה של המורה או תמונה חלופית */}
                        <img
                            src={teacher?.userImage || anonym} // אם אין תמונה, הצג תמונה ברירת מחדל
                            alt="Teacher"
                            className="w-full h-80 object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-2/3 space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-xl font-semibold">Name: <span className="text-base">{teacher?.fName}</span></p>
                            <p className="text-xl font-semibold">Email: <span className="text-base">{teacher?.email}</span></p>
                            <p className="text-xl font-semibold">Phone: <span className="text-base">{teacher?.phone}</span></p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <button className="flex items-center gap-2 bg-[var(--button-bg)] text-white py-2 px-4 rounded-lg hover:bg-blue-500">
                                <FaEnvelope /> Send Message
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <p className="text-xl font-semibold">Location: <span className="text-base">{teacher?.location}</span></p>
                            <div className="text-xs text-gray-400 mt-4">
                            </div>
                        </div>
                        {/* Rating Section */}
                        <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
                            <p className="text-xl font-semibold">Rate this Teacher:</p>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <div
                                        key={star}
                                        onClick={() => handleRating(star)}
                                        className="cursor-pointer"
                                    >
                                        {rating >= star ? (
                                            <FaStar className="text-yellow-500" />
                                        ) : (
                                            <FaRegStar className="text-yellow-500" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <p className="text-center mt-2">{rating} Star{rating !== 1 ? "s" : ""}</p> {/* מציג את הדירוג שנבחר */}
                        </div>
                    </div>
                </div>
                {/* Comments Section */}
                <div className="flex border-t pt-6 gap-6">
                    <div className="w-[65%] bg-slate-100 p-6 rounded-lg">
                    {teacher?.video && teacher.video.includes("youtube") ? (
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                        width="100%"
                        height="100%"
                        src={teacher.video.replace("watch?v=", "embed/")}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        ></iframe>
                    </div>
                    ) : (
                    <video width="100%" controls>
                        <source src={teacher?.video} type="video/mp4" />
                        <p>Your browser does not support the video tag.</p>
                    </video>
                    )}
                    </div>
                    {/* Reviews Section */}
                    <div className="border-t pt-6 gap-6">
                        <div>
                            {/* Render the reviews */}
                            {reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <TeacherReview key={review._id} review={review} />
                                ))
                            ) : (
                                <p>No reviews yet.</p>
                            )}
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}