import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readBooksThunk, removeBookThunk } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readBooksThunk());
  }, []);

  const handleClickRemove = (e) => {
    e.preventDefault();
    console.log('start handleClickRemve');
    dispatch(removeBookThunk(e.target.id));
    console.log('End handleClickRemove');
  };

  return (
    books.map((book) => (
      <div key={book.id} className="lists">
        <div className="header">
          <span>{book.category }</span>
          <h1 className="title">{book.title}</h1>
          <p className="author">{book.author}</p>
          <div className="button-container">
            <button className="comments" type="button">Comments</button>
            <button id={book.id} className="comments" onClick={handleClickRemove} type="button">Remove</button>
            <button className="comments" type="button">Edit</button>
          </div>
        </div>
        <div className="progress" />
      </div>
    ))
  );
};

export default Book;
