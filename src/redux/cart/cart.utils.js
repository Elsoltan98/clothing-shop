export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );
  console.log(existingCartItems);
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
