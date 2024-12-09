import type { Metadata } from "next";
import { Inter, Montserrat, Catamaran } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const catamaran = Catamaran({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-catamaran',
})


export const metadata: Metadata = {
  title: "Avion - Let's Shopping",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} ${catamaran.variable}`}>
       
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
