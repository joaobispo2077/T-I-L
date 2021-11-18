import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
};

type ProductItemProps = {
  product: Product;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};

export { ProductItem };
