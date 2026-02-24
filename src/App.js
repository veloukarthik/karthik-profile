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
      'Contributed to front-end delivery and client interaction for U.S. Bank projects.'
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
    name: 'BeyondCare (Australia)',
    summary:
      'Team Lead. Built healthcare applications using React, Laravel 9, MySQL, Redis, Docker, and AWS.'
  },
  {
    name: 'Fulcrum (UK)',
    summary:
      'Team Lead. Delivered project and construction management platform with React, Laravel, MySQL, Redis, and AWS.'
  },
  {
    name: 'U.S. Bank (Cognizant)',
    summary:
      'Front-End Developer. Built online banking portal features using React with Jira and GitLab workflow.'
  }
];

function App() {
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
              Senior Software Engineer with 5+ years of IT experience across full-stack development, team leadership, and client interaction. Focused on scalable web applications using React, Laravel, Node.js, and AWS.
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
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
