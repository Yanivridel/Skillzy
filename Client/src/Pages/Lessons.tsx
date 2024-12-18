import { useEffect, useState } from "react"
import LessonCard from "../components/TeacherCard/teacherCard"
import { Lesson } from "@/types/lessonTypes";
import { getAllLessons } from "@/utils/lessonApi";
import CheckpointMap from "@/components/Map/CheckpointMap";
import Filter from "@/components/Filter/filter";


const Lessons = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  async function getLessons()  {
    const { lessons } = await getAllLessons()
    console.log(lessons);
    setLessons(lessons);
  }

  useEffect(() => {
    getLessons();
  }, [])

    return (
      <div className="flex">
      <div>
        <div className="border w-[85%] h-[5%]">
          {/* <CheckpointMap /> */}
        </div>
        <div className="w-[85%]">
          {lessons.map(lesson => <LessonCard lesson={lesson}/>)}
        </div>
      </div>
      <div className="fixed right-0 w-[25%] border overflow-auto	"><Filter /></div>
      </div>
    )
  }
  
  export default Lessons