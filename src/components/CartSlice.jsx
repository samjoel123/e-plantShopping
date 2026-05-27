const initialState = {
  cartItems: []
};

export const addItem = (item) => {
  initialState.cartItems.push({
    ...item,
    quantity: 1
  });
};

export const removeItem = (id) => {
  initialState.cartItems =
    initialState.cartItems.filter(
      (item) => item.id !== id
    );
};

export const updateQuantity = (id, quantity) => {
  initialState.cartItems =
    initialState.cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: quantity }
        : item
    );
};

export default initialState;
