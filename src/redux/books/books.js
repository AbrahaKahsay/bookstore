
// action types
const ADD_BOOK = 'bookstore-react-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-react-app/books/REMOVE_BOOK';

// initial state
const initialState = [];

// actions
export const addBook=(title, author, id) => {
    return {
        type: ADD_BOOK,
        title:title,
        author:author,
        id:id
    }
}

export const removeBook =(id)=>{
    return {
        type: REMOVE_BOOK,
        id:id
    }
}

// reducers
const booksReducer = (state=initialState, action)=>{
switch(action.type){
    case ADD_BOOK:
        return
            [...state, {
                title:action.title,
                author: action.author,
                id: action.id
            }
        ]
    case REMOVE_BOOK:
        return 
        state.filter(book => book.id !== action.id)
    default: 
    return state

}
}

export default booksReducer;