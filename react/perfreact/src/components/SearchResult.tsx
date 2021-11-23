import React, { useMemo } from "react";
import { ProductItem } from "./ProductItem";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";

type Product = {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
};

type SearchResultProps = {
  results: Product[];
  onAddToWishlist: (id: number) => void;
};

export function SearchResult({ results, onAddToWishlist }: SearchResultProps) {
  const quantity = useMemo(() => results.length, [results]);

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>Quantidade: {quantity}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
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
