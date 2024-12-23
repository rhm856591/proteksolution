import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FlootingComponent from "@/components/FlootingComponent";
import Footer from "@/components/Footer";
// import { Toaster } from 'react-hot-toast';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Protecsolution",
  description: "Developed by Rahamtullah Sheikh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <NavBar />
          <FlootingComponent />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
