import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Comforter.ttf'
import './assets/fonts/DMserif.ttf'
import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Medium.ttf'
import './assets/fonts/Nunito-SemiBold.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import './assets/fonts/Nunito-ExtraBold.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
