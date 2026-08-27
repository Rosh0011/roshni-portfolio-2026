import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roshni Tarafdar | Data Scientist & Data Engineer",
  description:
    "Portfolio of Roshni Tarafdar — Information Science Engineering student aspiring to build a career in Data Science and Data Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
