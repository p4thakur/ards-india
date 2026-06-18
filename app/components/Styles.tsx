"use client";
import { styles } from "../../content";

export default function Styles() {
  return (
    <section
      id="styles"
      style={{
        padding: "100px 24px",
        background: "var(--surface)",
        overflow: "hidden",
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
          What we teach
        </p>
        <h2
          className="display"
          style={{
            fontSize: "clamp(40px, 8vw, 88px)",
            color: "var(--off-white)",
            marginBottom: "64px",
            lineHeight: 0.95,
          }}
        >
          11 STYLES
          <br />
          ONE STUDIO.
        </h2>

        {/* Styles marquee row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "64px",
          }}
        >
          {styles.map((style, i) => (
            <span
              key={i}
              style={{
                padding: "10px 20px",
                border: "1px solid var(--border)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: i % 4 === 0 ? "var(--accent)" : "var(--mid)",
                borderRadius: "2px",
                fontWeight: 500,
              }}
            >
              {style}
            </span>
          ))}
        </div>

        {/* Big pull quote */}
        <div
          style={{
            borderLeft: "3px solid var(--accent)",
            paddingLeft: "32px",
            maxWidth: "600px",
          }}
        >
          <p
            className="display"
            style={{
              fontSize: "clamp(22px, 4vw, 36px)",
              color: "var(--off-white)",
              lineHeight: 1.2,
            }}
          >
            "Street dance is not one thing.
            <br />
            It is a whole world."
          </p>
          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              color: "var(--mid)",
              letterSpacing: "0.05em",
            }}
          >
            ARDS India, Bangalore
          </p>
        </div>

        {/* Photo strip */}
        <div
          style={{
            marginTop: "64px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}
        >
          {[
            "https://static.wixstatic.com/media/ce3659_66fcb9c36e644061931e82d9f477dbea~mv2.jpg",
            "https://static.wixstatic.com/media/8e3dbc_93ee77b8399244159f8d22ccf5a58457~mv2.jpg",
            "https://static.wixstatic.com/media/ce3659_8342686ec3714fa3a79358dea6d954c6~mv2.jpg",
          ].map((src, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: "2px",
                background: "var(--surface2)",
              }}
            >
              <img
                src={src}
                alt={`Dance style ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
