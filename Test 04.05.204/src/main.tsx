import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './index.css';
import '../src/components/Pages/ItemPage/ItemPage.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
 <RouterProvider router={router} />
 </React.StrictMode>
);
