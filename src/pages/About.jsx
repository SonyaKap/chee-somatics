import './About.css'

export default function About() {
  return (
    <div className="about">
      {/* Page hero */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80"
          alt="Therapist portrait"
          className="page-hero-image"
        />
      </section>

      {/* Content */}
      <section className="about-content">
        <h1 className="page-title">About Me</h1>

        <div className="about-body">
          <p>
            I'm a Licensed Clinical Social Worker (LCSW) practicing in Chicago, IL.
            My approach is rooted in warmth, curiosity, and a deep respect for each
            person's unique experience. I draw on evidence-based modalities —
            including Cognitive Behavioral Therapy (CBT), mindfulness-based
            approaches, and attachment theory — to meet you where you are.
          </p>
          <p>
            I work with adults navigating anxiety, depression, life transitions,
            grief, relationship challenges, and questions of identity and purpose.
            Whether you're in the midst of a crisis or simply feeling stuck, I
            believe that therapy can be a meaningful space for growth and healing.
          </p>
          <p>
            I am committed to creating an affirming, inclusive practice. I welcome
            clients of all backgrounds, identities, and life experiences. You
            deserve a space where you feel safe to be fully yourself.
          </p>
          <p className="about-contact">
            I'd love to hear from you:{' '}
            <a href="mailto:janedoe@email.com">janedoe@email.com</a>
          </p>
        </div>
      </section>
    </div>
  )
}
