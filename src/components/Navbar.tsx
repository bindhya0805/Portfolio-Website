"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'glass' : ''} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '20px 0',
      transition: 'all 0.3s ease',
      height: scrolled ? '70px' : '90px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800', cursor: 'pointer' }}>
          ANTIGRAVITY<span className="gradient-text">.</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: '600', color: 'var(--text-muted)' }}>
          <a href="#" style={{ color: 'var(--foreground)' }}>Home</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px' }}>Hire Me</a>
      </div>
    </nav>
  );
}
