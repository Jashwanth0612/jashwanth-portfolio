import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const siteDescription =
  "Personal portfolio of Jashwanth — ECE student, DRDO–IIT Hyderabad research intern, and computer vision / machine learning engineer.";

export const metadata: Metadata = {
  // TODO: once deployed, replace with your real Vercel/custom domain so
  // social-share previews (OG image) resolve correctly.
  metadataBase: new URL("https://jashwanth-portfolio-tan.vercel.app"),
  title: {
    default: "Jashwanth — Computer Vision & Machine Learning",
    template: "%s — Jashwanth",
  },
  description: siteDescription,
  keywords: [
    "Jashwanth",
    "Computer Vision",
    "Machine Learning",
    "RT-DETRv2",
    "Object Detection",
    "DRDO",
    "IIT Hyderabad",
    "VNRVJIET",
  ],
  openGraph: {
    title: "Jashwanth — Computer Vision & Machine Learning",
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jashwanth — Computer Vision & Machine Learning",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Cinzel+Decorative:wght@700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Cormorant+SC:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-[19px] leading-relaxed antialiased overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
