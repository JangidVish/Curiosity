import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curiosity",
  description: "At Curiosity, we are dedicated to igniting the inquisitive spirit within every learner and innovator. As a parent company to various educational and product-based platforms, our mission is to be a catalyst for shaping the future of our tech-savvy nation while staying rooted in our rich cultural heritage. We believe that advancements in technology and our ancient culture can go hand in hand, creating a unique blend of innovation and tradition. Join us as we foster a generation of thinkers and creators, committed to making a meaningful impact on the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
