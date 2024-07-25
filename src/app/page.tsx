export default function Home() {
  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a página Home</span>
      <p>
        Por padrão nossos componentes com App Router são Server Side (que é renderizado do lado do servidor), e se quisermos
        usar um useState por exemplo, temos que modificar o componente para Client Side, passando "use client" na primeira
        linha do código do componente.
      </p>
    </main>
  )
}