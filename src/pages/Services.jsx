import './Services.css'
import naturePhoto from '../assets/nature.jpg'

export default function Services() {
  return (
    <div className="services">
      <section className="page-hero">
        <img
          src={naturePhoto}
          alt="Calm therapy room"
          className="page-hero-image"
        />
      </section>

      <section className="services-content">
        <h1 className="page-title">Services &amp; Rates</h1>

        {/* Services */}
        <div className="services-section">
          <h2 className="section-heading">Services</h2>

          <div className="service-item">
            <h3>Individual Therapy — 50 minutes</h3>
            <p>
              A dedicated hour focused entirely on you. Together we'll work through
              whatever you're carrying — whether that's anxiety, grief, relationship
              struggles, life transitions, or simply a sense that something isn't
              quite right. Sessions are collaborative, compassionate, and tailored
              to your needs.
            </p>
          </div>

          <div className="service-item">
            <h3>Initial Consultation — 15 minutes, free</h3>
            <p>
              Not sure if therapy is right for you, or wondering if we're a good
              fit? I offer a free 15-minute phone or video consultation so you can
              ask questions and get a sense of how I work before committing.
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        {/* Rates */}
        <div className="services-section">
          <h2 className="section-heading">Rates</h2>
          <div className="rates-grid">
            <div className="rate-row">
              <span>Individual session (50 min)</span>
              <span>$150</span>
            </div>
            <div className="rate-row">
              <span>Initial consultation (15 min)</span>
              <span>Free</span>
            </div>
          </div>
          <p className="rates-note">
            I offer sliding scale fees based on client need and caseload availability.
          </p>
        </div>

        <hr className="section-divider" />

        {/* Policies */}
        <div className="services-section">
          <h2 className="section-heading">Additional Information</h2>
          <ul className="policy-list">
            <li>
              <strong>Insurance:</strong> I am in-network for Anthem, United Health Care, Aetna, and Medical Mutual.
            </li>
            <li>
              <strong>Telehealth:</strong> Sessions are available via secure video
              for Ohio residents. I offer telehealth services on Mondays, Tuesdays, and Thursdays.
            </li>
            <li>
              <strong>In-person sessions:</strong> A limited number of in-person sessions are available in Westerville,
              Ohio, on Wednesdays.
            </li>
            <li>
              <strong>Cancellations:</strong> Please cancel or reschedule at least
              24 hours in advance. Late cancellations or no-shows will be charged
              the full session fee.
            </li>
          </ul>
        </div>

        <div className="services-cta">
          <p>Ready to take the first step?</p>
          <i>Get in touch at azaleatang@protonmail.com</i>
        </div>
      </section>
    </div>
  )
}
