import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

type Repository = {
  full_name: string;
  description: string;
  id: number;
};

export function Repositories() {
  const { data: repositories, isFetching } = useQuery<Repository[]>('@repositories', {
    queryFn: async () => {
      const response = await axios.get("https://api.github.com/users/joaobispo2077/repos");
      return response.data;
    },
    staleTime: 1000 * 60 // 1 minute
  });
  return (
    <div className="App">
      <h1>Hello world</h1>
      {isFetching ? <p>Loading...</p> : (
        <ul>
          {repositories?.map(repository => (
            <li key={repository.id}>
              <Link to={`repos/${repository.full_name}`}>
                <strong>{repository.full_name}</strong>
              </Link>
              <p>{repository.description}</p>
            </li>
          ))}
        </ul>)}
    </div>
  )
};

