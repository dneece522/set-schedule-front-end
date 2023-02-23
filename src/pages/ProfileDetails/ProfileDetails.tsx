import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// types
import { User, Profile } from '../../types/models'

// services
import * as profileService from '../../services/profileService'

interface ProfileDetails {
  user: User | null;
}

type ProfileParams = {
  id: string;
}

const ProfileDetails = (props: ProfileDetails): JSX.Element => {
  const { user } = props
  const { id } = useParams() as ProfileParams
  const [profile, setProfile] = useState<Profile>()

  useEffect((): void => {
    const fetchProfile = async (): Promise<void> => {
      try {
        const data: Profile = await profileService.showProfile(id)
        setProfile(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProfile()
  }, [id])

  return (
    < >
      <h1>Profile Details</h1>
    </>
  )
}

export default ProfileDetails