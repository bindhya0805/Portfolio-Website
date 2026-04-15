"use client";
import { Briefcase, GraduationCap, Code } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading the development of high-scalability web applications using Next.js and Node.js. Optimized performance by 40% through code splitting and edge computing.",
    },
    {
      company: "Digital Solutions Ltd.",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects. Implemented real-time collaboration features using WebSockets and React.",
    },
  ];

  const education = [
    {
      school: "University of Technology",
      degree: "Master of Science in Computer Science",
      period: "2018 - 2020",
    },
    {
      school: "State Engineering College",
      degree: "Bachelor of Technology in Software Engineering",
      period: "2014 - 2018",
    },
  ];

  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Vanilla CSS", "Tailwind"] },
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
    { name: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ];

  return (
    <section id="resume" className="fade-in">
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>My <span className="gradient-text">Resume</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          A summary of my professional journey, education, and technical expertise.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        {/* Experience */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
            <Briefcase color="var(--accent)" size={24} />
            <h3 style={{ fontSize: '1.5rem' }}>Experience</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {experiences.map((exp, i) => (
              <div key={i} className="glass" style={{ padding: '25px', borderRadius: '20px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600' }}>{exp.period}</span>
                <h4 style={{ fontSize: '1.2rem', margin: '5px 0' }}>{exp.role}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '10px' }}>{exp.company}</p>
                <p style={{ fontSize: '0.9rem', opacity: '0.8' }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
            <GraduationCap color="var(--accent)" size={24} />
            <h3 style={{ fontSize: '1.5rem' }}>Education</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {education.map((edu, i) => (
              <div key={i} className="glass" style={{ padding: '25px', borderRadius: '20px' }}>
                <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600' }}>{edu.period}</span>
                <h4 style={{ fontSize: '1.2rem', margin: '5px 0' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginTop: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', justifyContent: 'center' }}>
          <Code color="var(--accent)" size={24} />
          <h3 style={{ fontSize: '1.8rem' }}>Technical Skills</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {skills.map((skillGroup, i) => (
            <div key={i} className="glass" style={{ padding: '30px', borderRadius: '24px', textAlign: 'center' }}>
              <h4 style={{ marginBottom: '20px', color: 'var(--accent)' }}>{skillGroup.name}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {skillGroup.items.map((item, j) => (
                  <span key={j} style={{ 
                    padding: '8px 16px', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
