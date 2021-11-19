import React, { useMemo } from "react";
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
  const quantity = useMemo(() => results.length, [results]);

  return (
    <div>
      <h2>Quantidade: {quantity}</h2>
      {results.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}

/**
 * useMemo - React hook para memorizar um valor
 *
 * Use case:
 *
 * 1. Cálculos pesados
 * 2. Igualdade referêncial (Quando um valor é repassado para um componente filho)
 */
