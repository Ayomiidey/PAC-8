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
  reducers: {},
});

export default cartSlice.reducer;
