import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import BootstrapProvider from "@/components/BootstrapProvider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import { Albert_Sans } from "next/font/google";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // full range
});
import { Roboto, Playfair_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // choose font weights you need
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Greenwise Travels",
  description: "Discover Africa with Africans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable}`}>
      <body>
        {children}
        {/* <BootstrapProvider>{children}</BootstrapProvider> */}
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   );
// }
