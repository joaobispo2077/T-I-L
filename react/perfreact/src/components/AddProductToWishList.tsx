import React from 'react';

export type AddProductToWishListProps = {
  onAddWishList: () => void;
  onRequestClose: () => void;

}
export const AddProductToWishList: React.FC<AddProductToWishListProps> = ({
  onAddWishList,
  onRequestClose,
}) => {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
