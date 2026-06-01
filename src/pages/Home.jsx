import { Link } from 'react-router-dom'
import logo from '../assets/chee_somatics_logo.png'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <section className="split-hero">

        {/* Left — sage panel with logo */}
        <div className="split-left">
          <img src={logo} alt="Chee Somatics logo" className="split-logo" />
        </div>

        {/* Right — cream panel with text */}
        <div className="split-right">
          <p className="split-eyebrow">Licensed Independent Social Worker &nbsp;·&nbsp; Columbus, OH</p>
          <h1 className="split-name">Azalea Tang,<br />LISW</h1>
          <p className="split-tagline">
            I offer a space for you to show up exactly as you are, 
            with the aim of reconnecting you to your life force through combined wisdoms of body, mind, and spirit.
          </p>
          <div className="split-actions">
            <Link to="/about" className="split-btn-primary">About Me</Link>
            <Link to="/services" className="split-btn-secondary">Services &amp; Rates</Link>
          </div>
        </div>

      </section>
    </div>
  )
}