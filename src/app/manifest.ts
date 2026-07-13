import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farhan Ahmad — Finance & Accounting",
    short_name: "Farhan Ahmad",
    description:
      "Portfolio of Farhan Ahmad, a Dublin-based finance and accounting graduate.",
    start_url: "/",
    display: "standalone",
    background_color: "#050a11",
    theme_color: "#63f3cf",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
