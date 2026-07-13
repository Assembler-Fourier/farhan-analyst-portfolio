import { ImageResponse } from "next/og";

export const alt = "Farhan Ahmad — Financial Analyst and Finance Graduate";
export const size = { width: 1200, height: 630 };
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
          padding: "54px 62px",
          color: "#f7f6fb",
          background:
            "radial-gradient(circle at 82% 32%, rgba(111,85,255,.35), transparent 29%), linear-gradient(135deg, #070709, #12101d)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            right: -40,
            top: 108,
            display: "flex",
            border: "2px solid rgba(181,168,255,.30)",
            borderRadius: "50%",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              display: "flex",
              padding: "9px 11px",
              borderRadius: 9,
              background: "#6f55ff",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            FA
          </span>
          <span style={{ color: "#aaa8b3", letterSpacing: ".12em", fontSize: 14 }}>
            DUBLIN · IRELAND · STAMP 1G
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ display: "flex", color: "#b5a8ff", fontSize: 19, letterSpacing: ".11em" }}>
            FARHAN AHMAD · FINANCE &amp; ACCOUNTING
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              fontSize: 77,
              lineHeight: 0.95,
              letterSpacing: "-.055em",
              fontWeight: 750,
            }}
          >
            <span>Financial thinking.</span>
            <span style={{ color: "#8a72ff" }}>Practical experience.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa8b3", fontSize: 16 }}>
          <span>MSc INTERNATIONAL ACCOUNTING &amp; FINANCE</span>
          <span>91% FINANCIAL MODELLING</span>
        </div>
      </div>
    ),
    size,
  );
}
