"use client";
import { useState } from "react";
import { faq } from "../../content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          Questions
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            color: "var(--off-white)",
            marginBottom: "56px",
          }}
        >
          COMMON QUESTIONS
        </h2>

        <div>
          {faq.map((item, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid var(--border)",
                cursor: "pointer",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 0",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: open === i ? "var(--off-white)" : "var(--mid)",
                    fontWeight: open === i ? 500 : 400,
                    transition: "color 0.2s",
                    lineHeight: 1.4,
                  }}
                >
                  {item.q}
                </p>
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "24px",
                    lineHeight: 1,
                    flexShrink: 0,
                    fontWeight: 300,
                    transform: open === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                >
                  +
                </span>
              </div>
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open === i ? "200px" : "0",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--mid)",
                    lineHeight: 1.7,
                    paddingBottom: "24px",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
