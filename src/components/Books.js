import React from "react";
import Book from './Book';
import Form from './Form';

const Books = ()=> {
    return (
        <div className="books">
            <div className="books-header">
                <h1> Bookstore CMS</h1>
            </div>
            <Book />
            <Form />
        </div>
    )
}

export default Books;