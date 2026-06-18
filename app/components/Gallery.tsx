"use client";

const PHOTOS = [
  { src: "https://static.wixstatic.com/media/ce3659_41e0231d50ac4c8b87d69c534ff33a68~mv2.jpg", aspect: "4/3" },
  { src: "https://static.wixstatic.com/media/ce3659_2f70979f46a948289132d63c476d13a1~mv2.jpg", aspect: "4/3" },
  { src: "https://static.wixstatic.com/media/8e3dbc_2ae238df6c7b43938243a558656a77d7~mv2.jpg", aspect: "4/3" },
  { src: "https://static.wixstatic.com/media/ce3659_bf75b0b0e2544e829687952e00f1c77c~mv2.jpg", aspect: "3/4" },
  { src: "https://static.wixstatic.com/media/ce3659_1386e3a7f0cd48adb7c28e055e73e07e~mv2.jpg", aspect: "3/4" },
  { src: "https://static.wixstatic.com/media/8e3dbc_aaf98184e94f4b01ade72300bacf1b05~mv2.jpg", aspect: "4/3" },
  { src: "https://static.wixstatic.com/media/8e3dbc_9a947e2b5c8c4698a45714e5e97f7b4e~mv2.jpg", aspect: "4/3" },
  { src: "https://static.wixstatic.com/media/8e3dbc_d56384960b5e4b5392d8cab133c24b25~mv2.jpg", aspect: "4/3" },
];

export default function Gallery() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "var(--surface)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <h2
            className="display"
            style={{ fontSize: "clamp(40px, 7vw, 72px)", color: "var(--off-white)" }}
          >
            THE CULTURE
          </h2>
          <div
            style={{
              height: "1px",
              flex: 1,
              background: "var(--border)",
              marginBottom: "8px",
            }}
          />
          <a
            href="https://www.instagram.com/ardsindia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            @ardsindia
          </a>
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "8px",
          }}
        >
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              style={{
                overflow: "hidden",
                borderRadius: "2px",
                aspectRatio: photo.aspect,
                background: "var(--surface2)",
              }}
            >
              <img
                src={photo.src}
                alt={`ARDS India dance ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.04)")
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
