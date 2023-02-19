import { useSelector, useDispatch } from 'react-redux';
import {
	selectIsCartOpen,
	selectItemsCount,
} from './../../store/cart/cartSelector';
import { setIsCartOpen } from './../../store/cart/cartAction';
import {
	CartIconContainer,
	ItemCount,
	ShoppingIconContainer,
} from './CartIcon.styles';

const CartIcon = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartItemsCount = useSelector(selectItemsCount);

	const toggleIsCartOpen = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIconContainer />
			<ItemCount>{cartItemsCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
