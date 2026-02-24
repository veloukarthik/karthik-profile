import { useState } from 'react';
import './App.css';

const skills = [
  'React JS, Angular, Vue JS',
  'Node.js, Express, PHP, Laravel',
  'MySQL, MongoDB, Redis',
  'REST API, Postman',
  'AWS (EC2, S3, RDS, SES)',
  'Docker, GitHub, GitLab, Bitbucket'
];

const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'Cognizant Tech Solutions',
    period: 'Feb 2025 - Present',
    highlights: [
      'Working on enterprise banking and legacy modernization initiatives.',
      'Developed architecture documentation from legacy applications and REST APIs.',
      'At Nextera Energy, integrating our applications into client environments and handling configuration and infrastructure-level activities.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Optisol Business Solutions',
    period: 'Apr 2023 - Oct 2024',
    highlights: [
      'Led project delivery, team management, and client communication.',
      'Delivered healthcare, construction, and domain management applications.',
      'Built scalable solutions using React, Laravel, Node.js, Redis, and AWS.'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Spinebiz Services Pvt Ltd',
    period: 'Jul 2021 - Jul 2022',
    highlights: [
      'Handled full-cycle web development and client interaction.',
      'Supported team coordination and project execution.',
      'Worked across modern JavaScript and PHP-based stacks.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'BondState IT Solutions',
    period: 'Feb 2019 - Jun 2021',
    highlights: [
      'Developed and maintained full-stack web applications.',
      'Collaborated directly with clients on requirements and delivery.',
      'Implemented APIs and responsive UI features across projects.'
    ]
  }
];

const projects = [
  {
    name: 'Nextera Energy (Cognizant)',
    summary:
      'Senior Software Engineer. Integrating internal applications at the client end and working on configuration and infrastructure-level implementation.'
  },
  {
    name: 'U.S. Bank (Cognizant)',
    summary:
      'Senior Software Engineer. Worked on U.S. Bank Smart Rewards features, implementing customer-facing banking functionality.'
  },
  {
    name: 'Cummins (Cognizant)',
    summary:
      'Senior Software Engineer. Analyzed legacy applications and REST APIs to create architecture documentation and support modernization planning.'
  },
  {
    name: 'Beyondcare (Optisol)',
    summary:
      'Team Lead. Built healthcare-focused applications with React, Laravel 9, MySQL, Redis, Docker, and AWS services.'
  },
  {
    name: 'Fulcrum (Optisol)',
    summary:
      'Team Lead. Delivered project and construction management platform with React, Laravel, MySQL, Redis, and AWS.'
  },
  {
    name: 'Berighthere (Spinebiz)',
    summary:
      'Senior Software Engineer. Contributed to full-stack development, feature delivery, and client collaboration on business web applications.'
  }
];

function App() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const currentProject = projects[activeProjectIndex];

  const showPrevProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const showNextProject = () => {
    setActiveProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="profile-page">
      <main className="profile-shell">
        <section className="hero">
          <div className="profile-photo-wrap">
            <img className="profile-photo" src="/profile-photo.png" alt="Karthik profile" />
          </div>
          <div className="hero-content">
            <p className="kicker">Senior Software Engineer</p>
            <h1>Karthik V</h1>
            <p className="hero-summary">
              Senior Software Engineer with 6+ years of IT experience across full-stack development, team leadership, and client interaction. Focused on scalable web applications using React, Laravel, Node.js, and AWS.
            </p>
            <div className="hero-actions">
              <a href="mailto:veloukarthik@gmail.com">veloukarthik@gmail.com</a>
              <a href="tel:+919344751727">+91 93447 51727</a>
              <a href="https://github.com/veloukarthik/" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/karthik-velou/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="/2393630-Karthik Velou.pdf" target="_blank" rel="noreferrer">
                View Resume (PDF)
              </a>
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>Core Skills</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((role) => (
              <article className="timeline-item" key={`${role.company}-${role.title}`}>
                <header>
                  <h3>{role.title}</h3>
                  <p>{role.company}</p>
                  <span>{role.period}</span>
                </header>
                <ul>
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>Selected Projects</h2>
          <div className="project-slider">
            <button className="slider-btn prev" onClick={showPrevProject} aria-label="Previous project">
              ‹
            </button>
            <div className="project-card-wrap">
              <article className="project-card">
                <h3>{currentProject.name}</h3>
                <p>{currentProject.summary}</p>
              </article>
            </div>
            <button className="slider-btn next" onClick={showNextProject} aria-label="Next project">
              ›
            </button>
          </div>
          <div className="slider-dots">
            {projects.map((project, index) => (
              <button
                key={project.name}
                className={`dot ${index === activeProjectIndex ? 'active' : ''}`}
                onClick={() => setActiveProjectIndex(index)}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
