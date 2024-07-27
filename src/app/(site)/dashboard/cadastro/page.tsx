import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel - Cadastrando usuário",
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

export default function Cadastro() {
  return (
    <div>
      <h1>Cadastrando cliente</h1>
      <p>Essa é a página de cadastro de clientes do dashboard</p>
    </div>
  )
}