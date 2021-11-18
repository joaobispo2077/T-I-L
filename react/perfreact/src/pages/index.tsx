import type { NextPage } from 'next'
import { FormEvent, useState } from 'react';
import { SearchResult } from '../components/SearchResult';

type Product = {
  id: number;
  title: string;
  price: number;
};


const Home: NextPage = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  const handleSearch = async (formEvent: FormEvent) => {
    formEvent.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3334/products?q=${search}`);
    const data = (await response.json()) as Product[];
    setResults(data);
  };

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" name="query" onChange={(e) => setSearch(e.target.value)} />

        <button type="submit">Search</button>
      </form>
      <SearchResult results={results} />
    </div>
  )
}

export default Home
