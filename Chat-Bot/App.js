/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ChatBot';
const AppLayout = () => {
  return (
    <div className="app">
      <App />

    </div>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter}/>);

reportWebVitals();