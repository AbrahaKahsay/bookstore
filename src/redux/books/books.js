import { getBooksFromServer, AddBookApi, removeBookApi } from "../../Api/Api";
// action types
const ADD_BOOK = 'bookstore-react-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-app/books/REMOVE_BOOK';
const READ_BOOKS = 'bookstore-react-app/books/READ_BOOK';

// initial state
const initialState = [];

// actions
export const readBooks = () => async (dispatch) => {
  const books = await getBooksFromServer();
  dispatch({
    type: READ_BOOKS,
    payload: books,
  });
};
export const addBook = (book) => async (dispatch) => {
  await AddBookApi(book);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await removeBookApi(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
})
};

// reducers
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case READ_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
