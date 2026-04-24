import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero — full-bleed photo with name overlay */}
      <section className="hero">
        <div className="hero-image-wrapper">
          {/* Replace src with your actual hero image */}
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80"
            alt="Calm, peaceful therapy setting"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay">
          <h1 className="hero-name">Jane Doe, LCSW</h1>
          <p className="hero-tagline">Licensed Clinical Social Worker &nbsp;·&nbsp; Chicago, IL</p>
          <Link to="/about" className="hero-btn">Learn More</Link>
        </div>
      </section>

      {/* Intro strip */}
      <section className="home-intro">
        <p>
          I offer a warm, non-judgmental space where you can slow down, feel heard,
          and work through what's weighing on you. Therapy is a deeply personal
          journey — I'm here to walk alongside you.
        </p>
        <Link to="/services" className="intro-link">View Services &amp; Rates →</Link>
      </section>
    </div>
  )
}
