import { useSelector } from 'react-redux';
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './CartDropdown.styles';
import Button from '../Button/Button';
import { selectCartItems } from './../../store/cart/cartSelector';

import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} product={item} />)
				) : (
					<EmptyMessage>Your Cart Is Empty.</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={() => navigate('/checkout')}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
