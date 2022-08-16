
// action types
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// initial state
const initialState = {
    books: []
};

// actions
function addBook(){
    return {
        type: ADD_BOOK
    }
}

function removeBook(){
    return {
        type: REMOVE_BOOK
    }
}

// reducers
const reducer = (state=initialState, action)=>{
switch(action.type){
    case ADD_BOOK:
        return{
            ...state,
        books: [...state.books, action.newBook]
        }
    case REMOVE_BOOK:
        return {
            ...state,
            books: state.books.filter(book => book.id !== id)
        }
    default: 
    return state

}
}