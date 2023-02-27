import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

// types
import { User, Profile } from '../../types/models'
import { CourseManagerFormData } from "../../types/forms"

// services
import * as profileService from '../../services/profileService'

// assets
import defaultPic from '../../assets/icons/profile.png'

// components
import NewCourse from "../../components/NewCourse/NewCourse"
import Courses from "../../components/Courses/Courses"

interface ProfProps {
  user: User | null;
}

type ProfileParams = {
  id: string;
}

const ProfileDetails = (props: ProfProps): JSX.Element => {
  const { user } = props
  // A profile can be accessed by using the useLocation() or the useEffect. I left both in just to show I know how to show a data object through useLocation or a show service function.
  const location = useLocation()
  const profile = location.state
  const [showProfile, setShowProfile] = useState<Profile>(profile)
  const { id } = useParams() as ProfileParams

  useEffect((): void => {
    const fetchProfile = async (): Promise<void> => {
      try {
        const data: Profile = await profileService.showProfile(id)
        setShowProfile(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfile()
  }, [id])
  
  const handleAddCourse = async (courseData: CourseManagerFormData): Promise<void> => {
    try {
      const newCourse = await profileService.addCourse(id, courseData)
      setShowProfile({ ...showProfile as Profile, courses: [...showProfile.courses, newCourse] })
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  const profileName = profile?.name ? profile?.name : showProfile?.name
  const profilePic = profile?.photo ? profile?.photo : showProfile?.photo ? showProfile?.photo : defaultPic

  return (
    <div id="prof-details">
      <img src={profilePic} alt={`${profileName}'s avatar`} />
      <h1>{profileName}</h1>
      <h2>Schedule:</h2>
      { user?.id.toString() === id && <NewCourse handleAddCourse={handleAddCourse} /> }
      <Courses courses={showProfile?.courses} profileId={id} user={user} />
    </div>
  )
}

export default ProfileDetails