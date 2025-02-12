import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

interface Cart {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    totalPrice: number;
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
        // If item already exists, show notification and return without making changes
        toast("Product already exists in cart", {
          icon: "ⓘ",
          duration: 5000,
          position: "top-center",
          style: {
            background: "#EF4444", // Red background for warning
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
          },
        });
        return;
      }

      // If item doesn't exist, add it to cart with quantity 1
      state.item.push({ ...product, quantity: 1, totalPrice: product.price });
      state.totalPrice += product.price;
      state.totalQuantity += 1;

      // Show success notification
      toast("Added item to cart", {
        icon: "🛍️",
        duration: 2000,
        position: "top-center",
        style: {
          background: "#60A5FA",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
      });
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;

      const existingItem = state.item.find((item) => item.id === productId);
      if (existingItem) {
        state.totalPrice -= existingItem.price;
        state.totalQuantity -= existingItem.quantity;
      }
      state.item = state.item.filter((item) => item.id !== productId);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;

      const existingItem = state.item.find((item) => item.id === productId);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalQuantity++;
        state.totalPrice += existingItem.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;

      const existingItem = state.item.find((item) => item.id === productId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      } else if (existingItem && existingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.id !== productId);
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }
    },
    clearCart: (state) => {
      state.item = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
