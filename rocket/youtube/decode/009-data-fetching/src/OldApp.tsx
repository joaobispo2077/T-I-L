import { useEffect, useState } from "react"

type Repository = {
  full_name: string;
  description: string;
  id: number;
};

function OldApp() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/joaobispo2077/repos")
      .then(response => response.json())
      .then(repositories => setRepositories(repositories))
  }, []);

  return (
    <div className="App">
     <h1>Hello world</h1>

     <ul>
        {repositories.map(repository => (
          <li key={repository.id}>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OldApp
