"use client";
import { useState, useEffect } from "react";
import config from "../../site.config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const links = [
    { label: "Classes", href: "#classes" },
    { label: "Styles", href: "#styles" },
    { label: "Studios", href: "#studios" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.3s, border-bottom 0.3s",
          background: scrolled ? "rgba(12,12,12,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid #2a2a2a" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <a
          href="#"
          className="display"
          style={{ fontSize: "22px", color: "var(--off-white)", letterSpacing: "0.08em" }}
        >
          ARDS
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--mid)",
                transition: "color 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--off-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mid)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={config.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 600,
              borderRadius: "2px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-dim)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            Message Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--off-white)",
                transition: "all 0.3s",
                transformOrigin: "center",
                transform:
                  open && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : open && i === 1
                    ? "scaleX(0)"
                    : open && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(12,12,12,0.98)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          transition: "opacity 0.3s, pointer-events 0.3s",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="display"
            style={{ fontSize: "48px", color: "var(--off-white)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href={config.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{
            background: "var(--accent)",
            color: "#fff",
            padding: "16px 40px",
            fontSize: "14px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            borderRadius: "2px",
            marginTop: "8px",
          }}
        >
          Message Us
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
