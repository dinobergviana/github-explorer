import { RepositoryItem } from "./RepositoryItem";

const repository = {
  title: 'unform',
  description: 'Form em React',
  link: "https://github.com/unform/unform"
};
export function RepositoryList() {
  return (
    <section>
      <h1>Lista de respositórios</h1>
      <ul>
        <RepositoryItem 
          repository={ repository } />
        <RepositoryItem repository={ repository }/>
        <RepositoryItem repository={ repository }/>
        <RepositoryItem repository={ repository }/>
      </ul>
    </section>
  )
}