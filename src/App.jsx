
import './App.css';
import { content } from './content';
import hpeLogo from './assets/HPE-logo.png';

function TechStack() {
  return (
    <section className="tech-stack">
      <h3>Tech Stack</h3>
      <div className="skills-list">
        <div><strong>Languages:</strong> {content.skills.languages.join(', ')}</div>
        <div><strong>Cloud & DevOps:</strong> {content.skills.cloudDevOps.join(', ')}</div>
        <div><strong>Storage & Virtualization:</strong> {content.skills.storageVirtualization.join(', ')}</div>
        <div><strong>Concepts:</strong> {content.skills.concepts.join(', ')}</div>
        <div><strong>Developer Tools:</strong> {content.skills.tools.join(', ')}</div>
        <div><strong>APIs & Protocols:</strong> {content.skills.apisProtocols.join(', ')}</div>
        <div><strong>Frameworks:</strong> {content.skills.frameworks.join(', ')}</div>
        <div><strong>Databases:</strong> {content.skills.databases.join(', ')}</div>
        <div><strong>Practices:</strong> {content.skills.practices.join(', ')}</div>
      </div>
    </section>
  );
}

function FunFacts() {
  return (
    <section className="fun-facts">
      <h3>Fun Facts</h3>
      <ul>
      <li>🏔️ Loves hiking and exploring nature trails</li>
      <li>🏸 Passionate about competitive badminton</li>
      <li>🧩 Enjoys solving logic puzzles and brain teasers</li>
      <li>🏎️ Love watching Formula 1 racing</li>
      </ul>
    </section>
    );
}

function Projects() {
  // Example open source repos, replace with your own later
  const repos = [
    {
      name: "react",
      owner: "facebook",
      url: "https://github.com/facebook/react",
      description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
      tag: "Open Source"
    },
    {
      name: "go",
      owner: "golang",
      url: "https://github.com/golang/go",
      description: "The Go programming language. Open source, statically typed, compiled language designed at Google.",
      tag: "Open Source"
    },
    {
      name: "kubernetes",
      owner: "kubernetes",
      url: "https://github.com/kubernetes/kubernetes",
      description: "Production-Grade Container Scheduling and Management.",
      tag: "Cloud Native"
    }
  ];
  return (
    <section className="projects">
      <h3>GitHub Projects</h3>
      <div className="project-cards">
        {repos.map((repo, idx) => (
          <a
            key={idx}
            className="project-card github-card"
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            title={repo.name}
          >
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
              <img src={`https://github.com/${repo.owner}.png`} alt={repo.owner} style={{width: 32, height: 32, borderRadius: '50%', marginRight: 10}} />
              <span style={{fontWeight: 600, color: '#2d3a4a'}}>{repo.owner} / {repo.name}</span>
            </div>
            <p style={{margin: '0 0 0.5rem 0'}}>{repo.description}</p>
            <span className="tag">{repo.tag}</span>
          </a>
        ))}
      </div>
      <div style={{marginTop: '1rem', color: '#888', fontSize: '0.95rem'}}>
        (You can add your own GitHub repositories here!)
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <h3>About Me</h3>
      <p>{content.summary}</p>
    </section>
  );
}

function Experience() {
  // Example company logo URLs (replace with real ones if available)
  const logos = {
    "Hewlett Packard Enterprise": hpeLogo
  };
  return (
    <section className="experience">
      <h3>Experience</h3>
      <div className="exp-timeline">
        {content.experience.map((exp, idx) => (
          <div key={idx} className="exp-card">
            <div className="exp-header">
              <img
                src={logos[exp.company] || 'https://cdn-icons-png.flaticon.com/512/906/906324.png'}
                alt={exp.company}
                className="exp-logo"
              />
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">@ {exp.company}</div>
                <div className="period">{exp.period}</div>
              </div>
            </div>
            <ul className="exp-details">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education">
      <h3>Education</h3>
      {content.education.map((edu, idx) => (
        <div key={idx} className="edu-item">
          <strong>{edu.institution}</strong> <br />
          {edu.degree} <br />
          <span className="period">{edu.period}</span> <br />
          CGPA: {edu.cgpa}
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h3>Contact</h3>
      <p>Let's connect! Email me at <a href={`mailto:${content.email}`}>{content.email}</a> or reach out on <a href={content.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm {content.name} <span role="img" aria-label="wave">👋</span></h1>
        <h2>{content.title}</h2>
        <p>Building scalable cloud-native systems & automating infrastructure.</p>
        <div className="hero-links">
          <a href={`mailto:${content.email}`}>Email</a>
          <a href={content.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="portfolio-container">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <FunFacts />
      <Contact />
      <footer style={{textAlign: 'center', marginTop: '2rem', color: '#aaa', fontSize: '0.95rem'}}>
        &copy; {new Date().getFullYear()} {content.name} | Backend Developer Portfolio
      </footer>
    </div>
  );
}

export default App;
