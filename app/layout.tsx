import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yogesh — Full-Stack Developer for Scalable Startups",
  description:
    "I help founders turn raw ideas into scalable, production-ready products. From MVPs to system architecture — I build full-stack apps that ship fast, stay stable, and scale smart.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "full-stack developer",
    "startup MVP developer",
    "backend engineer",
    "FastAPI developer",
    "Laravel developer",
    "build startup product",
    "scalable backend",
    "freelance developer India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
