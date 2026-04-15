"use client";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="fade-in">
      <div className="glass" style={{ 
        padding: '60px', 
        borderRadius: '40px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Let&apos;s <span className="gradient-text">Work Together</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>
            Have a project in mind? Looking for a new team member? Or just want to say hi? I&apos;d love to hear from you.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}><Mail size={24} /></div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email me at</p>
                <p style={{ fontWeight: '600' }}>hello@antigravity.dev</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}><MessageSquare size={24} /></div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Chat with me on</p>
                <p style={{ fontWeight: '600' }}>Discord / Slack</p>
              </div>
            </div>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600', paddingLeft: '5px' }}>Name</label>
              <input type="text" placeholder="John Doe" style={{ 
                padding: '16px', 
                borderRadius: '16px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)',
                color: 'white',
                outline: 'none'
              }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.9rem', fontWeight: '600', paddingLeft: '5px' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={{ 
                padding: '16px', 
                borderRadius: '16px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid var(--glass-border)',
                color: 'white',
                outline: 'none'
              }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.9rem', fontWeight: '600', paddingLeft: '5px' }}>Message</label>
            <textarea placeholder="Tell me about your project..." rows={5} style={{ 
              padding: '16px', 
              borderRadius: '16px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--glass-border)',
              color: 'white',
              outline: 'none',
              resize: 'none'
            }}></textarea>
          </div>
          <button type="button" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
            Send Message <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}
