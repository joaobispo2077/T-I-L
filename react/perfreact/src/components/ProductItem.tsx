import React, { memo, useState } from "react";
import dynamic from "next/dynamic";
import { AddProductToWishListProps } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () =>
    import("./AddProductToWishList").then((mod) => mod.AddProductToWishList),
  { ssr: false, loading: () => <span>Loading...</span> }
);

type Product = {
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
};

type ProductItemProps = {
  product: Product;
  onAddToWishlist: (id: number) => void;
};

const ProductItemComp: React.FC<ProductItemProps> = ({
  product,
  onAddToWishlist,
}) => {
  const [isAddToWishlist, setIsAddToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddToWishlist(true)}>
        Adicionar aos favoritos?
      </button>
      {isAddToWishlist && (
        <AddProductToWishList
          onAddWishList={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddToWishlist(false)}
        />
      )}
    </div>
  );
};

const hasPropsChanged = (
  prevProps: ProductItemProps,
  nextProps: ProductItemProps
) => {
  return Object.is(prevProps.product, nextProps.product);
};

// memo - before create a component new version, check if props has changed
const ProductItem = memo(ProductItemComp, hasPropsChanged); // default second argument is a shallow comparison

export { ProductItem };

/**
 * Memo is a performance optimization that only renders a component if its props or state have changed.
 *
 * Use Case:
 *
 * 1. Pure Functional Component - Same html, same props, same state according to the props
 * 2. Renders to often with same props (critical)- Renders a lot of times according to the many intereactions
 * 3. Re-renders with the same props
 * 4. Medium to big component
 */
