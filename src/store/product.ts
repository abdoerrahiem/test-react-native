import {createSlice} from '@reduxjs/toolkit';
import {ProductInterface} from '../utils/interfaces';
import products from '../data/product.json';

interface InitialState {
  products: ProductInterface[];
  isLikeAll: boolean;
  isDislikeAll: boolean;
  isResetAll: boolean;
}

const initialState: InitialState = {
  products: products,
  isLikeAll: false,
  isDislikeAll: false,
  isResetAll: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsLikeAll: (state, action) => {
      state.isLikeAll = action.payload;
    },
    setIsDislikeAll: (state, action) => {
      state.isDislikeAll = action.payload;
    },
    setIsResetAll: (state, action) => {
      state.isResetAll = action.payload;
    },
  },
});

export default productSlice.reducer;

export const {setIsLikeAll, setIsDislikeAll, setIsResetAll} =
  productSlice.actions;
