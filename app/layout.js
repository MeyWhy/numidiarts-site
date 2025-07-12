// import { Geist, Geist_Mono } from "next/font/google";
import {Roboto} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Roboto({
  weight:['100', '200', '300', '500', '700', '900'],
  subsets:['latin']
})
export const metadata = {
  title: "Numidi-Arts",
  description: "Site de l'association Numidi-Arts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
