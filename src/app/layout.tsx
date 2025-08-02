import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Whisper } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import BackToTop from "./components/BackToTop";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const whisper = Whisper({
  variable: "--font-whisper",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lalaguna Villas",
  description: "Lalaguna Villas, a Luxury Dive Resort & Spa",
  icons: {
    icon: 'https://lalagunavillas.com/wp-content/uploads/2021/12/cropped-favicon-192x192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${whisper.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar isScrolling={false} />
        <div className="pt-20 font-montserrat">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
