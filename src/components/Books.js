/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './Form';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="books">
      <div>
        {books.map((book) => (<Book title={book.title} id={book.id} author={book.author} key={book.id} />))}
      </div>
      <AddBookForm />
    </div>
  );
};

export default Books;
