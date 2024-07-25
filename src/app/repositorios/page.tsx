'use client'

import { useState, useEffect } from 'react';

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

export default function Repositorios() {
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    function getData() {
      fetch("https://api.github.com/users/alexdev613/repos")
      .then( resposne => resposne.json() )
      .then((data: DataProps[]) => {

        setRepos(data);
      })
    }

    getData()
  })
  return (
    <div>
      <h1>Página Repositórios</h1>

      {repos.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong> <a>{item.name}</a>
          <br /><br />
        </div>
      ))}
    </div>
  )
}