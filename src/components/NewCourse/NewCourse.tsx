// npm modules
import { useState } from "react"

// form type
import { CourseManagerFormData } from "../../types/forms"

type NewCourseProps = {
  handleAddCourse: (courseData: CourseManagerFormData) => void;
}

const NewCourse = (props: NewCourseProps): JSX.Element => {
  const [form, setForm] = useState({
    subject: '',
    code: 101,
    days: 'M, W, F',
    time: '8:00 - 9:00',
    hours: '3'
  })

  const handleChange = ( evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ): void => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    props.handleAddCourse(form)
    setForm({
      subject: '',
      code: 101, 
      days: 'M, W, F',
      time: '8:00 - 9:00',
      hours: '3'
    })
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div id="form">
        <div>
          <label htmlFor="subject">Subject: </label>
          <input
            required
            type="text"
            name="subject"
            id="subject-input"
            value={form.subject}
            placeholder="Ex: MATH"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="code">Code (101-499): </label>
          <input 
            required
            type="number"
            name="code"
            id="code-input"
            value={form.code}
            placeholder="Ex: 101"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="days">Days: </label>
          <select 
            required 
            name="days" 
            id="days-select"
            value={form.days}
            onChange={handleChange}
          >
            <option value="M, W, F">M, W, F</option>
            <option value="T, Th">T, Th</option>
          </select>
        </div>

        <div>
          <label htmlFor="time">Time: </label>
          <select 
            required 
            name="time" 
            id="time-select"
            value={form.time}
            onChange={handleChange}
          >
            <option value="8:00 - 9:00">8:00 - 9:00</option>
            <option value="9:20 - 10:20">9:20 - 10:20</option>
            <option value="10:40 - 11:40">10:40 - 11:40</option>
            <option value="12:00 - 1:00">12:00 - 1:00</option>
            <option value="1:20 - 2:20">1:20 - 2:20</option>
            <option value="2:40 - 3:40">2:40 - 3:40</option>
            <option value="4:00 - 5:00">4:00 - 5:00</option>
          </select>
        </div>

        <div>
          <label htmlFor="hours">Credit Hours: </label>
          <select 
            required 
            name="hours" 
            id="hours-select"
            value={form.hours}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <button type="submit">Add Course</button>
    </form>
  )
}

export default NewCourse