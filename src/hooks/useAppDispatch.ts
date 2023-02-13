import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import allActions from '../store/allActions';

/* eslint-disable */
const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActions, dispatch);
};

export default useAppDispatch;
