import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moderati Blog",
  description: "Example blog application using jsonplaceholder API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky top-0 w-full px-24 backdrop-blur-2xl border-b-4 border-b-white">
          <div className="z-10 w-full items-center">
            <div className="flex w-full pb-6 pt-8 justify-center">
              <a href="/" className="inline-flex">
                <Image
                  src="/mod-logo.svg"
                  alt="Moderati Blog Logo"
                  width={91}
                  height={31}
                  priority
                />{".blog"}
              </a>
            </div>
          </div>
        </nav>
        <main className="flex flex-col justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}