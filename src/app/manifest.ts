import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farhan Ahmad — Finance & Accounting",
    short_name: "Farhan Ahmad",
    description:
      "Portfolio of Farhan Ahmad, a Dublin-based finance and accounting graduate.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0f0b",
    theme_color: "#caff3c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
