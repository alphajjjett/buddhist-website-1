import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DayPage from './Pages/DayPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "วันสำคัญ",
    element: <DayPage/>,
  },
]); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

