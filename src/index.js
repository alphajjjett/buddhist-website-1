import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DayPage from './Pages/DayPage';
import InfoPage from './Pages/InfoPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "วันสำคัญ",
    element: <DayPage/>,
  },
  {
    path: "ข้อมูล",
    element: <InfoPage/>,
  },
  {
    path: "จัดทำ",
    element: <Profile/>,
  },
]); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

