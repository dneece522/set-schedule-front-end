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
    <main className='list'>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile} />
      )}
    </main>
  )
}

export default Profiles
