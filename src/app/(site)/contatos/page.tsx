import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos - Aprendendo NextJS",
  description: "Entre em contato com o Alex Nascimento",
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

export default function Contatos() {
  return (
    <main>
      <h1>Página de contatos</h1>
      <span>(xx) 9 9128-9571</span>
    </main>
  )
}