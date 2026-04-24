import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '../assets/chee_somatics_logo.svg'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav-header">
      <NavLink to="/" className="nav-logo">
        <img src={logo} alt="Chee Somatics logo" height="40" />
        Azalea Tang, LCSW
      </NavLink>
      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services, Rates &amp; Policies</NavLink>
      </nav>
    </header>
  )
}
