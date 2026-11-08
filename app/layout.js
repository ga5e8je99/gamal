import { Geist, Geist_Mono, Sacramento } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gamalahmed.dev"),
  title: {
    default: "Gamal Ahmed | Full-Stack Web Developer",
    template: "%s | Gamal Ahmed",
  },
  description:
    "Portfolio of Gamal Ahmed - Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern high-performance web applications.",
  keywords: [
    "Gamal Ahmed",
    "Full-Stack Developer",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "UI/UX Design",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Gamal Ahmed", url: "https://gamalahmed.dev" }],
  creator: "Gamal Ahmed",
  alternates: {
    canonical: "https://gamalahmed.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gamalahmed.dev",
    title: "Gamal Ahmed | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in Next.js, React, Node.js, and scalable web architectures.",
    siteName: "Gamal Ahmed Portfolio",
    images: [
      {
        url: "/gamalImage.webp",
        width: 1200,
        height: 630,
        alt: "Gamal Ahmed - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamal Ahmed | Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer specializing in Next.js, React, Node.js, and scalable web architectures.",
    images: ["/gamalImage.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gamal Ahmed",
  jobTitle: "Full-Stack Web Developer",
  url: "https://gamalahmed.dev",
  image: "https://gamalahmed.dev/gamalImage.webp",
  sameAs: ["https://github.com/ga5e8je99"],
  knowsAbout: [
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "UI/UX Design",
    "RESTful APIs",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${sacramento.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <ul className="background ">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </body>
    </html>
  );
}
