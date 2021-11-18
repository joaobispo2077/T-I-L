import React from "react";
import { ProductItem } from "./ProductItem";

type Product = {
  id: number;
  title: string;
  price: number;
};

type SearchResultProps = {
  results: Product[];
};

export function SearchResult({ results }: SearchResultProps) {
  return (
    <div>
      {results.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}
