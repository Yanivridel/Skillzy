import { useEffect, useState } from "react"
import LessonCard from "../components/TeacherCard/teacherCard"
import { Lesson } from "@/types/lessonTypes";
import { getAllLessons } from "@/utils/lessonApi";
import { useSearchParams } from "react-router-dom";

interface ISearchParams {
  subject: string;
  title: string;
  price: number;
  isGroup: boolean | null;
}

const Lessons = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const filteredLessons = lessons.filter((lesson) => {
    const subject = searchParams.get("subject") as string;
    const title = searchParams.get("title") as string;
    const maxPrice = parseFloat(searchParams.get("price") as string);
    const isGroup = searchParams.get("isGroup") as string;
    const level = searchParams.get("level") as string;
    const day = searchParams.get("day");
    const hourParam = searchParams.get("hour");
    const hours = hourParam ? hourParam.split(",").map(Number) : null;
  
    const isSubjectMatch =
      !subject || subject === "all" || lesson.subject.toLowerCase() === subject.toLowerCase();
  
    const isTitleMatch =
      !title || lesson.title.toLowerCase().includes(title.toLowerCase());
  
    const isMaxPriceMatch = !maxPrice || lesson.price <= maxPrice;
  
    const isGroupMatch =
      !isGroup ||
      isGroup === "all" ||
      (isGroup === "solo" && lesson.membersLimit === 1) ||
      (isGroup === "group" && lesson.membersLimit > 1);
  
    const isLevelMatch =
      !level || level === "all" || lesson.level.toLowerCase() === level.toLowerCase();
  
      const lessonDate = new Date(lesson.startDate);
      const lessonDay = lessonDate.toLocaleDateString("en-US", { weekday: "long" });
      const isDayMatch = !day || day === "all" || lessonDay.toLowerCase() === day.toLowerCase();
  
    // Hour range match
    const isHourMatch =
      !hours ||
      (lessonDate.getHours() >= hours[0] &&
      lessonDate.getHours() <= hours[1]);
    
      console.log(isSubjectMatch,
        isTitleMatch,
        isMaxPriceMatch ,
        isGroupMatch ,
        isLevelMatch,
        isDayMatch,
        isHourMatch)
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

  useEffect(() => {
    getLessons();
  }, [])

  useEffect(() => {
    if(!searchParams.get("title")) searchParams.set("title", "");
    if(!searchParams.get("subject")) searchParams.set("subject", "all");
    if(!searchParams.get("price")) searchParams.set("price", "1000");
    if(!searchParams.get("isGroup")) searchParams.set("isGroup", "all");
    if(!searchParams.get("level")) searchParams.set("level", "all");
    if(!searchParams.get("day")) searchParams.set("day", "all");
    if(!searchParams.get("hour")) searchParams.set("hour", [0, 24].join(","));
    setSearchParams(searchParams);

  }, [searchParams])

  async function getLessons()  {
    const { lessons } = await getAllLessons()
    console.log(lessons);
    setLessons(lessons);
  }
  

    return (
      <div>
        {filteredLessons.map(lesson => <LessonCard lesson={lesson}/>)}
      </div>
    )
}
  
  export default Lessons