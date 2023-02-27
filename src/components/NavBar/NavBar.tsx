// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      <NavLink className="links" id="logo-link" to="/">setSchedule</NavLink>
      {user ?
        <ul>
          <li>{user.name}</li>
          <li><NavLink className="links" to="/profiles">Profiles</NavLink></li>
          <li><NavLink className="links" to="/change-password">Change Password</NavLink></li>
          <li><NavLink className="links" to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink className="links" to="/login">Log In</NavLink></li>
          <li><NavLink className="links" to="/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
