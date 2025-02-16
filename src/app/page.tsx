import { OwnerRepo } from "@/components/OwnerRepo"
interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay));
  const response = await fetch(url, { next: {revalidate: 60 } } // com esta configuração, a página será revalidada
    // a cada 60 segundos após o primeiro usuário entrar na aplicação independente da quantidade de usuário que
    // entrarão neste período! A nova requisição só será feita após 60 segundos...
    // { cache: 'force-cache' }, // este é o padrão, e ele mantém cache, a página será sempre estática (é o mais rápido)
    // { cache: 'no-store' } // todo usuário que entrar na aplicação faz uma nova requisição (busca os dados dinamicamente)
  );
  return response.json();
}

// async function getData() {
//   const response = await fetch("https://api.github.com/users/alexdev613/repos")

//   return response.json();
// }

async function getData() {
  const data = await delayFetch("https://api.github.com/users/alexdev613/repos", 750);
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a página Home</span>
      <p>
        Por padrão nossos componentes com App Router são Server Side (que é renderizado do lado do servidor), e se quisermos
        usar um useState por exemplo, temos que modificar o componente para Client Side, passando "use client" na primeira
        linha do código fora do componente.
      </p>
      <br />
      <h3>Meus repositórios</h3>
      {data.map( (item) => (
        <div key={item.id}>
          <strong>Repositório: </strong> <a>{item.name}</a>
          <br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br />
        </div>
      ))}
    </main>
  )
}