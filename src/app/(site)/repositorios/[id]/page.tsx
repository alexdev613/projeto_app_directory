'use client'
import { useState, useEffect } from 'react';
interface PageDetailProps {
  params: {
    id: string;
  }
}

async function getData(id: string) {
  console.log(id);

  const response = await fetch("https://api.github.com/users/alexdev613/repos")
  return response.json();
}

export default async function RepositorioId({ params } : PageDetailProps) {
  const [data, setData] = useState<any>(null);
  // const data = await getData(params.id);

  useEffect(() => {
    async function fetchData() {
      const result = await getData(params.id);
      setData(result);
    }

    fetchData();
  }, [params.id]);

  if (data === null) {
    return <div><h2>Loading...</h2><p>{String(data)}</p></div>
  }

  return (
    <div>
      <h1>Página detalhes do repositório {params.id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}