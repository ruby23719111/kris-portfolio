import { ImageResponse } from "next/og";

export const alt = "Kris Hsu — IT graduate who turns what clients need into working software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#F5F4F0",
        color: "#171717",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>Kris Hsu</div>
      <div style={{ display: "flex", fontSize: 76, lineHeight: 1.1, letterSpacing: -2, maxWidth: 1000 }}>
        IT graduate who turns what clients need into working software.
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#5C5B57", borderTop: "2px solid #171717", paddingTop: 24 }}>
        QUT Master of IT · Brisbane · Available December 2026
      </div>
    </div>,
    size,
  );
}
