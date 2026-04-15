"use client";
import { ArrowRight, Globe, Link, Send } from "lucide-react";

export default function Hero() {
  return (
    <section style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background blur */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        opacity: '0.15',
        filter: 'blur(80px)',
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
        opacity: '0.1',
        filter: 'blur(80px)',
        zIndex: -1
      }}></div>

      <div className="fade-in">
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          color: 'var(--accent)', 
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '0.2em'
        }}>
          Full Stack Developer & Creative Designer
        </h3>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 10vw, 5rem)', 
          lineHeight: '1.1', 
          marginBottom: '30px',
          maxWidth: '900px'
        }}>
          Building digital products, <span className="gradient-text">brands</span>, and experiences.
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          maxWidth: '600px', 
          marginBottom: '40px' 
        }}>
          I&apos;m a passionate developer dedicated to building beautiful, functional, and user-centered digital experiences that make an impact.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            View My Work <ArrowRight size={20} />
          </a>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" className="glass" style={{ padding: '12px', borderRadius: '50%', color: 'var(--foreground)' }}><Globe size={20} /></a>
            <a href="#" className="glass" style={{ padding: '12px', borderRadius: '50%', color: 'var(--foreground)' }}><Link size={20} /></a>
            <a href="#" className="glass" style={{ padding: '12px', borderRadius: '50%', color: 'var(--foreground)' }}><Send size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
