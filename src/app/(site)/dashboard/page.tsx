import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Painel - Aprendendo NextJS",
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

export default function Dashboard() {
  return (
    <div>
      <h1>Página painel</h1>
      <span>Bem vindo ao painel do site</span>
      <br />
    </div>
  )
}