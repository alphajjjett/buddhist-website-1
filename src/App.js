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
      <h1><b>ศาสนาพุทธ</b> หมายถึง ?</h1>
      
      <div className="video-responsive">
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/QT2QS-NXiLA?si=Fr1yQ6RJw8iml1KR" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>   
        </iframe>
      </div>
      <div className='data-text'>
        <b>พุทธศาสนา</b> เป็นคำสอนที่ลึกซึ้งและซับซ้อน ไม่สามารถจำกัดให้อยู่ในหมวดหมู่เดียวได้ ไม่ว่าจะเป็นศาสนา ปรัชญา หรือวิถีชีวิต 
        พุทธศาสนาสอนเกี่ยวกับความจริงสี่ประการที่เกี่ยวข้องกับความทุกข์และการปล่อยวางความปรารถนาเพื่อบรรลุความสงบสุขในชีวิต
      </div>

    </div>
  );
}

export default App;