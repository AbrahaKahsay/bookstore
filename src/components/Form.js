import './Form.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookThunk } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({ title: '', author: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.previousElementSibling.previousElementSibling.value = '';
    e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    dispatch(addBookThunk(bookInfo));
  };

  const handleChange = (e) => {
    setBookInfo({
      ...bookInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <header className="add-new">
        <h3>ADD NEW BOOK</h3>
      </header>
      <form className="form">
        <input className="inputs" onInput={handleChange} type="text" name="title" placeholder="Book-title" />
        <input className="inputs" onInput={handleChange} type="text" name="author" placeholder="Author" />
        <select className="options" onInput={handleChange} name="category">
          <option value="History">History</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>
          <option value="Science">Science</option>
          <option value="Business">Science</option>
          <option value="Technology">Technology</option>
        </select>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <input className="submit" onClick={handleSubmit} type="submit" value="ADD BOOK" />
      </form>
    </div>

  );
};

export default AddBookForm;
