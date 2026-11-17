
import { useEffect, useState } from 'react'

import {
  Github,
  Linkedin,
  Download,
  ArrowUp,
  Mail,
  GraduationCap,
  Send
} from 'lucide-react'

import Navbar from './components/Navbar.jsx'
import Section from './components/Section.jsx'
import ProjectCard from './components/ProjectCard.jsx'

import {
  profile,
  about,
  skills,
  projects,
  education,
  achievements
} from './data.js'


export default function App() {

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'dark'
  )

  const [pct, setPct] = useState(0)

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  // Education data validation
  const educationList = Array.isArray(education) ? education : []

  // Theme management
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement
      const maxScroll = h.scrollHeight - h.clientHeight

      setPct(
        maxScroll > 0 ? (h.scrollTop / maxScroll) * 100 : 0
      )
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true
    })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Contact form
  const set = (key) => (e) => {
    setForm({
      ...form,
      [key]: e.target.value
    })
  }

  const send = (e) => {
    e.preventDefault()

    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`

    window.location.href =
      `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
  }

  // Social links
  const Social = () => (
    <>
      {profile.github && (
        <a
          className="icon-btn"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      )}

      {profile.linkedin && (
        <a
          className="icon-btn"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      )}
    </>
  )


  return (
    <>

      {/* Scroll Progress */}
      <div
        className="progress"
        style={{ width: pct + '%' }}
      />


      {/* Navbar */}
      <Navbar
        theme={theme}
        toggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />


      {/* Home Section */}
      <header id="home" className="hero">

        <div className="blob b1" />
        <div className="blob b2" />

        <div className="wrap hero-grid">

          <div>

            <span className="hi">
              Hi, I'm {profile.name}
            </span>

            <h1 className="grad">
              {profile.headline}
            </h1>

            <p>{profile.intro}</p>

            <div className="row">

              <a className="btn primary" href="#projects">
                View My Projects
              </a>

              <a
                className="btn"
                href={profile.resume}
                download="Preetam_Kumar_Resume.pdf"
              >
                <Download size={16} />
                Download Resume
              </a>

              <Social />

            </div>

          </div>

          <img
            className="photo"
            src={profile.photo}
            alt={profile.name}
          />

        </div>

      </header>


      {/* About Section */}
      <section id="about" className="about-section">
  <div className="about-container">

    <div className="about-left">
      <span className="about-label">GET TO KNOW ME</span>

      <h2>
  Turning Ideas Into <span className="grad">Intelligent Solutions</span>
</h2>

      {about.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <a
        href="https://github.com/Preetam-31"
        target="_blank"
        rel="noreferrer"
        className="about-link"
      >
        Explore My GitHub →
      </a>
    </div>

    <div className="about-right">
      {about.highlights.map((item, index) => (
        <div className="about-card" key={index}>
          <div className="about-card-icon">
            {item.icon === "brain-circuit" && "◈"}
            {item.icon === "code-2" && "</>"}
            {item.icon === "shield-check" && "⬡"}
            {item.icon === "lightbulb" && "✧"}
          </div>

          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* Skills Section */}
      <Section id="skills" title="Technical" accent="Skills">

        <div className="grid">

          {Object.entries(skills).map(([category, items]) => (

            <div className="glass card" key={category}>

              <h3>{category}</h3>

              <div className="chips">

                {items.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </Section>


      {/* Projects Section */}
      <Section id="projects" title="Featured" accent="Projects">

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))'
          }}
        >

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              p={project}
            />
          ))}

        </div>

      </Section>


      {/* Education Section */}
      
<section id="education" style={{
  padding: '80px 20px',
  background: '#101014',
  color: 'white'
}}>
  <div style={{
    maxWidth: '1000px',
    margin: 'auto'
  }}>

    <h2 style={{
      fontSize: '36px',
      marginBottom: '35px',
      color: 'white'
    }}>
      My <span style={{ color: '#9875ff' }}>Education</span>
    </h2>

    {education.map((item, index) => (
      <div key={index} style={{
        background: '#202027',
        padding: '25px',
        marginBottom: '20px',
        borderRadius: '15px',
        border: '1px solid #444',
        color: 'white'
      }}>

        <h3 style={{ color: '#9875ff' }}>
          {item.degree}
        </h3>

        <h4 style={{ color: 'white' }}>
          {item.field}
        </h4>

        <p style={{ color: '#cccccc' }}>
          {item.college} | {item.year}
        </p>

        <p style={{ color: '#aaaaaa' }}>
          {item.status}
        </p>

        <p style={{ color: '#cccccc' }}>
          {item.description}
        </p>

      </div>
    ))}

  </div>
</section>

      {/* Achievements Section */}
      <Section
        id="achievements"
        title="Certifications &"
        accent="Achievements"
      >

        <div className="grid">

          {Object.entries(achievements).map(([category, items]) => (

            <div className="glass card" key={category}>

              <h3>{category}</h3>

              {items.length === 0 ? (

                <div
                  className="card empty"
                  style={{
                    padding: 14,
                    border: '1px dashed var(--bd)',
                    borderRadius: 12
                  }}
                >
                  Add your {category.toLowerCase()} in src/data.js
                </div>

              ) : (

                items.map((item, index) => (

                  <p
                    key={index}
                    style={{ marginBottom: 8 }}
                  >

                    {item.link ? (

                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="grad"
                      >
                        {item.title}
                      </a>

                    ) : item.title}

                    <br />

                    <small style={{ color: 'var(--mu)' }}>
                      {[item.issuer, item.year]
                        .filter(Boolean)
                        .join(' · ')}
                    </small>

                  </p>

                ))

              )}

            </div>

          ))}

        </div>

      </Section>


      {/* Resume Section */}
      <Section id="resume" title="My" accent="Resume">

        <div className="glass card">

          <p
            style={{
              color: 'var(--mu)',
              marginBottom: 16
            }}
          >
            {profile.summary}
          </p>

          <a
            className="btn primary"
            href={profile.resume}
            download="Preetam_Kumar_Resume.pdf"
          >
            <Download size={16} />
            Download Resume
          </a>

        </div>

      </Section>


      {/* Contact Section */}
      <Section id="contact" title="Get in" accent="Touch">

        <div className="contact-grid">

          <div>

            <p
              style={{
                color: 'var(--mu)',
                marginBottom: 20
              }}
            >
              I'm open to internships and opportunities in AI/ML
              and software development. Let's build something
              intelligent together.
            </p>

            <div className="row">

              <a
                className="btn"
                href={'mailto:' + profile.email}
              >
                <Mail size={16} />
                {profile.email}
              </a>

              <Social />

            </div>

          </div>


          {/* Contact Form */}
          <form
            className="glass card"
            onSubmit={send}
          >

            <input
              required
              placeholder="Name"
              value={form.name}
              onChange={set('name')}
            />

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={set('email')}
            />

            <input
              required
              placeholder="Subject"
              value={form.subject}
              onChange={set('subject')}
            />

            <textarea
              required
              rows="5"
              placeholder="Message"
              value={form.message}
              onChange={set('message')}
            />

            <button
              className="btn primary"
              type="submit"
            >
              <Send size={16} />
              Send Message
            </button>

          </form>

        </div>

      </Section>


      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </footer>


      {/* Back to Top */}
      {pct > 15 && (

        <a
          href="#home"
          className="icon-btn top glass"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </a>

      )}

    </>
  )
}
