"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <header className="portfolio-header">
      {/* Always-visible top row: brand (left) + desktop nav / hamburger (right) */}
      <div className="header-top-row">
        <div className="header-brand">
          <p>BINDHYA B</p>
          <span className="header-brand-sub">/ B. TECH INFORMATION TECHNOLOGY</span>
        </div>

        {/* Desktop navigation */}
        <nav className="header-nav-desktop">
          <a href="#about" className="nav-link">ABOUT ME</a>
          <a href="#resume" className="nav-link">RESUME</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation drawer — full-width row below the top bar */}
      {menuOpen && (
        <nav className="header-nav-mobile">
          <a href="#about" className="nav-link" onClick={close}>ABOUT ME</a>
          <a href="#resume" className="nav-link" onClick={close}>RESUME</a>
          <a href="#skills" className="nav-link" onClick={close}>SKILLS</a>
          <a href="#projects" className="nav-link" onClick={close}>PROJECTS</a>
          <a href="#contact" className="nav-link" onClick={close}>CONTACT</a>
        </nav>
      )}
    </header>
  );
}
