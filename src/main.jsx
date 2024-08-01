import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Correct usage for React 18+
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);