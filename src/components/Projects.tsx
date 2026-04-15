"use client";
import Image from "next/image";
import { ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Visionary Dashboard",
      category: "SaaS / Web App",
      description: "A comprehensive analytics dashboard with real-time data visualization and AI-driven insights.",
      image: "/project1.png",
      tags: ["Next.js", "Chart.js", "Firebase"],
      link: "#",
      github: "https://github.com/bindhya0805"
    },
    {
      title: "Eco-Commerce Platform",
      category: "E-Commerce",
      description: "Sustainable e-commerce solution focused on zero-waste products and ethical supply chains.",
      image: "/project1.png", // Reusing same for demo
      tags: ["React", "Node.js", "Stripe"],
      link: "#",
      github: "https://github.com/bindhya0805"
    },
    {
      title: "Flow State Task Manager",
      category: "Productivity",
      description: "Minimalist task management tool designed to keep users in the productive 'flow state'.",
      image: "/project1.png", // Reusing same for demo
      tags: ["TypeScript", "Prisma", "PostgreSQL"],
      link: "#",
      github: "https://github.com/bindhya0805"
    }
  ];

  return (
    <section id="projects" className="fade-in">
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Selected <span className="gradient-text">Projects</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Explore some of my recent work, showcasing a blend of design thinking and technical expertise.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {projects.map((project, i) => (
          <div key={i} className="glass" style={{ 
            borderRadius: '24px', 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ position: 'relative', height: '240px', width: '100%' }}>
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                style={{ objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                top: '15px', 
                right: '15px',
                padding: '6px 14px',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'white'
              }}>
                {project.category}
              </div>
            </div>
            
            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                {project.tags.map((tag, j) => (
                  <span key={j} style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--accent)', 
                    fontWeight: '600'
                  }}>#{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '15px' }}>
                <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  <Code size={18} /> Code
                </a>
                <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: '600' }}>
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <a href="#" className="btn btn-secondary">View All Projects</a>
      </div>
    </section>
  );
}
