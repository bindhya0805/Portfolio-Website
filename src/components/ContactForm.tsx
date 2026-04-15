"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "4px",
  border: "1px solid var(--card-border)",
  background: "var(--bg-secondary)",
  color: "var(--foreground)",
  fontSize: "0.95rem",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div className="contact-name-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "0.8rem", fontWeight: "700" }}>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Jane"
            style={inputStyle}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label style={{ fontSize: "0.8rem", fontWeight: "700" }}>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={{ fontSize: "0.8rem", fontWeight: "700" }}>Email *</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          style={inputStyle}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label style={{ fontSize: "0.8rem", fontWeight: "700" }}>Message *</label>
        <textarea
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      {/* Status messages */}
      {status === "success" && (
        <p style={{ color: "#4ade80", fontWeight: "700", fontSize: "0.9rem", margin: 0 }}>
          ✅ Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "#f87171", fontWeight: "700", fontSize: "0.9rem", margin: 0 }}>
          ❌ Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary"
        style={{ alignSelf: "flex-end", opacity: status === "sending" ? 0.7 : 1 }}
      >
        {status === "sending" ? "SENDING..." : "SEND"}
      </button>
    </form>
  );
}
