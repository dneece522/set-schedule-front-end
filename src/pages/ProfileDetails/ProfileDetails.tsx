import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

// types
import { User, Profile } from '../../types/models'

// services
import * as profileService from '../../services/profileService'

// assets
import defaultPic from '../../assets/icons/profile.png'

interface ProfDetails {
  user: User | null;
}

type ProfileParams = {
  id: string;
}

const ProfileDetails = (props: ProfDetails): JSX.Element => {
  const { user } = props
  // A profile can be accessed by using the useLocation() or the useEffect. I left both in just to show I know how to show a data object either way.
  const location = useLocation()
  const profile = location.state
  const [showProfile, setShowProfile] = useState<Profile>()
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

  const profileName = profile?.name ? profile?.name : showProfile?.name
  const profilePic = profile?.photo ? profile?.photo : showProfile?.photo ? showProfile?.photo : defaultPic

  return (
    <div className="nameh1">
      <img src={profilePic} alt={`${profileName}'s avatar`} />
      <h1>{profileName}</h1>
    </div>
  )
}

export default ProfileDetails