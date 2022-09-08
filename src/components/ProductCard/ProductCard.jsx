import React, { useContext } from "react";
import "./_ProductCard.scss";
import Button from "../Button/Button";
import { CartContext } from "../../contexts/cartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = () => addItemToCart(product);

  return (
    <div className={"product-card-container"}>
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType={"inverted"} onClick={handleAddItemToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
