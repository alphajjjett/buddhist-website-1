import React from 'react';
import Navibar from './component/nav/Navibar';
import CarouselPage from './component/carousel/CarouselPage';
import Card from './component/card/Card';
import Fterpage from './component/footer/Fterpage';
import { motion } from "framer-motion"

import "./App.css";



function App() {
  return (
    <div>
      <Navibar></Navibar>
      <CarouselPage></CarouselPage>
      <Card></Card>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className="video-leftright"
      >
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
      </motion.div>
      
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} className="video-leftright"
        >
        <h1>ทำไมเราต้องนับถือ <b>ศาสนาพุทธ</b></h1>
        
        <div className="video-responsive">
          <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/KSoY-iwkYwc?si=kmh7HmQK5AQekuar" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>

          </iframe>
        </div>
        <div className='data-text'>
              อะไรคือสิ่งที่จะก่อให้เกิดความเชื่อ <b>ความศรัทธา</b> หรือการน้อมนำศาสนาเข้ามาอยู่ในหัวใจ? 
              สำหรับองค์ดาไลลามะที่ 14 ผู้นำแห่งพุทธศาสนาแบบทิเบต ท่านเน้นย้ำอยู่เสมอถึงความเชื่อหรือศรัทธาที่ต้องผ่านกระบวนการพิจารณาตรวจสอบ 
              และต้องตั้งอยู่บนความเป็นเหตุเป็นผล 
        </div>
        </motion.div>
        <Fterpage></Fterpage>
    </div>
  );
}

export default App;