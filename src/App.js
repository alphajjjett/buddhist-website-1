import React from 'react';
import Navibar from './component/nav/Navibar';
import CarouselPage from './component/carousel/CarouselPage';
import Card from './Card';
import "./App.css";


function App() {
  return (
    <div>
      <Navibar></Navibar>
      <CarouselPage></CarouselPage>
      <Card></Card>
      <div>page 1</div>
    </div>
  );
}

export default App;