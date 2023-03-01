import { Link } from 'react-router-dom'

function Header({ children }) {
  return (
    <nav>
      <div className="mars-banner">{children}</div>
      <Link to="/">Accueil</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
}

export default Header
