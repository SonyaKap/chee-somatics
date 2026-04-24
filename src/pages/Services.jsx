import './Services.css'

export default function Services() {
  return (
    <div className="services">
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1600&q=80"
          alt="Calm therapy room"
          className="page-hero-image"
        />
      </section>

      <section className="services-content">
        <h1 className="page-title">Services, Rates &amp; Policies</h1>

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
            <h3>Initial Consultation — 20 minutes, free</h3>
            <p>
              Not sure if therapy is right for you, or wondering if we're a good
              fit? I offer a free 20-minute phone or video consultation so you can
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
              <span>Initial consultation (20 min)</span>
              <span>Free</span>
            </div>
          </div>
          <p className="rates-note">
            I am currently out-of-network with insurance. Upon request, I can
            provide a superbill that you may submit to your insurance for potential
            out-of-network reimbursement. I recommend contacting your insurer
            to understand your out-of-network mental health benefits before
            beginning therapy.
          </p>
          <p className="rates-note">
            A limited number of sliding-scale spots are available. Please don't
            hesitate to ask.
          </p>
        </div>

        <hr className="section-divider" />

        {/* Policies */}
        <div className="services-section">
          <h2 className="section-heading">Policies</h2>
          <ul className="policy-list">
            <li>
              <strong>Cancellations:</strong> Please cancel or reschedule at least
              24 hours in advance. Late cancellations or no-shows will be charged
              the full session fee.
            </li>
            <li>
              <strong>New clients:</strong> Please complete intake paperwork sent
              to you prior to your first session.
            </li>
            <li>
              <strong>Telehealth:</strong> Sessions are available via secure video
              for Illinois residents. In-person sessions are available in Chicago.
            </li>
            <li>
              <strong>Confidentiality:</strong> Everything shared in therapy is
              confidential, with limited exceptions required by law (e.g. imminent
              safety concerns). I'll walk you through your rights in our first
              session.
            </li>
          </ul>
        </div>

        <div className="services-cta">
          <p>Ready to take the first step?</p>
          <a href="mailto:janedoe@email.com" className="cta-btn">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
