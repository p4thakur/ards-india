"use client";
import { classes } from "../../content";
import config from "../../site.config";

const LEVEL_COLOR: Record<string, string> = {
  "All levels": "#4a9",
  "Beginners": "#6b9",
  "Intermediate / Advanced": "#e87",
};

export default function Classes() {
  return (
    <section
      id="classes"
      style={{
        padding: "100px 24px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "16px" }}>
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
            Monsoon Batch, 2025
          </p>
          <h2
            className="display"
            style={{
              fontSize: "clamp(40px, 8vw, 88px)",
              color: "var(--off-white)",
              lineHeight: 0.95,
            }}
          >
            CLASSES
          </h2>
        </div>

        <p
          style={{
            color: "var(--mid)",
            fontSize: "15px",
            maxWidth: "480px",
            marginBottom: "56px",
            lineHeight: 1.7,
          }}
        >
          Eight different classes. Eight different instructors.
          All levels welcome, from first-timers to advanced dancers.
          Register once, choose your sessions.
        </p>

        {/* Class cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {classes.map((cls, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                padding: "28px",
                borderBottom: "1px solid var(--border)",
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "var(--surface2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = "var(--surface)")
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "16px",
                }}
              >
                <h3
                  className="display"
                  style={{
                    fontSize: "28px",
                    color: "var(--off-white)",
                    lineHeight: 1.1,
                  }}
                >
                  {cls.style}
                </h3>
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: LEVEL_COLOR[cls.level] ?? "var(--mid)",
                    fontWeight: 600,
                    padding: "3px 8px",
                    border: `1px solid ${LEVEL_COLOR[cls.level] ?? "var(--border)"}`,
                    borderRadius: "2px",
                    whiteSpace: "nowrap",
                    marginLeft: "12px",
                  }}
                >
                  {cls.level}
                </span>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--mid)",
                  marginBottom: "6px",
                }}
              >
                <span style={{ color: "var(--off-white)" }}>Instructor:</span>{" "}
                {cls.instructor}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--mid)",
                  marginBottom: "4px",
                }}
              >
                {cls.days}
              </p>
              <p style={{ fontSize: "14px", color: "var(--mid)" }}>
                {cls.time}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "48px",
            padding: "40px",
            background: "var(--surface)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
          }}
          className="classes-cta"
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--mid)",
                marginBottom: "8px",
              }}
            >
              Not sure which class to join?
            </p>
            <p
              className="display"
              style={{ fontSize: "28px", color: "var(--off-white)" }}
            >
              Just message us. We will help you pick.
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={config.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "14px 32px",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                borderRadius: "2px",
              }}
            >
              Message Us on WhatsApp
            </a>
            <a
              href={config.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid var(--border)",
                color: "var(--off-white)",
                padding: "14px 32px",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                borderRadius: "2px",
              }}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .classes-cta {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
