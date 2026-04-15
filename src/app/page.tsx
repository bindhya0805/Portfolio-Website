import Image from "next/image";
import { Link, Globe, Mail, ExternalLink, Download, MapPin } from "lucide-react";
import Chatbot from "@/components/Chatbot";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const experiences = [
    {
      company: "PRO CODE WORK IT SOLUTIONS PRIVATE LIMITED",
      role: "Software Intern",
      period: "21-01-2026 - Present",
      description: "Gained hands-on experience in modern web technologies, focusing on learning new tools, developing technical skills, and understanding real-time software development practices in the IT industry.",
    },
    {
      company: "National Informatics Centre",
      role: "Web Development Intern",
      period: "26-05-2025 - 26-06-2025",
      description: "Developed a responsive company portfolio website using HTML, CSS, and Bootstrap. Integrated PHP, AJAX, and PostgreSQL for consultation booking, admin appointment management, and dynamic testimonial carousel with star ratings.",
    },
  ];

  const skills = [
    { category: "Languages", items: ["Java", "Python"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js", "Next.js", "PHP", "Ajax", "jQuery", "Postgres"] },
    { category: "Tools & Software", items: ["AWS Services", "QGIS", "Visual Studio", "Android Studio", "Figma", "Antigravity"] },
  ];

  const projects = [
    {
      title: "Autism Detection Using Machine Learning",
      category: "Healthcare / AI",
      description: "Designed an AI-based diagnostic support system for early identification of Autism Spectrum Disorder using behavioral and clinical features. Applied preprocessing, feature selection, and classification models.",
      image: "/autism_ml.png",
      link: "https://colab.research.google.com/drive/1pMcTn-l0QTlfWuMITBSTPrvTccPce38S?usp=sharing"
    },
    {
      title: "SmartLane - Violation Detection & Automation",
      category: "Smart City / AI",
      description: "AI-powered lane violation detection using YOLOv5 and PyTorch. Trained on a custom dataset to detect five lane conditions, enabling real-time traffic monitoring.",
      image: "/smartlane.png",
      link: "https://colab.research.google.com/drive/1kjPRS0x_FPNeoBuQfxfuRJtvtf2HusR_?usp=sharing"
    },
    {
      title: "Nexora - Business Portfolio Website",
      category: "Web Development",
      description: "Built Nexora, a responsive Bootstrap-PHP portfolio featuring a consultation booking form, PostgreSQL integration, and an AJAX-enhanced dashboard.",
      image: "/nexora.png",
      link: "https://github.com/bindhya0805/Nexora/tree/main/Knightone"
    }
  ];

  return (
    <div className="profile-container">
      {/* Fixed Sticky Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 60px',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        background: 'var(--card-bg)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p style={{ fontWeight: '800', fontSize: '1.2rem' }}>
            BINDHYA B <span style={{ fontWeight: '400', color: 'var(--text-muted)', fontSize: '1rem', marginLeft: '5px' }}>/ B. TECH INFORMATION TECHNOLOGY</span>
          </p>
        </div>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <a href="#about" className="nav-link">ABOUT ME</a>
          <a href="#resume" className="nav-link">RESUME</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>
      </header>

      {/* Main Content Area */}
      <div className="main-content" style={{ marginTop: '100px' }}>
        {/* Left Side: Sticky Profile Card */}
        <aside className="side-card">
          <div style={{ 
            width: '180px', 
            height: '180px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            margin: '0 auto 30px',
            position: 'relative',
            boxShadow: 'var(--card-shadow)'
          }}>
            <Image 
              src="/user_profile.jpg" 
              alt="BINDHYA B" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '5px' }}>BINDHYA B</h2>
          <div style={{ 
            width: '40px', 
            height: '2px', 
            background: 'var(--accent)', 
            margin: '15px auto' 
          }}></div>
          <p style={{ 
            textAlign: 'center', 
            letterSpacing: '0.15em', 
            fontSize: '0.8rem', 
            fontWeight: '600',
            color: 'var(--text-muted)',
            marginBottom: '30px'
          }}>INFORMATION TECHNOLOGY</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--foreground)', fontSize: '0.9rem' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} color="var(--accent)" /> bindhya2004ammu@gmail.com</div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} color="var(--accent)" /> 9150442825</div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/bindhya-babu-201680265" target="_blank" rel="noopener noreferrer"><Link size={18} /></a>
            <a href="https://github.com/bindhya0805" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58V22"></path>
              </svg>
            </a>
          </div>
        </aside>

        {/* Right Side: Sections Content */}
        <section className="intro-section">
          {/* About Section */}
          <div id="about" style={{ marginBottom: '120px' }}>
            <h1 style={{ marginBottom: '20px' }}>Hello</h1>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--accent)', fontWeight: '700' }}>Here&apos;s who I am & what I do</h2>
            
            <div className="cta-group">
              <a href="#resume" className="btn-primary">RESUME</a>
              <a href="#projects" className="btn-outline">PROJECTS</a>
            </div>

            <p className="description" style={{ fontSize: '1.2rem', marginBottom: '20px', maxWidth: '650px' }}>
              A highly motivated and result oriented B. Tech. Information technology student with a passion for Coding, HTML and web development.
            </p>
            <p className="description" style={{ maxWidth: '650px' }}>
              Seeking a position in the field of IT and it&apos;s applications where I can utilize my strong technical, research and application oriented skills.
            </p>
          </div>
        </section>
      </div>

      {/* Full Width Sections Area */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 20px' }}>
          {/* Resume Section */}
          <div id="resume" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '3rem', margin: 0 }}>Experience</h2>
              <a href="/Resume Bindhya B-1.pdf" download="Resume_Bindhya_B.pdf" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} /> DOWNLOAD CV
              </a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {experiences.map((exp, i) => (
                <div key={i} className="dashboard-card" style={{ 
                  background: 'var(--card-bg)', 
                  borderRadius: '12px',
                  padding: '35px',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--accent)' }}>{exp.role}</h3>
                    <span style={{ fontWeight: '700', color: 'var(--text-muted)' }}>{exp.period}</span>
                  </div>
                  <p style={{ fontWeight: '700', marginBottom: '15px' }}>{exp.company}</p>
                  <p className="description" style={{ fontSize: '1rem', margin: 0 }}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              {skills.map((skill, i) => (
                <div key={i} className="dashboard-card" style={{ 
                  background: 'var(--card-bg)', 
                  borderRadius: '12px',
                  padding: '30px',
                  border: '1px solid var(--card-border)',
                  boxShadow: 'var(--card-shadow)'
                }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '20px', fontWeight: '800' }}>{skill.category}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {skill.items.map((item, j) => (
                      <span key={j} style={{ 
                        background: 'var(--bg-secondary)', 
                        color: 'var(--accent)', 
                        padding: '6px 14px', 
                        borderRadius: '20px', 
                        fontSize: '0.85rem',
                        fontWeight: '700'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" style={{ marginBottom: '120px', scrollMarginTop: '120px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {projects.map((project, i) => (
                <div key={i} className="dashboard-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{project.description}</p>
                    <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: '700', color: 'var(--accent)' }}>
                      VIEW PROJECT <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" style={{ marginBottom: '80px', scrollMarginTop: '120px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Contact</h2>
            <div className="dashboard-card" style={{ maxWidth: '600px' }}>
              <ContactForm />
            </div>
          </div>
      </div>

      <footer style={{ 
        padding: '60px 20px', 
        borderTop: '1px solid var(--accent-light)', 
        textAlign: 'center',
        background: 'var(--bg-secondary)',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>© 2026 Portfolio. Created with passion by BINDHYA B.</p>
           <div style={{ display: 'flex', gap: '20px' }}>
              <a href="https://www.linkedin.com/in/bindhya-babu-201680265" target="_blank" rel="noopener noreferrer" className="nav-link">LINKEDIN</a>
              <a href="https://github.com/bindhya0805" target="_blank" rel="noopener noreferrer" className="nav-link">GITHUB</a>
           </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}
