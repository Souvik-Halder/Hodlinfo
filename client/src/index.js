import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import register from './serviceWorkerDev';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

register();