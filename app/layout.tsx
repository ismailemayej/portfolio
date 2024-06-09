import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
const inter = Inter({ subsets: ["latin"] });
import { NextUIProvider } from "@nextui-org/system";
import Container from "@/components/main/Container";

export const metadata: Metadata = {
  title: "Md Ismaile || Portfolio",
  description:
    "I am a dedicated technology enthusiast with three years of coding experience,deeply passionate about exploring and working with the latest technological advancements.My career vision is to innovate and excel in the tech industry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <NextUIProvider>
          <Container className="">{children}</Container>
        </NextUIProvider>
        <Footer />
      </body>
    </html>
  );
}
