import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from './../../store/cart/cartSelector';
import {
	addItemToCart,
	decreaseItemFromCart,
	removeItemFromCart,
} from './../../store/cart/cartAction';
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	Value,
} from './CheckoutItem.styles';

const CheckoutItem = ({ product }) => {
	const { imageUrl, name, quantity, price } = product;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const handleIncreaseItemQuantity = () =>
		dispatch(addItemToCart(product, cartItems));
	const handleDecreaseItemQuantity = () =>
		dispatch(decreaseItemFromCart(product, cartItems));
	const handleRemoveItemFromCart = () =>
		dispatch(removeItemFromCart(product, cartItems));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={handleDecreaseItemQuantity}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={handleIncreaseItemQuantity}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>{price}</BaseSpan>
			<RemoveButton onClick={handleRemoveItemFromCart}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
