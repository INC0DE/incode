import { Open_Sans } from "next/font/google";
import { Providers } from "./components/providers";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata = {
  title: "INCODE",
  description: "Marketing a tu negocio.",
  icons: {
    icon: "/incode.png",
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
