const initialState = {
  items: []
};

export const addItem = (item) => {
  initialState.items.push(item);
};

export const removeItem = (id) => {
  initialState.items = initialState.items.filter(
    (item) => item.id !== id
  );
};

export const updateQuantity = (id, quantity) => {
  initialState.items = initialState.items.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );
};

export default initialState;
