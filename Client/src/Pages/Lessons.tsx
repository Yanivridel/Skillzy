import { useEffect, useState } from "react";
import LessonCard from "../components/TeacherCard/teacherCard";
import { LatLng, Lesson } from "@/types/lessonTypes";
import { getAllLessons } from "@/utils/lessonApi";
import CheckpointMap from "@/components/Map/CheckpointMap";
import Filter from "./../components/Filter/filter";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface ISearchParams {
  subject: string;
  title: string;
  price: number;
  isGroup: boolean | null;
}

const Lessons = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const userLogged = useSelector((state: RootState) => state.userLogged);
  const center = {
    lat: userLogged.isLogged ? userLogged.coordinates[0] : 32.109333,
    lng: userLogged.isLogged ? userLogged.coordinates[1] : 34.855499,
  };

  const filteredLessons = lessons.filter((lesson) => {
    const subject = searchParams.get("subject");
    const title = searchParams.get("title") as string;
    const maxPrice = parseFloat(searchParams.get("price") as string);
    const isGroup = searchParams.get("isGroup") as string;
    const level = searchParams.get("level") as string;
    const day = searchParams.get("day");
    const hourParam = searchParams.get("hour");
    const hours = hourParam ? hourParam.split("-").map(Number) : null;

    const isSubjectMatch =
      !subject ||
      subject === "all" ||
      lesson.subject.toLowerCase() === subject.toLowerCase();

    const isTitleMatch =
      !title || lesson.title.toLowerCase().includes(title.toLowerCase());

    const isMaxPriceMatch = !maxPrice || lesson.price <= maxPrice;

    const isGroupMatch =
      !isGroup ||
      isGroup === "all" ||
      (isGroup === "solo" && lesson.membersLimit === 1) ||
      (isGroup === "group" && lesson.membersLimit > 1);

    const isLevelMatch =
      !level ||
      level === "all" ||
      lesson.level.toLowerCase() === level.toLowerCase();

    const lessonDate = new Date(lesson.startDate);
    const lessonDay = lessonDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const isDayMatch =
      !day || day === "all" || lessonDay.toLowerCase() === day.toLowerCase();

    const isHourMatch =
      !hours ||
      (lessonDate.getHours() >= hours[0] && lessonDate.getHours() < hours[1]);

    return (
      isSubjectMatch &&
      isTitleMatch &&
      isMaxPriceMatch &&
      isGroupMatch &&
      isLevelMatch &&
      isDayMatch &&
      isHourMatch
    );
  });

  const markers = filteredLessons.map((lesson) => {
    return {
      lat:
        lesson.teacher?.coordinates.length > 0
          ? lesson.teacher.coordinates[0]
          : 0,
      lng:
        lesson.teacher?.coordinates.length > 0
          ? lesson.teacher.coordinates[1]
          : 0,
      info: lesson.teacher?.fName + " " + lesson.teacher?.lName,

      onClick: () => navigate(`/TeacherProfile/${lesson.teacher._id}`),
    };
  });

  useEffect(() => {
    getLessons();
  }, []);

  useEffect(() => {
    if (!searchParams.get("title")) searchParams.set("title", "");
    if (!searchParams.get("subject")) searchParams.set("subject", "all");
    if (!searchParams.get("price")) searchParams.set("price", "1000");
    if (!searchParams.get("isGroup")) searchParams.set("isGroup", "all");
    if (!searchParams.get("level")) searchParams.set("level", "all");
    if (!searchParams.get("day")) searchParams.set("day", "all");
    if (!searchParams.get("hour")) searchParams.set("hour", [0, 24].join("-"));
    setSearchParams(searchParams);
  }, [searchParams]);

  async function getLessons() {
    const { lessons } = await getAllLessons();
    setLessons(lessons);
  }

  return (
    <div className="flex flex-col w-full lg:flex-row gap-6 p-4 text-black">
      {/* Main content area */}
      <div className="flex-1 lg:w-[70%] mb-6 lg:mb-0">
        <CheckpointMap center={center} markers={markers} />
        <div className="border w-full mb-6">{/* <CheckpointMap /> */}</div>

        {/* Display lessons */}

        <div className="grid grid-cols-1  gap-6">
          {filteredLessons.length === 0 ? (
            <p>No Lessons Available... </p>
          ) : (
            filteredLessons.map((lesson, index) => (
              <LessonCard
                key={lesson._id.toString() + index}
                lesson={lesson}
                profile={false}
              />
            ))
          )}
        </div>
      </div>

      {/* Sidebar Filter section */}
      <div className="w-full lg:w-[30%] ">
        <Filter />
      </div>
    </div>
  );
};

export default Lessons;

// import { useEffect, useState } from "react"
// import LessonCard from "../components/TeacherCard/teacherCard"
// import { Lesson } from "@/types/lessonTypes";
// import { getAllLessons } from "@/utils/lessonApi";
// import CheckpointMap from "@/components/Map/CheckpointMap";
// import Filter from "@/components/Filter/filter";

// const Lessons = () => {
//   const [lessons, setLessons] = useState<Lesson[]>([]);

//   async function getLessons()  {
//     const { lessons } = await getAllLessons()
//     console.log(lessons);
//     setLessons(lessons);
//   }

//   useEffect(() => {
//     getLessons();
//   }, [])

//     return (
//       <div className="flex">
//       <div>
//         <div className="border">
//           {/* <CheckpointMap /> */}
//         </div>
//         <div className="w-[85%]">
//           {lessons.map(lesson => <LessonCard lesson={lesson}/>)}
//         </div>
//       </div>
//       <div className="fixed right-0 w-[25%] border"><Filter /></div>
//       </div>
//     )
//   }

//   export default Lessons
