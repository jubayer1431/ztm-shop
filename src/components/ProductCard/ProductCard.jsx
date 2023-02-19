import { selectCartItems } from './../../store/cart/cartSelector';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './../../store/cart/cartAction';
import { ProductCartContainer, Footer, Name, Price } from './ProductCard.styes';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const handleAddItemToCart = () => dispatch(addItemToCart(product, cartItems));

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
