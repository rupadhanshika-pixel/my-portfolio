

import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">RUPA<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <p className="eyebrow">PYTHON · FULL-STACK · AI ENGINEERING</p>
          <h1>
             Hi, I'm Rupa S.
            <br />
            <span>Python Full Stack Developer.</span>
          </h1>
          <p className="intro">
              I'm a Programmer Analyst Trainee in the Product Specialist
              Department, focused on software development, Python backend
              engineering, full-stack applications, and AI-powered solutions.
          </p>
          <div className="experience-badge">
             <span className="experience-number">4+</span>
             <span>Years of Experience</span>
          </div>
          <div className="actions">
            <a className="primary-btn" href="#projects">Explore my work ↗</a>
            <a className="secondary-btn" href="#contact">Contact me</a>

          </div>
          <div className="hero-note">
            <span className="status-dot"></span>
            Open to exciting opportunities
          </div>
        </section>

        {/*<section className="section" id="about">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>Programmer Analyst<br />Trainee.</h2>
          <p className="section-text">
            I work in the Product Specialist Department, focusing on
            software development, problem-solving, and building reliable
            technology solutions. I am interested in Python backend
            development, full-stack applications, and AI engineering.
          </p>
        </section>*/}
        
<section className="section about-section" id="about">
  <p className="eyebrow">01 / ABOUT ME</p>

  <h2>
    Programmer Analyst.
    <br />
    Building intelligent solutions.
  </h2>

  <p className="section-text">
    I am a Programmer Analyst working in the Product
    Specialist Department, with 4+ years of experience
    in software development. My technical expertise
    includes Python, Django, FastAPI, REST API development,
    and database integration. I also work with AI
    engineering concepts, including Large Language Models
    (LLMs), Retrieval-Augmented Generation (RAG), and
    intelligent document processing. I enjoy solving
    technical problems and building reliable software
    solutions across backend, full-stack, and AI domains.
  </p>
</section>

<section className="section experience-section" id="experience">
  <p className="eyebrow">02 / EXPERIENCE</p>

  <h2>My Professional Journey.</h2>

  <div className="experience-card">
    <div className="experience-header">
      <div>
        <h3>Programmer Analyst</h3>
        <p className="company-name">Blueberry Global</p>
      </div>

      <span className="experience-type">
        Professional Experience
      </span>
    </div>

    <p className="section-text">
      Working in the Product Specialist Department,
      contributing to software development and technology
      solutions across backend, full-stack, and AI-related
      areas.
    </p>

    <div className="project-tags">
      <span className="tag">Python</span>
      <span className="tag">Django</span>
      <span className="tag">FastAPI</span>
      <span className="tag">REST APIs</span>
      <span className="tag">AI / LLM</span>
    </div>
  </div>
</section>

<section className="section education-section" id="education">
  <p className="eyebrow">03 / EDUCATION</p>

  <h2>Academic Background.</h2>

  <div className="education-grid">
    <article className="education-card">
      <span className="education-year">2017</span>
      <h3>Master of Business Administration</h3>
      <p>Anna University</p>
      <span className="education-score">8.1 CGPA</span>
    </article>

    <article className="education-card">
      <span className="education-year">2014</span>
      <h3>Bachelor of Science in Computer Science</h3>
      <p>Thiruvalluvar University</p>
      <span className="education-score">8.0 CGPA</span>
    </article>
  </div>
</section>



        {/*<section className="section" id="skills">
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
        </section>*/}
        
