import { useParams } from "react-router-dom";

type Repository = {
  full_name: string;
  description: string;
  id: number;
};

export function Repository() {
  const params = useParams();
  const currentRepository = params['*'] as string;


  return (
    <div className="App">
      <h1>{currentRepository}</h1>
    </div>
  )
};

