import "./globals.css";
import type { Metadata } from "next";
// usando o import alias, forma de importar arquivos sem precisar descer de pasta em pasta:
import { Header } from '@/components/header';
// OBS: quando usamos o @ ele vai partir o import sempre do src

export const metadata: Metadata = {
  title: "Meu Site - Aprendendo NextJS",
  description: "Site completo para praticar funcionalidades do NextJS",
  keywords: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'TailwindCSS', 'Programção'],
  openGraph: {
    images: ['https://avatars.githubusercontent.com/u/82345139?v=4']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
