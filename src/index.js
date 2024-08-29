import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DayPage from './Pages/DayPage';
import InfoPage from './Pages/InfoPage';
import About from './Pages/About';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Holyday1 from './Pages/Subpage/Holyday1';
import Holyday2 from './Pages/Subpage/Holyday2';
import Holyday3 from './Pages/Subpage/Holyday3';



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
    element: <About/>,
  },
  {
    path: "เนื้อหา1",
    element: <Holyday1/>,
  },
  {
    path: "เนื้อหา2",
    element: <Holyday2/>,
  },
  {
    path: "เนื้อหา3",
    element: <Holyday3/>,
  },
  
]); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

