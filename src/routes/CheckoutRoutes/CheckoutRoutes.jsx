import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectCartTotal,
} from './../../store/cart/cartSelector';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './CheckoutRoutes.styles';

const CheckoutRoutes = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Name</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} product={item} />
			))}

			<Total>Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default CheckoutRoutes;
