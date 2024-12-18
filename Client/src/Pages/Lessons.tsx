import { useEffect, useState } from "react"
import LessonCard from "../components/TeacherCard/teacherCard"
import { Lesson } from "@/types/lessonTypes";
import { getAllLessons } from "@/utils/lessonApi";



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
      <div>
        {lessons.map(lesson => <LessonCard lesson={lesson}/>)}
      </div>
    )
  }
  
  export default Lessons