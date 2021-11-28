export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export type RepositoryItemProps = {
  repository: Repository;
}

export function RepositoryItem({
  repository
}: RepositoryItemProps) {
  return (
    <div>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acessar repositório</a>
    </div>
  );
}