import { Link } from 'react-router-dom'

function Header({ children }) {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/login/42">Login</Link>
      <div className="mars-banner">{children}</div>
    </nav>
  )
}

export default Header
