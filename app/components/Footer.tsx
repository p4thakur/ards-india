"use client";
import config from "../../site.config";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid var(--border)",
        padding: "48px 24px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "32px",
          marginBottom: "40px",
        }}
      >
        <div>
          <p className="display" style={{ fontSize: "40px", color: "var(--off-white)", marginBottom: "8px" }}>
            ARDS<span style={{ color: "var(--accent)" }}>.</span>
          </p>
          <p style={{ fontSize: "13px", color: "var(--mid)", maxWidth: "280px", lineHeight: 1.6 }}>
            Another Realm of Diverse Stories.
            <br />
            Bangalore's street dance school.
          </p>
        </div>

        <div style={{ display: "flex", gap: "64px", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "16px" }}>Quick links</p>
            {[
              { label: "Classes", href: "#classes" },
              { label: "Styles", href: "#styles" },
              { label: "Studios", href: "#studios" },
              { label: "Contact", href: "#contact" },
            ].map(l => (
              <a key={l.href} href={l.href} style={{ display: "block", fontSize: "14px", color: "var(--mid)", marginBottom: "10px" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--off-white)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--mid)"}
              >{l.label}</a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mid)", marginBottom: "16px" }}>Connect</p>
            <a href={config.instagram} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", fontSize: "14px", color: "var(--mid)", marginBottom: "10px" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--mid)"}
            >Instagram</a>
            <a href={config.whatsapp} target="_blank" rel="noopener noreferrer"
              style={{ display: "block", fontSize: "14px", color: "var(--mid)", marginBottom: "10px" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--mid)"}
            >WhatsApp</a>
            <a href={`mailto:${config.email}`}
              style={{ display: "block", fontSize: "14px", color: "var(--mid)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--mid)"}
            >Email</a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "24px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <p style={{ fontSize: "12px", color: "var(--mid)" }}>
          {config.address}
        </p>
        <p style={{ fontSize: "12px", color: "var(--mid)" }}>
          ARDS India, Bangalore
        </p>
      </div>
    </footer>
  );
}
