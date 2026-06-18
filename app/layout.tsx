import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARDS India | Street Dance Studio, Bangalore",
  description: "Another Realm of Diverse Stories. Bangalore's street dance school in Indiranagar. Hip-Hop, Afro, House, Breakdance, Locking, Popping and more. Classes, workshops, events and studio rentals.",
  openGraph: {
    title: "ARDS India | Street Dance Studio, Bangalore",
    description: "Bangalore's street dance school. Hip-Hop, Afro, House, Breakdance and more.",
    url: "https://ardsindia.co.in",
    siteName: "ARDS India",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
