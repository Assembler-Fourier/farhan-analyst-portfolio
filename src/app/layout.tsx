import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const productionUrl = "https://farhananalyst.com";

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: {
    default: "Farhan Ahmad — Finance & Accounting Graduate",
    template: "%s | Farhan Ahmad",
  },
  description:
    "Dublin-based MSc International Accounting & Finance graduate focused on financial modelling, treasury risk, reporting and finance operations across Ireland.",
  keywords: [
    "Farhan Ahmad",
    "finance graduate Ireland",
    "accounting graduate Dublin",
    "financial analyst graduate",
    "treasury analyst Ireland",
    "fund accountant graduate",
    "accounts assistant Dublin",
  ],
  authors: [{ name: "Farhan Ahmad", url: "https://www.linkedin.com/in/farhan-ahmad-93645a34a/" }],
  creator: "Farhan Ahmad",
  category: "Finance and Accounting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_IE",
    url: "/",
    siteName: "Farhan Ahmad — Finance & Accounting",
    title: "Farhan Ahmad — Complex numbers. Clear decisions.",
    description:
      "MSc-qualified finance and accounting graduate in Dublin. Modelling, treasury, reporting and reliable operations.",
    firstName: "Farhan",
    lastName: "Ahmad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Ahmad — Finance & Accounting Graduate",
    description:
      "Dublin-based finance graduate with standout results in modelling, treasury risk and financial management.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050a11",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IE"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
