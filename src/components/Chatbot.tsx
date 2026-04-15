"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2, Sparkles } from "lucide-react";

type Message = {
  sender: "bot" | "user";
  text: string;
  isLoading?: boolean;
};

const QUICK_REPLIES = [
  "Who is Bindhya?",
  "What are her skills?",
  "Tell me about her projects",
  "Current internship?",
  "NIC experience?",
  "Download resume",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! 👋 I'm Bindhya's AI Assistant, powered by RAG + Gemini. Ask me anything about her skills, projects, or experience!",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setInputText("");
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setIsLoading(true);

    // Add a loading placeholder
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "", isLoading: true },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setMessages((prev) => {
        const updated = [...prev];
        // Replace the loading placeholder with the real answer
        const loadingIdx = updated.findIndex((m) => m.isLoading);
        if (loadingIdx !== -1) {
          updated[loadingIdx] = {
            sender: "bot",
            text: data.answer ?? data.error ?? "Sorry, something went wrong.",
          };
        }
        return updated;
      });
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        const loadingIdx = updated.findIndex((m) => m.isLoading);
        if (loadingIdx !== -1) {
          updated[loadingIdx] = {
            sender: "bot",
            text: "Network error. Please try again.",
          };
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          background: "var(--accent)",
          color: "white",
          border: "none",
          boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
          cursor: "pointer",
          display: isOpen ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.12)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.45)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.35)";
        }}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="chatbot-window"
          style={{
            background: "var(--card-bg)",
            borderRadius: "24px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid var(--card-border)",
            fontFamily: "var(--font-heading)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "var(--card-bg)",
              color: "var(--foreground)",
              padding: "18px 22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--card-border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--accent)",
                  borderRadius: "50%",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid var(--card-border)",
                  position: "relative",
                }}
              >
                <Bot size={20} />
                <Sparkles
                  size={10}
                  style={{
                    position: "absolute",
                    top: "-2px",
                    right: "-2px",
                    color: "#fbbf24",
                  }}
                />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: "700" }}>
                  Bindhya&apos;s AI Assistant
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      background: "#4ade80",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                  Online
                </p>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setIsOpen(false)}
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--card-border)",
                color: "var(--text-muted)",
                cursor: "pointer",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "background 0.2s",
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              background: "var(--bg-secondary)",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  display: "flex",
                  gap: "8px",
                  maxWidth: "88%",
                }}
              >
                {msg.sender === "bot" && (
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "var(--card-bg)",
                      color: "var(--accent)",
                      border: "1px solid var(--card-border)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      marginTop: "auto",
                    }}
                  >
                    <Bot size={13} />
                  </div>
                )}

                <div
                  style={{
                    background:
                      msg.sender === "user" ? "var(--accent)" : "var(--card-bg)",
                    color:
                      msg.sender === "user" ? "white" : "var(--foreground)",
                    padding: "12px 16px",
                    borderRadius: "18px",
                    borderBottomRightRadius: msg.sender === "user" ? "4px" : "18px",
                    borderBottomLeftRadius: msg.sender === "bot" ? "4px" : "18px",
                    border: msg.sender === "bot" ? "1px solid var(--card-border)" : "none",
                    fontSize: "0.88rem",
                    lineHeight: "1.6",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {msg.isLoading ? (
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                  ) : (
                    msg.text
                  )}
                </div>

                {msg.sender === "user" && (
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "var(--card-bg)",
                      color: "var(--accent)",
                      border: "1px solid var(--card-border)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexShrink: 0,
                      marginTop: "auto",
                    }}
                  >
                    <User size={13} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies + Input */}
          <div
            style={{
              background: "var(--card-bg)",
              borderTop: "1px solid var(--card-border)",
              padding: "12px 14px",
            }}
          >
            {/* Quick reply chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              {QUICK_REPLIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(q)}
                  disabled={isLoading}
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--card-border)",
                    color: "var(--foreground)",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "0.75rem",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    transition: "all 0.18s",
                    fontWeight: 600,
                    opacity: isLoading ? 0.5 : 1,
                  }}
                  onMouseOver={(e) => {
                    if (!isLoading) {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "var(--accent)";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "var(--bg-secondary)";
                    e.currentTarget.style.color = "var(--foreground)";
                    e.currentTarget.style.borderColor = "var(--card-border)";
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Text input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(inputText);
              }}
              style={{ display: "flex", gap: "8px" }}
            >
              <input
                type="text"
                placeholder="Ask anything about Bindhya…"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "12px 18px",
                  borderRadius: "50px",
                  border: "1px solid var(--card-border)",
                  background: "var(--bg-secondary)",
                  color: "var(--foreground)",
                  outline: "none",
                  fontSize: "0.88rem",
                  opacity: isLoading ? 0.6 : 1,
                }}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background:
                    inputText.trim() && !isLoading
                      ? "var(--accent)"
                      : "var(--bg-secondary)",
                  color:
                    inputText.trim() && !isLoading ? "white" : "var(--text-muted)",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: inputText.trim() && !isLoading ? "pointer" : "not-allowed",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                {isLoading ? (
                  <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}
