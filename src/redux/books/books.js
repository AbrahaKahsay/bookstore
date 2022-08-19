import axios from 'axios';
import uuid from 'react-uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* eslint-disable no-console */
const ADD_BOOK = 'bookstore-react-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-app/books/REMOVE_BOOK';
const READ_BOOKS = 'bookstore-react-app/books/READ_BOOK';

const apiKey = 'HsQggvvk6JE8utFql7Hk';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

export const readBooksThunk = createAsyncThunk(READ_BOOKS, async () => {
  const response = await axios.get(`${baseUrl}/${apiKey}/books/`).catch((error) => { console.log(error); });
  const res = response.data;
  return Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));
});

export const addBookThunk = createAsyncThunk(
  ADD_BOOK,
  async (singleBook,
    thunkAPI) => {
    const book = {
      item_id: uuid(),
      title: singleBook.title,
      author: singleBook.author,
      category: singleBook.category,
    };
    await axios.post(`${baseUrl}/${apiKey}/books/`, book)
      .then(() => { thunkAPI.dispatch(readBooksThunk()); })
      .catch((error) => { console.log(error); });
    return thunkAPI.getState().books;
  },
);

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (bookId, thunkAPI) => {
  await axios.delete(`${baseUrl}/${apiKey}/books/${bookId}`)
    .then(() => { thunkAPI.dispatch(readBooksThunk()); })
    .catch((error) => { console.log(error); });
  return thunkAPI.getState().books;
});

const storeSlice = createSlice({
  name: 'bookstore/books',
  initialState: [],
  extraReducers: {
    [readBooksThunk.fulfilled]: (state, action) => action.payload,
    [addBookThunk.fulfilled]: (state, action) => action.payload,

  },
});

export default storeSlice.reducer;
