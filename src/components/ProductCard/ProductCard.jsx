import React, { useContext } from "react";
import { ProductCartContainer, Footer, Name, Price } from "./ProductCard.styes";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { CartContext } from "../../contexts/cartContext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddItemToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddItemToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
