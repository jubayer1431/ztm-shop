import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartTotal = createSelector([selectCartReducer], (cart) =>
	cart.cartItems.reduce(
		(total, currentItem) => total + currentItem.quantity * currentItem.price,
		0
	)
);

export const selectItemsCount = createSelector([selectCartReducer], (cart) =>
	cart.cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0)
);

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => cart.isCartOpen
);
