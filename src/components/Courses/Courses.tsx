// types
import { Course } from '../../types/models'

type CourseProps = {
  courses: Course[]
}

const Courses = (props: CourseProps): JSX.Element => {
  const { courses } = props

  return (
    < >
      {
        courses?.length ?
          courses?.map((course, idx) => (
            <div key={idx}>
              <h3>{course.subject} {course.code} | Days: {course.days} | Time: {course.time} | Credit Hours: {course.hours}</h3>
            </div>
          ))
        :
          <h3>This Profile has not set a schedule yet.</h3>
      }
    </>
  )
}

export default Courses