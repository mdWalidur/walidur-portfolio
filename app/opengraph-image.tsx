import { ImageResponse } from "next/og";

export const alt = "Walidur Rahman — Cloud, DevOps & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0f0d0b",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(229, 169, 101, 0.22), transparent 50%), radial-gradient(circle at 20% 85%, rgba(217, 119, 87, 0.14), transparent 45%)",
          color: "#f6f1e9",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Row: Brand Pill & Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "10px 22px",
              borderRadius: "9999px",
              border: "1px solid rgba(246, 241, 233, 0.16)",
              backgroundColor: "rgba(24, 21, 18, 0.8)",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: "#e5a965",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(246, 241, 233, 0.8)",
              }}
            >
              Walidur / Creative Developer Portfolio
            </span>
          </div>

          <span
            style={{
              fontSize: "15px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(246, 241, 233, 0.52)",
            }}
          >
            Tampere, Finland
          </span>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "74px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              color: "#f6f1e9",
            }}
          >
            <span>Walidur&nbsp;</span>
            <span style={{ color: "#e5a965", fontStyle: "italic" }}>
              Rahman.
            </span>
          </div>

          <div
            style={{
              fontSize: "28px",
              lineHeight: 1.4,
              color: "rgba(246, 241, 233, 0.74)",
              maxWidth: "860px",
            }}
          >
            Architecting resilient cloud infrastructure, intelligent AI systems,
            and tactile full-stack web experiences.
          </div>
        </div>

        {/* Bottom Stack Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(246, 241, 233, 0.14)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              "AWS Cloud",
              "Docker",
              "Kubernetes",
              "TypeScript",
              "React & Next.js",
              "AI / ML",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(246, 241, 233, 0.14)",
                  backgroundColor: "rgba(246, 241, 233, 0.05)",
                  fontSize: "15px",
                  color: "rgba(246, 241, 233, 0.85)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <span
            style={{
              fontSize: "16px",
              letterSpacing: "0.14em",
              color: "#e5a965",
            }}
          >
            walidur-portfolio.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

