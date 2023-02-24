import { FormEvent, useState } from "react"

import { CourseManagerFormData } from "../../types/forms"

type NewCourseProps = {
  handleAddCourse: (courseData: CourseManagerFormData) => void;
}

const NewCourse = (props: NewCourseProps): JSX.Element => {
  const [form, setForm] = useState({
    subject: '',
    code: 1,
    days: 'M, W, F',
    time: '8:00 - 9:00',
    hours: '3'
  })

  const handleChange = ( evt: KeyboardEvent ): void => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: FormEvent): void => {
    evt.preventDefault()
    props.handleAddCourse(form)
    setForm({
      subject: '',
      code: 1,
      days: 'M, W, F',
      time: '8:00 - 9:00',
      hours: '3'
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.subject}
        placeholder="Add a Comment"
        onChange={handleChange}
      /> */}
      <button type="submit">Add Course</button>
    </form>
  )
}

export default NewCourse