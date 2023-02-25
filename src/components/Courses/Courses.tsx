import { Link } from 'react-router-dom'

// types
import { Course } from '../../types/models'

type CourseProps = {
  courses: Course[];
  profileId: string;
}

const Courses = (props: CourseProps): JSX.Element => {
  const { courses, profileId } = props

  return (
    < >
      {
        courses?.length ?
          courses?.map((course, idx) => (
            <div key={idx}>
              <h3>{course.subject} {course.code} | Days: {course.days} | Time: {course.time} | Credit Hours: {course.hours}</h3>
              <Link to={`/profiles/${profileId}/courses/${course.id}`} state={course}>
                <button>EDIT</button>
              </Link>
            </div>
          ))
        :
          <h3>This Profile has not set a schedule yet.</h3>
      }
    </>
  )
}

export default Courses