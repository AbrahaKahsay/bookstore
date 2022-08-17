import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [inpTitle, setInputTitle] = useState('');
  const [inpAuthor, setInputAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title: inpTitle,
      author: inpAuthor,
      id: uuidv4(),
    };

    if (inpTitle && inpAuthor) {
      dispatch(addBook(newBook.title, newBook.author, newBook.id));
      e.target.title.value = '';
      e.target.author.value = '';
    }
  };
  return (
    <div>
      <header>
        <h3>ADD NEW BOOK</h3>
      </header>
      <form onSubmit={handleSubmit}>
        <input onInput={(e) => { setInputTitle(e.target.value); }} type="text" name="title" placeholder="Book-title" />
        <input onInput={(e) => { setInputAuthor(e.target.value); }} type="text" name="author" placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBookForm;
