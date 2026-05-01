import './About.css'
import azaleaHeadshot from '../assets/AzaleaHeadshot.jpg'
export default function About() {
  return (
    <div className="about">
      {/* Content */}
      <section className="about-content">
        <div className="about-header">
          <h1 className="page-title">About Me</h1>
          <img
            src={azaleaHeadshot}
            alt="Therapist portrait"
            className="therapist-photo"
          />
        </div>
        <div className="about-body">

          <p>
            Hi! I’m Azalea Tang, practice owner of Chee Somatics. I’m a first-born
            millennial daughter to first-generation Chinese immigrants, living most
            of my life in the Midwest. I grew up chronically overextending, people-pleasing,
            and being out of touch with my own needs until engaging with my own path
            of healing and transformation. Healing patterns of “striving” have allowed
            me to see the effects of racialized capitalism in others and help them find
            more balance.
          </p>
          <p>
            I come to this work as a somatic practitioner, connected to my ever-evolving identities of queerness, diaspora, and neurodivergence. I have 8+ years working as a social worker, spanning from community mental health to schools to private practice. In my work as a therapist, I am committed to individual and collective transformation by reconnecting people with their life force.
          </p>
          <p>
            I am committed to creating an affirming, inclusive practice. I welcome
            clients of all backgrounds, identities, and life experiences. You
            deserve a space where you feel safe to be fully yourself.
          </p>
          <p>
            A lifelong student of healing and truth, I have received a bachelor’s degree in Religious studies and a Master’s in Social Work. I am 200-hr level yoga teacher trained and a Somatic Experiencing Practitioner (SEP).
          </p>
          <h2 className="section-heading">What I'm passionate about</h2>
          <p>
            I believe that healing work is necessary for a more just world. I’m interested in decolonizing mental health and building healing spaces outside of the medical-industrial complex. I protect and savor time to be with loved ones, connect with nature, and move slowly. I am highly critical of “grind” culture while also acknowledging the wisdom of survival strategies many of us have had to adopt.
          </p>
          <h2 className="section-heading">My therapy style</h2>
          <p>
            Emotional safety is essential to my work with clients. We will work at the pace of trust and your capacity. I am interested in reconnecting people with their inherent wisdom and sense of “flow” to be more present and balanced in their lives. I believe we are all shaped by systems, relationships, and lineages in a way that shows up in our struggles and our points of resilience. I endeavour to provide you with the support and insight to feel more like yourself.
          </p>
          <p>
            Somatic therapy involves intervention and exploration beyond cognitive “talk” therapy. I will likely invite you to explore other channels of experience, such as sensation, behavior, image, and movement. Many clients in this model experience refreshing break-throughs in previous
          </p>
          <p>You might “click” with me if you vibe with one or more of the following: </p>
          <ul>
            <li>Are curious and committed to exploring the ways that racialized capitalism are at work in your experience and lineage</li>
            <li>Are interested in embracing and better understanding your strengths</li>
            <li>Are interested in healing personal and generational trauma </li>
            <il>Are wanting to feel more connected to yourself and your relationships </il>
            <li>Are curious about the mind-body connection</li>
          </ul>
          <h2 className="section-heading">Specialties</h2>
          <ul>
            <li>AAPI, Queer, and marginalized identities</li>
            <li>Shock Trauma</li>
            <li>Developmental Trauma</li>
            <li>Grief, Loss, & Life Transitions</li>
            <li>Spirituality Outside of Organized Religion</li>
            <li>Caregiver Stress and Burnout</li>
            <li>First/Second Generation Immigrant Issues</li>
            <li>LGBTQ+ Issues</li>
            <li>Polyamory</li>
            <li>Relationship Issues</li>
            <li>Adult/Late in life ADHD/Autism Diagnosis</li>
            <li>Chronic Illness</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
