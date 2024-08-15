import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CarouselPage from './component/carousel/CarouselPage';
import Navibar from './component/nav/Navibar';
import Card from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navibar/>
    <CarouselPage/>
    <Card/>
    <App/>
  </React.StrictMode>
);

