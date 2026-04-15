"use client";
import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  User, 
  Mail, 
  MapPin, 
  Download, 
  Award,
  BookOpen,
  Layout
} from "lucide-react";

export default function ResumeDashboard() {
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
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "SCSS", "Tailwind"] },
    { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"] },
    { name: "Cloud", items: ["AWS", "Vercel", "Docker", "Git", "CI/CD"] },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            borderRadius: '50%', 
            background: 'var(--gradient-primary)', 
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: '800'
          }}>A</div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Antigravity</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full Stack Architect</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="#" className="sidebar-link active"><Layout size={20} /> Overview</a>
          <a href="#" className="sidebar-link"><Briefcase size={20} /> Experience</a>
          <a href="#" className="sidebar-link"><Code size={20} /> Projects</a>
          <a href="#" className="sidebar-link"><GraduationCap size={20} /> Education</a>
          <a href="#" className="sidebar-link"><User size={20} /> Profile</a>
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
            <Mail size={16} color="var(--accent)" /> hello@antigravity.dev
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
            <MapPin size={16} color="var(--accent)" /> San Francisco, CA
          </div>
          <button className="btn btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Download size={18} /> Resume PDF
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem' }}>Resume <span className="gradient-text">Dashboard</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Welcome back! Here&apos;s a look at your professional path.</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className="badge">OPEN FOR WORK</div>
            <div className="badge" style={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}>v2.4.0</div>
          </div>
        </header>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="dashboard-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '10px' }}><Award size={32} /></div>
            <h3 style={{ fontSize: '1.8rem' }}>8+</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Awards Won</p>
          </div>
          <div className="dashboard-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '10px' }}><Briefcase size={32} /></div>
            <h3 style={{ fontSize: '1.8rem' }}>6</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Years Experience</p>
          </div>
          <div className="dashboard-card" style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '10px' }}><BookOpen size={32} /></div>
            <h3 style={{ fontSize: '1.8rem' }}>24</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Projects Done</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          {/* Work Experience */}
          <div className="dashboard-card">
            <h2 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Briefcase color="var(--accent)" /> Work Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {experiences.map((exp, i) => (
                <div key={i} style={{ position: 'relative', paddingLeft: '30px', borderLeft: '2px solid var(--glass-border)' }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '-7px', 
                    top: '0', 
                    width: '12px', 
                    height: '12px', 
                    borderRadius: '50%', 
                    background: 'var(--accent)',
                    boxShadow: '0 0 10px var(--accent)'
                  }}></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h4 style={{ fontSize: '1.25rem' }}>{exp.role}</h4>
                    <span className="badge">{exp.period}</span>
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: '600', marginBottom: '15px', fontSize: '0.9rem' }}>{exp.company}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Skills */}
            <div className="dashboard-card">
              <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.4rem' }}>
                <Code color="var(--accent)" /> Skills
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {skills.map((skill, i) => (
                  <div key={i}>
                    <p style={{ fontSize: '0.8rem', fontWeight: '800', marginBottom: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{skill.name}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {skill.items.map((item, j) => (
                        <span key={j} className="badge" style={{ background: 'var(--glass)', color: 'var(--foreground)', textTransform: 'none' }}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="dashboard-card">
              <h2 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.4rem' }}>
                <GraduationCap color="var(--accent)" /> Education
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {education.map((edu, i) => (
                  <div key={i}>
                    <p style={{ fontWeight: '700', fontSize: '1rem' }}>{edu.degree}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{edu.school}</p>
                    <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '600', marginTop: '5px' }}>{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: '60px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <p>© 2026 Antigravity. Built with Next.js Dashboard Architecture.</p>
        </footer>
      </main>
    </div>
  );
}
