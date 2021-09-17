import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
// https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform2',
  description: 'Form em React',
  html_url: "https://api.github.com/unform/unform"
};

export function RepositoryList() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de respositórios</h1>
      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem repository={ repository } key={repository.name}/>
          })
        }
      </ul>
    </section>
  )
}