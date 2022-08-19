import { getBooksFromServer, AddBookApi, removeBookApi } from '../../Api/Api';
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
export const addBook = (title, author, id) => async (dispatch) => {
  await AddBookApi(title, author, id);
  dispatch({
    type: ADD_BOOK,
    title,
    author,
    id,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await removeBookApi(id);
  dispatch({
    type: REMOVE_BOOK,
    id,
  });
};

// reducers
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        title: action.title,
        author: action.author,
        id: action.id,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case READ_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
