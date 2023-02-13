import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ParamsState {
  [key: string]: string;
}

const searchParams = new URLSearchParams(window.location.search);

const initialState: ParamsState = {
  search: searchParams.get('search') || '',
  page: searchParams.get('page') || '',
  status: searchParams.get('status') || '',
  gender: searchParams.get('gender') || '',
  character: searchParams.get('character') || '',
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setSearchParams: (state, { payload }: PayloadAction<ParamsState>) => {
      const { location, history } = window;
      const url = new URL(location.toString());
      const params = url.searchParams;

      Object.keys(payload).forEach((el) => {
        if (payload[el]) params.set(el, payload[el]);
        else params.delete(el);

        state[el] = payload[el];
      });

      history.pushState({}, '', url);
    },
  },
});

export default paramsSlice;
