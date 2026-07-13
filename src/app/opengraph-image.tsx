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
          padding: "58px 64px",
          color: "#f0ede2",
          background: "#0e0f0b",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            right: -60,
            top: 55,
            display: "flex",
            border: "2px solid rgba(202,255,60,.55)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            right: 35,
            top: 150,
            display: "flex",
            border: "2px solid rgba(114,117,255,.7)",
            transform: "rotate(28deg)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 22 }}>
          <span style={{ fontWeight: 800, letterSpacing: "-0.08em" }}>FA</span>
          <span
            style={{
              width: 8,
              height: 8,
              display: "flex",
              borderRadius: "50%",
              background: "#caff3c",
            }}
          />
          <span style={{ color: "#a5a69f", letterSpacing: ".12em", fontSize: 14 }}>
            DUBLIN · IRELAND
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#caff3c", fontSize: 22, letterSpacing: ".12em" }}>
            FINANCE &amp; ACCOUNTING
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 18,
              fontSize: 98,
              lineHeight: 0.88,
              letterSpacing: "-.07em",
              fontWeight: 650,
            }}
          >
            <span>Numbers,</span>
            <span>made useful.</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#a5a69f", fontSize: 18 }}>
          <span>FARHAN AHMAD</span>
          <span>MSc · MODELLING · TREASURY · OPERATIONS</span>
        </div>
      </div>
    ),
    size,
  );
}
