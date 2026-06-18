"use client";
import { useEffect, useRef } from "react";
import config from "../../site.config";

const PHOTOS = [
  "https://static.wixstatic.com/media/ce3659_bcdc08b06b524d6a832d5c81eca96fc5~mv2.jpg",
  "https://static.wixstatic.com/media/ce3659_01113d8a4f2f4c598dbdedefffe36d8e~mv2.jpg",
  "https://static.wixstatic.com/media/ce3659_675bde25be32480bafe275a793d48262~mv2.jpg",
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let idx = 0;
    const imgs = PHOTOS;
    const el = imgRef.current;
    if (!el) return;
    el.src = imgs[0];

    const interval = setInterval(() => {
      idx = (idx + 1) % imgs.length;
      el.style.opacity = "0";
      setTimeout(() => {
        el.src = imgs[idx];
        el.style.opacity = "1";
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <img
        ref={imgRef}
        alt="ARDS India dance"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          transition: "opacity 0.6s ease",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(12,12,12,1) 0%, rgba(12,12,12,0.6) 40%, rgba(12,12,12,0.2) 70%, rgba(12,12,12,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "80px 24px 64px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          Bangalore, Indiranagar
        </p>

        {/* Main headline */}
        <h1
          className="display"
          style={{
            fontSize: "clamp(64px, 14vw, 160px)",
            color: "var(--off-white)",
            marginBottom: "4px",
          }}
        >
          ANOTHER
        </h1>
        <h1
          className="display"
          style={{
            fontSize: "clamp(64px, 14vw, 160px)",
            color: "var(--accent)",
            marginBottom: "4px",
          }}
        >
          REALM
        </h1>
        <h1
          className="display"
          style={{
            fontSize: "clamp(64px, 14vw, 160px)",
            color: "var(--off-white)",
            marginBottom: "32px",
          }}
        >
          OF DANCE.
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.5vw, 18px)",
            color: "rgba(240,237,230,0.75)",
            maxWidth: "480px",
            marginBottom: "40px",
            lineHeight: 1.6,
          }}
        >
          Street dance school and performance centre in Bangalore.
          Hip-Hop, Afro, House, Breakdance and more, for everyone.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href={config.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "16px 36px",
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 600,
              borderRadius: "2px",
              display: "inline-block",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-dim)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Message Us
          </a>
          <a
            href="#classes"
            style={{
              border: "1px solid rgba(240,237,230,0.3)",
              color: "var(--off-white)",
              padding: "16px 36px",
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
              borderRadius: "2px",
              display: "inline-block",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(240,237,230,0.7)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(240,237,230,0.3)")
            }
          >
            See Classes
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "56px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(240,237,230,0.1)",
          }}
        >
          {[
            { n: config.followers, label: "Followers" },
            { n: config.posts, label: "Posts" },
            { n: "11+", label: "Dance styles" },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="display"
                style={{ fontSize: "36px", color: "var(--off-white)" }}
              >
                {s.n}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mid)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          right: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, transparent, var(--accent))",
          }}
        />
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "var(--mid)",
            writingMode: "vertical-lr",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </p>
      </div>
    </section>
  );
}
