import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    addItem: (state, action) => {

      const existingItem =
        state.cartItems.find(
          (item) =>
            item.id === action.payload.id
        );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {

      state.cartItems =
        state.cartItems.filter(
          (item) =>
            item.id !== action.payload
        );
    },

    updateQuantity: (state, action) => {

      const item =
        state.cartItems.find(
          (item) =>
            item.id === action.payload.id
        );

      if (item) {

        item.quantity =
          action.payload.quantity;

        if (item.quantity <= 0) {

          state.cartItems =
            state.cartItems.filter(
              (i) => i.id !== item.id
            );
        }
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
