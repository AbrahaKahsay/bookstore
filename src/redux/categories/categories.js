// action types
const CHECK_STATUS = 'bookstore-react-app/books/CHECK_STATUS';
// initial state
const initialState = [];

// actions
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// add reducer
const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default statusReducer;
