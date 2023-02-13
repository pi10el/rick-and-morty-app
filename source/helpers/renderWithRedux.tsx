import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../store';

interface IRenderWithRedux {
  // eslint-disable-next-line
  (component: JSX.Element, initialState?: any): RenderResult;
}

const renderWithRedux: IRenderWithRedux = (component, initialState = {}) => {
  const store = setupStore(initialState);

  return render(<Provider store={store}>{component}</Provider>);
};

export default renderWithRedux;
