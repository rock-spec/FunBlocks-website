import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { type AppType } from "next/app";
import Provider from "@/app/_trpc/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fun Blocks",
  description: "Fun Blocks",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const svgBackground = "url('/background.svg')";
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <nav suppressHydrationWarning={true}>
            <NavBar />
          </nav>

          <div
            className="min-h-screen flex justify-center items-start pt-[60px] pb-[60px] m-5 md:m-10"
            style={{
              backgroundImage: svgBackground,
              backgroundRepeat: 'repeat',
              backgroundSize: 'auto'
            }}
          >

            <div className="absolute top-[143px] left-0 -z-10">
              <Image src="/bg-svg-left.svg" alt="Left SVG" width={336} height={461} />
            </div>

            <div className="absolute top-1 right-0 -z-10">
              <Image src="/bg-svg-right.svg" alt="Right SVG" width={221} height={557} />
            </div>
            {children}
          </div>


          <footer className="w-full">
            <Footer />
          </footer>
        </Provider>
      </body>

    </html>
  );
}
// export default api.withTRPC(RootLayout)
export default RootLayout