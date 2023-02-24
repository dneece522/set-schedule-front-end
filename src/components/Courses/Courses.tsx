// types
import { Course } from '../../types/models'

type CourseProps = {
  courses: Course[]
}

const Courses = (props: CourseProps): JSX.Element => {
  const { courses } = props

  return (
    < >
      {courses?.map((course) => (
        <div>
          <h3>{course.subject} {course.code} | Days: {course.days} | Time: {course.time} | Credit Hours: {course.hours}</h3>
        </div>
      ))}
    </>
  )
}

export default Courses