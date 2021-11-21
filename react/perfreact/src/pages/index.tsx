import type { NextPage } from "next";
import { FormEvent, useCallback, useState } from "react";
import { SearchResult } from "../components/SearchResult";

type Product = {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
};

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);

  const addToWishlist = useCallback((id: number) => {
    console.log(id);
  }, []);

  const handleSearch = async (formEvent: FormEvent) => {
    formEvent.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3334/products?q=${search}`);
    const data = (await response.json()) as Product[];

    const products = data.map((product) => ({
      ...product,
      priceFormatted: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price),
    }));

    setResults(products);
  };

  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>
      <SearchResult results={results} onAddToWishlist={addToWishlist} />
    </div>
  );
};

export default Home;
