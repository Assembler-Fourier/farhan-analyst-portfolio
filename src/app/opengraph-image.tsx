import { ImageResponse } from "next/og";

export const alt = "Farhan Ahmad — Finance and Accounting Graduate";
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
          padding: "52px 58px",
          color: "#f5f8fb",
          background:
            "radial-gradient(circle at 82% 28%, rgba(99,243,207,.18), transparent 27%), linear-gradient(135deg, #050a11, #0b1624)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            right: -30,
            top: 70,
            display: "flex",
            border: "2px solid rgba(99,243,207,.32)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            right: 60,
            top: 160,
            display: "flex",
            border: "2px solid rgba(105,183,255,.42)",
            transform: "rotate(28deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 20 }}>
          <span
            style={{
              display: "flex",
              padding: "8px 10px",
              border: "1px solid rgba(99,243,207,.4)",
              borderRadius: 8,
              color: "#c8fff0",
              fontWeight: 800,
            }}
          >
            FA
          </span>
          <span style={{ color: "#91a2aa", letterSpacing: ".12em", fontSize: 14 }}>
            DUBLIN · IRELAND · STAMP 1G
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 870 }}>
          <div style={{ display: "flex", color: "#63f3cf", fontSize: 20, letterSpacing: ".12em" }}>
            FARHAN AHMAD · FINANCE &amp; ACCOUNTING
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontSize: 82,
              lineHeight: 0.92,
              letterSpacing: "-.06em",
              fontWeight: 700,
            }}
          >
            <span>Complex numbers.</span>
            <span style={{ color: "#c8fff0" }}>Clear decisions.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#91a2aa", fontSize: 17 }}>
          <span>MSc INTERNATIONAL ACCOUNTING &amp; FINANCE</span>
          <span>91% FINANCIAL MODELLING</span>
        </div>
      </div>
    ),
    size,
  );
}
