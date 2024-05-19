import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { query_client } from "@/lib/react-query";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfólio Maycom Will",
  description: "Created with React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className=" flex min-h-screen scroll-pt-28 flex-col scroll-smooth"
    >
      <link rel="shortcut icon" href="./logo.svg" type="image/x-icon" />
      <body className={`${inter.variable} ${anton.variable} overflow-y-scroll`}>
        <Header />
        <QueryClientProvider client={query_client}>
          {children}
        </QueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
