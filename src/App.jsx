

import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">RUPA<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">PYTHON · FULL-STACK · AI ENGINEERING</p>
          <h1>Building intelligent<br />
            <span>digital experiences.</span>
          </h1>
          <p className="intro">
              I'm a Programmer Analyst Trainee in the Product Specialist
              Department, focused on software development, Python backend
              engineering, full-stack applications, and AI-powered solutions.
          </p>
          <div className="actions">
            <a className="primary-btn" href="#projects">Explore my work ↗</a>
            <a className="secondary-btn" href="#contact">Contact me</a>
          </div>
          <div className="hero-note">
            <span className="status-dot"></span>
            Open to exciting opportunities
          </div>
        </section>

        <section className="section" id="about">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>Programmer Analyst<br />Trainee.</h2>
          <p className="section-text">
            I work in the Product Specialist Department, focusing on
            software development, problem-solving, and building reliable
            technology solutions. I am interested in Python backend
            development, full-stack applications, and AI engineering.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">02 / TECHNICAL SKILLS</p>
          <h2>My technical toolkit</h2>
          <div className="skill-grid">
            <article className="skill-card">
               <h3>Programming</h3>
               <p>Python · JavaScript · SQL</p>
            </article>
            <article className="skill-card">
              <h3>Backend Development</h3>
              <p>Python · REST APIs · Database Integration · FastAPI / Django</p>
            </article>
            <article className="skill-card">
              <h3>Frontend Development</h3>
              <p>React · HTML · CSS · Responsive Design</p>
            </article>
            <article className="skill-card">
              <h3>AI Engineering</h3>
              <p>LLMs · AI integrations · Document processing .Rag .NLP .Vector Database .Prompt Engineering</p>
            </article>
            <article className="skill-card">
              <h3>Cloud & DevOps</h3>
              <p>AWS · Docker · Containerization</p>
            </article>
            <article className="skill-card">
              <h3>API Development & Testing</h3>
              <p>Postman · Swagger · REST APIs</p>
            </article>
            <article className="skill-card">
              <h3>Tools</h3>
              <p>Git · GitHub · VS Code · Deployment</p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Projects & Technical Work</h2>
          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">PROJECT 01</span>
              <h3>Backend API Development</h3>
              <p>
                 Developing and testing REST APIs, documenting endpoints,
                 and validating requests and responses.
              </p>
              <span className="tag">Python ·Postman · Swagger </span>
            </article>
            <article className="project-card">
              <span className="project-number">PROJECT 02</span>
              <h3>Full-Stack Web Application</h3>
              <p>
                A responsive web application concept combining a modern
                React interface with a Python backend and APIs.
              </p>
              <span className="tag">React · Python · REST API</span>
            </article>
            <article className="project-card">
              <span className="project-number">PROJECT 03</span>
              <h3>Cloud & Containerization</h3>
              <p>
                Exploring containerized application workflows and cloud
                deployment concepts using Docker and AWS.
              </p>
              <span className="tag">Docker · AWS</span>
            </article>
            <article className="project-card">
              <span className="project-number">PROJECT 04 · AI</span>
              <h3>AI Legal Document Summarizer</h3>
              <p>
                An AI-powered application designed to summarize lengthy
                legal documents, extract key information, and help users
                understand important clauses more efficiently.
              </p>
              <span className="tag">Python · Generative AI · NLP · REST API</span>
            </article>

          </div>
          <p className="hint">
            Replace these project descriptions with details of projects
            you have actually built.
          </p>
        </section>
      
        <section className="contact section" id="contact">
          <p className="eyebrow">04 / CONTACT</p>

          <h2>
           Let's build something<br />
          <span>meaningful.</span>
          </h2>

          <p className="section-text">
           I'm a Programmer Analyst Trainee in the Product Specialist
           Department, interested in software development, Python,
           cloud technologies, and AI engineering.
          </p>

          
<div className="actions">
  <a
    className="primary-btn"
    href="mailto:rupadhanshika@gmail.com"
  >
    Email me ↗
  </a>

  <a
    className="secondary-btn"
    href="https://github.com/rupadhanshika-pixel"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    className="secondary-btn"
    href="https://www.linkedin.com/in/rupadhanshika2015/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
</div>

      </section>

        
      </main>

      <footer>
        <a className="logo" href="#home">RUPA<span>.</span></a>
        <p>Designed & built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
