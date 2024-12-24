import { createSlice } from "@reduxjs/toolkit";

interface Cart {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: Cart = {
  item: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.item.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += product.price;
      } else {
        state.item.push({ ...product, quantity: 1, totalPrice: product.price });
      }

      state.totalPrice += product.price;
      state.totalQuantity += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
