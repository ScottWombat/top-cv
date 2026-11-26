import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const cvSlice = createSlice({
      name: 'cv',
      initialState: { value: 0 },
      reducers: {
          increment: (state) => {
          state.value += 1;
          },
          decrement: (state) => {
          state.value -= 1;
          },
          incrementByAmount: (state, action) => {
          state.value += action.payload;
          },
      },
})

export const { increment, decrement, incrementByAmount } = cvSlice.actions;
export default cvSlice.reducer;