<section id="skills" className="skills-section">
  <div className="skills-container">
    <div className="skills-heading">
      <span className="skills-eyebrow">
        04 / SYSTEM CAPABILITIES
      </span>
      <h2>
        Technical Skills<span className="neon-dot">.</span>
      </h2>
      <p>
        Building intelligent systems. Engineering reliable backends.
        Connecting ideas to technology.
      </p>
    </div>

    <div className="skills-grid">
      <div className="skill-panel backend-panel">
        <div className="skill-panel-heading">
          <span className="skill-icon">{"</>"}</span>
          <h3>BACKEND</h3>
        </div>
        <div className="skill-divider"></div>
        <div className="skill-badges">
          {["Python", "Django", "FastAPI", "Flask", "REST API"].map((skill) => (
            <span className="skill-badge" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skill-panel ai-panel">
        <div className="skill-panel-heading">
          <span className="skill-icon">✳</span>
          <h3>AI / LLM</h3>
        </div>
        <div className="skill-divider"></div>
        <div className="skill-badges">
          {["RAG", "Llama 2", "NLP", "FAISS", "Embeddings"].map((skill) => (
            <span className="skill-badge" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skill-panel frontend-panel">
        <div className="skill-panel-heading">
          <span className="skill-icon">▣</span>
          <h3>FRONTEND</h3>
        </div>
        <div className="skill-divider"></div>
        <div className="skill-badges">
          {["React", "JavaScript", "HTML", "CSS"].map((skill) => (
            <span className="skill-badge" key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="skill-panel cloud-panel">
        <div className="skill-panel-heading">
          <span className="skill-icon">▤</span>
          <h3>CLOUD &amp; DATA</h3>
        </div>
        <div className="skill-divider"></div>
        <div className="skill-badges">
          {["AWS", "Docker", "PostgreSQL", "MySQL", "Git"].map((skill) => (
            <span className="skill-badge" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>

    <div className="skills-footer">
      <span><span className="status-dot"></span> SYSTEM READY</span>
      <span>PYTHON · FULL-STACK · AI</span>
    </div>
  </div>
</section>

       {/* <section className="section" id="projects">
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
        </section>*/}
           
<section className="section projects-section" id="projects">
  <p className="eyebrow">05 / SELECTED WORK</p>
  <h2>Projects & Technical Work</h2>
  <p className="section-text">
    Building practical backend systems, full-stack applications,
    and AI-powered solutions.
  </p>

  <div className="project-grid">

    <article className="project-card">
      <span className="project-number">PROJECT 01 / BACKEND</span>
      <img
       src={`${import.meta.env.BASE_URL}projects/hospital-portal.png`}
       alt="Hospital Appointment and Records Portal dashboard"
       className="project-image"
      />
      <h3>Hospital Appointment & Records Portal</h3>
      <p>
        Developed the records module for a hospital portal,
        supporting report uploads, prescription lists, and
        report management with cloud storage integration.
      </p>
      <div className="project-tags">
        <span className="tag">Django</span>
        <span className="tag">PostgreSQL</span>
        <span className="tag">AWS S3</span>
        <span className="tag">REST API</span>
      </div>
    </article>

    <article className="project-card">
      <span className="project-number">PROJECT 02 / AI</span>
      <img
       src={`${import.meta.env.BASE_URL}projects/legal-summarizer.png`}
       alt="AI Legal Summarizer dashboard"
       className="project-image"
      />
      <h3>AI-Powered Legal Summarizer</h3>
      <p>
        Built an AI application to summarize legal documents
        using document processing and retrieval-augmented
        generation, with a user interface for uploading and
        downloading summaries.
      </p>
      <div className="project-tags">
        <span className="tag">Python</span>
        <span className="tag">FastAPI</span>
        <span className="tag">Llama 2</span>
        <span className="tag">RAG</span>
      </div>
    </article>

    <article className="project-card">
      <span className="project-number">PROJECT 03 / TELECOM</span>
      <img
       src={`${import.meta.env.BASE_URL}projects/iot-platform.png`}
       alt="IoT Platform dashboard"
       className="project-image"
      />
      <h3>Interoperable IoT Platform</h3>
      <p>
        Worked on a platform concept for connecting IoT devices
        through different communication protocols and a
        device abstraction layer.
      </p>
      <div className="project-tags">
        <span className="tag">Python</span>
        <span className="tag">MQTT</span>
        <span className="tag">CoAP</span>
        <span className="tag">IoT</span>
      </div>
    </article>

    {/*<article className="project-card">
      <span className="project-number">PROJECT 04 / GATEWAY</span>
      <h3>Universal Communication Gateway</h3>
      <p>
        Designed a gateway concept for communication across
        network generations, focusing on protocol translation,
        adapter-based integration, and secure authentication.
      </p>
      <div className="project-tags">
        <span className="tag">Python</span>
        <span className="tag">JWT</span>
        <span className="tag">Design Patterns</span>
        <span className="tag">Telecom</span>
      </div>
    </article>*/}
    
<article className="project-card">
  <span className="project-number">
    PROJECT 04 / CROSS-PLATFORM
  </span>
  <img
  src={`${import.meta.env.BASE_URL}projects/communication-gateway.png`}
  alt="Universal Communication Gateway dashboard"
  className="project-image"
  />
  <h3>Universal Communication Gateway</h3>

  <p>
    Developed a cross-platform backend framework designed
    to support mobile, web, and desktop applications through
    a unified communication layer. Focused on backend
    integration, protocol translation, reusable architecture,
    and secure authentication to enable seamless communication
    across different platforms.
  </p>

  <div className="project-tags">
    <span className="tag">Python</span>
    <span className="tag">REST API</span>
    <span className="tag">Protocol Translation</span>
    <span className="tag">JWT</span>
    <span className="tag">ZooKeeper</span>
  </div>
</article>


  </div>
</section>
        <section className="contact section" id="contact">
          <p className="eyebrow">06 / CONTACT</p>

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
  
       <a
        className="secondary-btn"
        href={`${import.meta.env.BASE_URL}S.Rupa_Resume.pdf`}
        target="_blank"
        rel="noreferrer"
       >
        View Resume ↗
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
