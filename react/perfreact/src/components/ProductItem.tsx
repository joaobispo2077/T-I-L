import React, {memo} from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductItemProps = {
  product: Product;
};

const ProductItemComp: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};

const hasPropsChanged = (prevProps: ProductItemProps, nextProps: ProductItemProps) => {
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
