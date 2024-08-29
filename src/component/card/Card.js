import React from 'react';
import "./Card.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';



function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div className='container'>
      <div className='BOX1'>
        <article className="card">
          <img
            alt="img1"
            src="./img/img1.jpg"
            className="card-image"
          />
          <div className="card-content">
            <time dateTime="01-08-2024" className="card-date"> 1 ส.ค. 2567 </time>
              <Link to="เนื้อหา1"className="text"> วันมาฆะบูชา </Link>
            <p className="card-text">
            วันมาฆบูชา ตรงกับวันขึ้น 15 ค่ำ เดือน 3 ถือเป็นวันสำคัญทางพระพุทธศาสนาวันหนึ่ง สำหรับประวัติวันมาฆบูชา ความสำคัญของวันมาฆบูชา รวมถึงกิจกรรมที่พุทธศาสนิกชนควรปฏิบัติมีอะไรบ้าง
            </p>
          </div>
        </article>
      </div>
      <div className='BOX2'>
        <article className="card">
          <img
            alt="img2"
            src="./img/img2.jpg"
            className="card-image"
          />
          <div className="card-content">
            <time dateTime="01-08-2024" className="card-date"> 1 ส.ค. 2567 </time>
              <Link to="เนื้อหา2" className="text"> วันวิสาขบูชา </Link>
            <p className="card-text">
            เป็นวันที่สมเด็จพระอรหันตสัมมาสัมพุทธเจ้า ประสูติ ตรัสรู้ และปรินิพพาน ซึ่งเกิดขึ้นในวันและเดือนเดียวกัน คือ ในวันเพ็ญ (ขึ้น ๑๕ ค่ำ) เดือนหก หรือเดือนเวสาขะ พระจันทร์เสวยวิสาขฤกษ์
            </p>
          </div>
        </article>
      </div>
      <div className='BOX3'>
        <article className="card">
          <img
            alt="img3"
            src="./img/img3.jpg"
            className="card-image"
          />
          <div className="card-content">
            <time dateTime="01-08-2024" className="card-date"> 1 ส.ค. 2567 </time>
              <Link to="เนื้อหา3" className="text"> วันอัฏฐมีบูชา </Link>
            <p className="card-text">
            เมื่อพระพุทธเจ้าเสด็จปรินิพพานแล้ว ๘ วัน มัลลกษัตริย์แห่งนครกุสินารา พร้อมด้วยประชาชน และพระสงฆ์อันมีพระมหากัสสปเถระเป็นประธาน ได้พร้อมกันกระทำการถวายพระเพลิงพุทธสรีระ ณ มกุฏพันธนเจดีแห่งกรุงกุสินารา
            </p>
          </div>
        </article>
      </div>
    </div>
  </motion.div>
  );
}

export default Card;