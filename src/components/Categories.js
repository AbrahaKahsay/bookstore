import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const state = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{state}</p>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};
export default Categories;
