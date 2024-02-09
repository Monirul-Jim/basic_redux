import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type CounterType = {
  count: number;
};
const initialState: CounterType = { count: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByFive: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
export const { increment, incrementByFive, decrement } = counterSlice.actions;
export default counterSlice.reducer;
