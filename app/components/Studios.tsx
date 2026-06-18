"use client";
import { studios } from "../../content";
import config from "../../site.config";

const STUDIO_IMGS = [
  "https://static.wixstatic.com/media/8e3dbc_e08d5d39ed1247bdbc25a03d46916545~mv2.jpg",
  "https://static.wixstatic.com/media/8e3dbc_93a718f4d27e4da4ba35be3db812299e~mv2.jpg",
  "https://static.wixstatic.com/media/8e3dbc_dcb1d621cf37442ab9aedd2a78a3e333~mv2.jpg",
  "https://static.wixstatic.com/media/8e3dbc_97fa2c0b8f574f2a92d6ccdb49d1ae97~mv2.jpg",
];

export default function Studios() {
  return (
    <section
      id="studios"
      style={{
        padding: "100px 24px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
          Rent our space
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(40px, 8vw, 88px)",
            color: "var(--off-white)",
            marginBottom: "16px",
            lineHeight: 0.95,
          }}
        >
          FOUR STUDIOS.
          <br />
          YOUR VISION.
        </h2>
        <p
          style={{
            color: "var(--mid)",
            fontSize: "15px",
            maxWidth: "480px",
            marginBottom: "56px",
            lineHeight: 1.7,
          }}
        >
          Three mirror studios and a dedicated shoot space for reels,
          content creation, and photography. Available to book for
          rehearsals, workshops, and events.
        </p>

        {/* Studio grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "2px",
          }}
        >
          {studios.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                overflow: "hidden",
                borderRadius: "2px",
              }}
            >
              <div
                style={{
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  background: "var(--surface2)",
                }}
              >
                <img
                  src={STUDIO_IMGS[i]}
                  alt={s.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                  loading="lazy"
                />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <h3
                  className="display"
                  style={{
                    fontSize: "24px",
                    color: "var(--off-white)",
                    marginBottom: "6px",
                  }}
                >
                  {s.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "var(--accent)",
                    marginBottom: "8px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.size}
                </p>
                <p style={{ fontSize: "13px", color: "var(--mid)" }}>
                  {s.best}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rental CTA */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: "16px", color: "var(--mid)" }}>
            Check availability and pricing.
          </p>
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
            Message to Book
          </a>
        </div>
      </div>
    </section>
  );
}
