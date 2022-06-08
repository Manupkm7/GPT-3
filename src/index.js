/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import "./index.css";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
