import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LinkTree Probuil Lisbon | Construction Company in Lisbon ",
  description: "Welcome to LinkTree Probuild Lisbon! Connect easily with us for all your construction needs. Chat directly with ProbuildAI for personalized assistance and discover how we can help you build your dreams in Lisbon."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
