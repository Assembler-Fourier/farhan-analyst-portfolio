import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farhan Ahmad — Financial Analyst Portfolio",
    short_name: "Farhan Ahmad",
    description:
      "Portfolio of Farhan Ahmad, a Dublin-based finance and accounting graduate.",
    start_url: "/",
    display: "standalone",
    background_color: "#070709",
    theme_color: "#6f55ff",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
