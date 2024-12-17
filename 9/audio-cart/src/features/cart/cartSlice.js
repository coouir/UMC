import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../constants/cartItems';

const initialState = {
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc + item.price * item.amount, 0),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseAmount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.amount++;
      state.total += parseInt(item.price, 10);
    },
    decreaseAmount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.amount > 1) {
        item.amount--;
        state.total -= parseInt(item.price, 10);
      }
    },
  },
});

export const { increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
