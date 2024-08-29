import React from 'react'
import Navibar from '../component/nav/Navibar'
import Fterpage from '../component/footer/Fterpage'
import CarouselPage from '../component/carousel/CarouselPage'
import './Day.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function DayPage() {
  return (
    <div>
        <Navibar></Navibar>
        <CarouselPage></CarouselPage>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        <h1>วันสำคัญทางศาสนา</h1>
        <div class="card-grid">
          <div class="card">
              <img
                class="card-image"
                src="./img/img6.jpg"
                alt="img7" />
            <div class="card-content">
            <Link to="/เนื้อหา1" className="no-underline">
              <h5 class="card-title">วันมาฆะบูชา</h5>
            </Link>
              <p class="card-text">
                วันมาฆบูชา ตรงกับวันขึ้น 15 ค่ำ เดือน 3 ถือเป็นวันสำคัญทางพระพุทธศาสนาวันหนึ่ง 
                สำหรับประวัติวันมาฆบูชา ความสำคัญของวันมาฆบูชา 
                รวมถึงกิจกรรมที่พุทธศาสนิกชนควรปฏิบัติมีอะไรบ้าง
              </p>
            </div>
          </div>

          <div class="card">

              <img
                class="card-image"
                src="./img/img2.jpg"
                alt="img8" />

            <div class="card-content">
              <Link to="/เนื้อหา2" className="no-underline">
                <h5 class="card-title">วันวิสาขบูชา</h5>
              </Link>
              <p class="card-text">
                เป็นวันที่สมเด็จพระอรหันตสัมมาสัมพุทธเจ้า ประสูติ ตรัสรู้ และปรินิพพาน 
                ซึ่งเกิดขึ้นในวันและเดือนเดียวกัน คือ ในวันเพ็ญ (ขึ้น ๑๕ ค่ำ) เดือนหก 
                หรือเดือนเวสาขะ พระจันทร์เสวยวิสาขฤกษ์
              </p>
            </div>
          </div>

          <div class="card">
              <img
                class="card-image"
                src="./img/img3.jpg"
                alt="img9" />
            <div class="card-content">
              <Link to="/เนื้อหา3" className="no-underline">
                <h5 class="card-title">วันอัฏฐมีบูชา</h5>
              </Link>
              <p class="card-text">
                เมื่อพระพุทธเจ้าเสด็จปรินิพพานแล้ว ๘ วัน มัลลกษัตริย์แห่งนครกุสินารา พร้อมด้วยประชาชน 
                และพระสงฆ์อันมีพระมหากัสสปเถระเป็นประธาน ได้พร้อมกันกระทำการถวายพระเพลิงพุทธสรีระ 
                ณ มกุฏพันธนเจดีแห่งกรุงกุสินารา
              </p>
            </div>
          </div>
        </div>
        </motion.div>


        <Fterpage></Fterpage>
    </div>
  )
}

export default DayPage