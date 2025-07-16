import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Whisper } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const whisper = Whisper({
  variable: "--font-whisper",
  subsets: ["latin"],
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "Lalaguna Villas",
  description: "Lalaguna Villas, a Luxury Dive Resort & Spa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${whisper.variable} antialiased`}
      >
        <Navbar isScrolling={false} />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
