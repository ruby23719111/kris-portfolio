import { ImageResponse } from "next/og";
export const alt =
  "Kris Hsu — Software, made for people. QUT Master of IT portfolio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#FAFAF7",
        color: "#171D25",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          justifyContent: "space-between",
        }}
      >
        <span>Kris Hsu</span>
        <span style={{ color: "#2454D6" }}>
          Graduate & junior software opportunities
        </span>
      </div>
      <div
        style={{
          fontSize: 94,
          lineHeight: 1.05,
          letterSpacing: -5,
          display: "flex",
          flexDirection: "column",
          marginTop: 85,
        }}
      >
        <span>Software,</span>
        <span>
          made for people<span style={{ color: "#2454D6" }}>.</span>
        </span>
      </div>
      <div style={{ fontSize: 23, marginTop: 60, color: "#5B6572" }}>
        Web / Mobile / Product design · QUT Master of IT
      </div>
    </div>,
    size,
  );
}
