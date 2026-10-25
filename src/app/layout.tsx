import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./styles/site.css";
import "./styles/sections.css";
import { villas } from "@/data/villas";
import { toVillaCards } from "./components/villas/villa-cards";
import { CurtainProvider } from "./components/site/Curtain";
import { SiteChrome } from "./components/site/SiteChrome";

// The site's two faces: Instrument Serif for headings (its italic for
// the second line of a thought), Hanken Grotesk for everything else.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lalaguna Villas",
  description: "Lalaguna Villas, a Luxury Dive Resort & Spa",
  icons: {
    icon: 'https://lalagunavillas.com/wp-content/uploads/2021/12/cropped-favicon-192x192.png',
  },
};

// Before first paint: hold the page's hero back for its entrance (PageMotion
// or HomeMotion plays it); on the homepage, also play the loader on the
// first visit of the session.
const introScript = `(function (root) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('hero-pending');
  if (location.pathname !== '/') return;
  try {
    if (!sessionStorage.getItem('intro-seen')) root.classList.add('intro');
  } catch (e) {}
})(document.documentElement);`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const villaNames = toVillaCards(villas).map((villa) => villa.name);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body
        className={`${instrumentSerif.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <CurtainProvider>
          <SiteChrome villas={villaNames}>{children}</SiteChrome>
        </CurtainProvider>
      </body>
    </html>
  );
}
