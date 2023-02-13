// redux
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// components
import App from './App';
import { setupStore } from './store';

// global styles
import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>,
);
