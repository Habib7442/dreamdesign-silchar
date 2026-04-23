import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream Design Silchar | Top Interior Designers & Civil Contractors",
  description:
    "Dream Design Silchar offers professional interior design, modular kitchens, civil construction, painting, and waterproofing services in Silchar since 2007. Led by Mr. Dilip Das.",
  openGraph: {
    title: "Dream Design Silchar | Top Interior Designers & Civil Contractors",
    description: "Dream Design Silchar offers professional interior design, modular kitchens, civil construction, painting, and waterproofing services in Silchar since 2007.",
    url: "https://dreamdesignsilchar.com",
    siteName: "Dream Design Silchar",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Dream Design Silchar Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Design Silchar | Top Interior Designers",
    description: "Professional interior design and civil construction services in Silchar.",
    images: ["/og_image.png"],
  },
  keywords: [
    "Interior design Silchar",
    "Home renovation Silchar",
    "Civil contractors Silchar",
    "Modular kitchen Silchar",
    "Waterproofing Silchar",
    "Painting services Silchar",
    "Dream Design Silchar",
    "Dilip Das Silchar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        notoSans.variable,
        interHeading.variable
      )}
    >
      <body 
        className={cn("min-h-full flex flex-col font-sans")}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Dream Design Silchar",
              "image": "https://dreamdesignsilchar.com/logo.png",
              "@id": "https://dreamdesignsilchar.com",
              "url": "https://dreamdesignsilchar.com",
              "telephone": "+91-9854382525",
              "email": "dilipdassilchar@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Meherpur",
                "addressLocality": "Silchar",
                "addressRegion": "Assam",
                "postalCode": "788015",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.8105,
                "longitude": 92.7937
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "19:00"
              },
              "sameAs": []
            }),
          }}
        />
      </body>
    </html>
  );
}

