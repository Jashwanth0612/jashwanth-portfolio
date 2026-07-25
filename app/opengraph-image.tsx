import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jashwanth — Computer Vision & Machine Learning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F1E7CE",
          backgroundImage:
            "radial-gradient(ellipse at 20% 10%, rgba(169,121,61,0.18), transparent 45%), radial-gradient(ellipse at 85% 30%, rgba(140,47,30,0.12), transparent 40%)",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 18,
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#8C2F1E",
            fontWeight: 600,
          }}
        >
          <span>—</span>
          <span>Portfolium</span>
          <span>—</span>
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#2E2A20",
            lineHeight: 1,
          }}
        >
          JASHWANTH
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 30,
            letterSpacing: 3,
            color: "#4A4436",
            fontStyle: "italic",
          }}
        >
          Computer Vision Researcher · ML Engineer
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            gap: 14,
            fontSize: 20,
            color: "#A9793D",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          DRDO · IIT Hyderabad Research Intern
        </div>
      </div>
    ),
    { ...size }
  );
}
