import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router"

// services
import * as profileService from '../../services/profileService'

type ProfileParams = {
  profileId: string;
  courseId: string;
}

const EditCourse = (): JSX.Element => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { profileId, courseId } = useParams() as ProfileParams
  const [form, setForm] = useState(state)

  const handleChange = ( evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ): void => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    profileService.updateCourse(profileId, courseId, form)
    navigate(`/profiles/${profileId}`)
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Edit Course Info:</h1>
      <label htmlFor="subject">Subject:</label>
      <input
        required
        type="text"
        name="subject"
        id="subject-input"
        value={form.subject}
        placeholder="Ex: MATH"
        onChange={handleChange}
      />

      <label htmlFor="code">Code (101-499):</label>
      <input 
        required
        type="number"
        name="code"
        id="code-input"
        value={form.code}
        placeholder="Ex: 101"
        onChange={handleChange}
      />

      <label htmlFor="days">Days:</label>
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

      <label htmlFor="time">Time:</label>
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

      <label htmlFor="hours">Hours:</label>
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
      <button type="submit">Add Course</button>
    </form>
  )
}

export default EditCourse