import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import paramsSlice from './slices/params';
import { api } from './slices/api';

const rootReducer = combineReducers({
  [paramsSlice.name]: paramsSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = (
  preloadedState?: PreloadedState<RootState>,
): ToolkitStore =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    devTools: true,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
