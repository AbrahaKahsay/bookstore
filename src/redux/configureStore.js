import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    statusReducer,
  },
});

export default store;
