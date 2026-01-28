import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// layout.js ya jahan metadata hai
export const metadata = {
  title: "Smart Business Solutions - Empowering Pakistan",
  description: "Tier-1 Solar Energy Solutions in Pakistan",
  icons: {
    icon: [
      {
        url: "/site-icon.png",
        sizes: "32x32", // Browser ko batana ke ye chota square hai
        type: "image/png",
      },
      {
        url: "/site-icon.png",
        sizes: "192x192", // Mobile devices ke liye
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
