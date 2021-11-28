import { useEffect, useState } from "react";
import "../styles/repositories.scss";

import { RepositoryItem, Repository } from "./RepositoryItem";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleLoadRepos = (username: string) => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data: Repository[]) => setRepositories(data));
  };

  useEffect(() => {
    handleLoadRepos('joaobispo2077');
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <RepositoryItem repository={repo} />
          </li>
        ))}
      </ul>
    </section>
  );
}