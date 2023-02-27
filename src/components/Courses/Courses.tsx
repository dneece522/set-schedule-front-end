import { Link } from 'react-router-dom'

// types
import { Course, User } from '../../types/models'

type CourseProps = {
  courses: Course[];
  profileId: string;
  user: User | null;
}

const Courses = (props: CourseProps): JSX.Element => {
  const { user, courses, profileId } = props

  return (
    <div id="course-list">
      {
        courses?.length ?
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Days</th>
                <th>Time</th>
                <th>Credit Hours</th>
                { user?.id.toString() === profileId && <th>Edit</th> }
              </tr>
            </thead>
            <tbody>
              {courses?.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.subject} {course.code}</td>
                  <td>{course.days}</td>
                  <td>{course.time}</td>
                  <td>{course.hours}</td>
                  <td>
                    { user?.id.toString() === profileId &&
                      <Link to={`/profiles/${profileId}/courses/${course.id}`} state={course}>
                        <button>EDIT</button>
                      </Link>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        :
          <h3>This Profile has not set a schedule yet.</h3>
      }
    </div>
  )
}

export default Courses