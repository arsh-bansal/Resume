import type { Metadata } from "next";

/* Self-hosted variable faces. No Google Fonts request at runtime — one less
   third-party dependency, and the width axis on Archivo is what lets the
   headings sit in a compressed cut without loading a second family. */
import "@fontsource-variable/archivo";           // wght + wdth
import "@fontsource-variable/instrument-sans";
import "@fontsource-variable/newsreader";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import "./globals.css";
import { site } from "@/data/site";
import { Masthead } from "@/components/site/Masthead";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Software engineer in Melbourne. Multi-cloud infrastructure, serverless platforms and the occasional vision model. Final year at Monash.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Multi-cloud infrastructure, serverless platforms and the occasional vision model. Melbourne, Australia.",
    type: "website",
    url: site.url,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: "Multi-cloud infrastructure and serverless platforms. Melbourne, Australia.",
    images: ["/images/og-image.png"],
  },
};

/* Set the theme before first paint so there is no flash. */
const noFlash = `(function(){try{var t=localStorage.getItem('ab-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlash }} />
      </head>
      <body>
        <a className="skiplink" href="#main">
          Skip to content
        </a>
        <Masthead />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
