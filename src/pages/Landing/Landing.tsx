// stylesheets
import styles from './Landing.module.css'
import logo from '../../assets/icons/logo.png'

// types
import { User } from '../../types/models'

// services
import * as authService from '../../services/authService'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = ({ user, handleLogout }: LandingProps): JSX.Element => {
  const handleDeleteAccount = async(): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <h1>Welcome, {user ? user.name : 'friend'}</h1>
      <img src={logo} alt="" />
      { user && 
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing
