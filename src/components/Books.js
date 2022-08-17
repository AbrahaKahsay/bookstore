// import React, { useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  // const [books] = useState([
  //   {
  //     title: 'The Alchemist',
  //     author: 'Paulo Cohelo',
  //     id: Math.random(),
  //   }]);
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="books">
      <div>
        {books.map((book) => (<Book title={book.title} author={book.author} key={book.id} />))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
