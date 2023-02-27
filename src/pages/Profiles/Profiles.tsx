// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// types
import { Profile } from '../../types/models'

interface ProfilesProps {
	profiles: Profile[]
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props
  
  if (!profiles.length) return <p>No profiles yet...</p>

  return (
    <main>
      <h1 id="profiles-title">Profile List:</h1>
      <div className='list'>
        {profiles.map((profile: Profile) =>
          <ProfileCard key={profile.id} profile={profile} />
        )}
      </div>
    </main>
  )
}

export default Profiles
