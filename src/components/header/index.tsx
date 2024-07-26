import Link from 'next/link';
import styles from '@/components/header/header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Meu site</h1>
      <Link href="/">Home</Link> <br />
      <Link href="/contatos">Contatos</Link> <br />
      <Link href="/repositorios">Repositórios</Link> <br />
      <Link href="/dashboard">Painel</Link>

      <br /><br />
      <hr />
    </header>
  )
}