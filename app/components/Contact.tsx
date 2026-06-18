"use client";
import config from "../../site.config";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
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
              Get in touch
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                color: "var(--off-white)",
                lineHeight: 0.95,
                marginBottom: "32px",
              }}
            >
              COME
              <br />
              MOVE
              <br />
              WITH US.
            </h2>
            <p
              style={{
                color: "var(--mid)",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "380px",
                marginBottom: "40px",
              }}
            >
              Whether you want to join a class, rent a studio, bring a
              workshop, or just find out more, we are one message away.
            </p>

            {/* Main CTA */}
            <a
              href={config.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "var(--accent)",
                color: "#fff",
                padding: "18px 40px",
                fontSize: "13px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
                borderRadius: "2px",
                marginBottom: "48px",
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>

          {/* Right: contact details */}
          <div style={{ paddingTop: "8px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {/* Address */}
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--mid)",
                    marginBottom: "8px",
                  }}
                >
                  Address
                </p>
                <p style={{ fontSize: "15px", color: "var(--off-white)", lineHeight: 1.6 }}>
                  {config.address}
                </p>
                <a
                  href={config.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  Open in Maps
                </a>
              </div>

              {/* Phone */}
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--mid)",
                    marginBottom: "8px",
                  }}
                >
                  Phone
                </p>
                <a
                  href={`tel:${config.phone}`}
                  style={{ fontSize: "18px", color: "var(--off-white)", fontWeight: 500 }}
                >
                  {config.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--mid)",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${config.email}`}
                  style={{ fontSize: "15px", color: "var(--off-white)" }}
                >
                  {config.email}
                </a>
              </div>

              {/* Instagram */}
              <div>
                <p
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--mid)",
                    marginBottom: "8px",
                  }}
                >
                  Instagram
                </p>
                <a
                  href={config.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "15px", color: "var(--accent)", fontWeight: 500 }}
                >
                  @ardsindia
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
