import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { readBooks, removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readBooks());
  }, []);

  const handleClick = () => dispatch(removeBook(id));
  return (
    <div className="lists">
      <div className="header">
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <div className="button-container">
          <button className="comments" type="button">Comments</button>
          <button className="comments" onClick={handleClick} type="button">Remove</button>
          <button className="comments" type="button">Edit</button>
        </div>
      </div>
      <div className="progress" />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
