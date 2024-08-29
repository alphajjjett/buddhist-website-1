import React from 'react'
import Navibar from '../../component/nav/Navibar'
import CarouselPage from '../../component/carousel/CarouselPage'
import Fterpage from '../../component/footer/Fterpage'
import { motion } from 'framer-motion'
import "./Holyday.css"
import { Link } from 'react-router-dom'

function Holyday3() {
  return (
    <div>
        <Navibar></Navibar>
        <CarouselPage></CarouselPage>
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      >
        <div className='text-info'>
            <Link to='/'>
                <button class="custom-button">
                    ย้อนกลับ
                </button>
            </Link>
                <h1>วันอัฏฐมีบูชา</h1>
                  <img
                    alt="img5"
                    src="./img/img3.jpg"
                    className="image1"
                  />
                <h4>ประวัติความเป็นมา</h4>
                  <p>เวันถวายพระเพลิงพระพุทธสรีระ เนื่องด้วยอัฏฐมีคือ วันแรม 8 ค่ำ แห่งเดือนวิสาขะ (เดือน 6) เป็นวันที่ถือกันว่าตรงกับวันถวายพระเพลิงพระพุทธสรีระ 
                    เมื่อถึงวันนี้แล้ว พุทธศาสนิกชนบางส่วน ผู้มีความเคารพกล้าในพระพุทธองค์ มักนิยมประกอบพิธีบูชา ณ ปูชนียสถานนั้น ๆ</p>

                <h4>ความสำคัญของวันวิสาขบูชา</h4>
                  <p>ถือเป็นวันที่ตรงกับวันที่ตรงกับวันถวายพระเพลิงพระพุทธสรีระเป็นวันที่ชาวพุทธต้องวิปโยค และสูญเสียพระบรมสรีระแห่งองค์พระบรมศาสดา 
                    ซึ่งเป็นที่เคารพสักการะอย่างสูงยิ่ง และเป็นวันควรแสดงธรรมสังเวชและระลึกถึงพระพุทธคุณให้สำเร็จเป็นพุทธานุสสติภาวนามัยกุศล</p>
                
                <h4>ประวัติวันมาฆบูชาในประเทศไทย</h4>
                  <p>เป็นวันสำคัญทางพระพุทธศาสนาวันหนึ่ง ซึ่งตรงกับวันแรม 8 ค่ำ เดือน 6 หรือวันแรม 8 ค่ำ แห่งเดือนวิสาขะ 
                    หรือ แรม 8 ค่ำ เดือน 7 ในปีอธิกมาส วันอัฐมีบูชา เป็นวันสำคัญทางพระพุทธศาสนาอีกวันหนึ่ง คือ 
                    เป็นวันถวายพระเพลิงพระพุทธสรีระของพระพุทธเจ้า หลังจากเสด็จดับขันธ์ปรินิพพานได้ 8 วัน คือหลังจากวันวิสาขบูชาแล้ว 8 วัน 
                    เป็นที่น่าเสียดายว่า วันอัฏฐมีบูชานี้ ในเมืองไทยเรามักลืมเลือนกันไปแล้ว จะมีเพียงบางวัดเท่านั้น ที่จัดให้มีการประกอบกุศลพิธีในวันนี้
                  </p>

                  <p>
                  วันอัฏฐมีบูชา เป็นวันที่ถือกันว่าตรงกับ วันถวายพระเพลิงพระพุทธสรีระ (เผาศพพระพุทธเจ้า) วันนี้จึงเรียกว่า “วันอัฏฐมีบูชา” 
                  ซึ่งประวัติความเป็นมาของวันอัฏฐมีบูชา คือ เมื่อวันเพ็ญ ขึ้น 15 ค่ำ เดือน 3 ในพรรษาที่ 45 พระพุทธเจ้าได้ทรงประชวรหนัก 
                  ซึ่งเป็นเวลาก่อนที่พระองค์จะเสด็จดับขันธ์ปรินิพพาน ได้ทรงปลงมายุสังขาร โดยพระพุทธเจ้าตรัสเตือนภิกษุทั้งหลายว่า
                  </p>

                  <p>
                  “ดูก่อนภิกษุทั้งหลายอันว่าสังขารทั้งหลาย ย่อมมีความเสื่อมสลายไปเป็นธรรมดา ทั้งหลายจงยังกิจทั้งปวงอันเป็นประโยชน์ของตน 
                  และประโยชน์ของผู้อื่นให้บริบูรณ์ด้วยความไม่ประมาท ให้ถึงพร้อมเถิด ความปรินิพพานแห่งตถาคต จักมีในไม่ช้า โดยล่วงไปอีกสามเดือนแต่นี้ 
                  ตถาคตก็จักปรินิพพาน ฯ” 
                  </p>

                  <p>
                  เมื่อพระพุทธเจ้าเสด็จปรินิพพานแล้ว 7 วัน มัลลกษัตริย์ แห่งนคร กุสินารา พร้อมด้วยประชาชน และพระสงฆ์ 
                  อันมีพระมหากัสสปเถระเป็นประธาน ได้พร้อมกันกระทำการถวายพระเพลิงพุทธสรีระ ณ มกุฏพันธนเจดีย์ กรุงกุสินารา 
                  เมื่อวันแรม 8 ค่ำ เดือน 6 และภายหลังจากการถวายพระเพลิงพระพุทธสรีระแล้ว กษัตริย์และ ผู้ครองแคว้นต่าง ๆ
                  รวม 7 แคว้น ได้แก่
                  </p>

                  <p className='text2'>1. พระเจ้าอชาตศัตรู เมืองมคธ</p>
                  <p className='text2'>2. กษัตริย์ลิจฉวี เมืองเวสาลี</p>
                  <p className='text2'>3. กษัตริย์ศากยะ เมืองกบิลพัสดุ์</p>
                  <p className='text2'>4. กษัตริย์ถูลี เมืองอัลกัปปะ</p>
                  <p className='text2'>5. กษัตริย์โกลิยะ เมืองรามคาม</p>
                  <p className='text2'>6. มหาพราหมณ์ เมืองเวฏฐทีปกะ</p>
                  <p className='text2'>7. กษัตริย์มัลละ เมืองปาวา</p>

                  <p>
                  ได้ส่งทูตมาขอแบ่งพระบรมสารีริกธาตุ ตอนแรกพวกเจ้ามัลละ แห่งนครกุสินารา ไม่ยอมแบ่งให้จนเกือบจะเป็นชนวน 
                  ให้เกิดสงครามระหว่างพวกเจ้ามัลละกับกษัตริย์และพราหมณ์ทั้ง 7 แคว้นที่มาขอส่วนแบ่ง แต่เหตุการณ์ความขัดแย้งก็ระงับลงได้โดยมีพราหมณ์คนหนึ่งชื่อ
                   “โทณะ” เข้ามาไกล่เกลี่ยข้อพิพาทระหว่างกษัตริย์ และพราหมณ์เหล่านั้น ความว่า “ดูกรท่านผู้เจริญทั้งหลาย 
                   ขอพวกท่านจงฟังคำอันเอกของข้าพเจ้าพระพุทธเจ้าของเรา ทั้งหลาย เป็นผู้กล่าวสรรเสริญขันติ การจะสับประหารกันเพราะส่วนพระสรีระ 
                   ของ พระพุทธเจ้าผู้เป็นอุดมบุคคลเช่นนี้ไม่ดีเลย ขอเราทั้งหลายทั้งปวง จงยินยอมพร้อมใจยินดีแบ่งพระสรีระออกเป็นแปดส่วนเถิด 
                   ขอพระสถูปจงแพร่หลายไป ในทิศทั้งหลาย ชนผู้เลื่อมใสต่อพระพุทธเจ้าผู้มีพระจักษุมีอยู่มาก ฯ”
                  </p>

                  <p>
                  ด้วยวาทะของโทณะพราหมณ์ ทำให้มัลละกษัตริย์ยอมปรองดองกับกษัตริย์และพราหมณ์ 
                  โดยตกลงกันให้โทณะพราหม์เป็นผู้จัดการแบ่งพระบรมสารีริกธาตุให้แก่แคว้นต่าง ๆ 
                  โดยเท่ากัน ซึ่งโทณะพราหมณ์ด้รับทะนานทองที่ใช้ในการตวงพระบรมสารีริกธาตุไว้เป็นที่ระลึก
                  </p>

                  <p>
                  ในวันอัฏฐมีบูชาหรือวันถวายพระเพลิงพระพุทธสรีระนั้น นับเป็นวันหนึ่งที่ชาวพุทธมีความโศกเศร้าเป็นอย่างยิ่ง 
                  เพราะการสูญเสียประทีปที่นำทางให้มวลมนุษย์ก้าวล่วงสังสารวัฏ ดังนั้นเมื่อวันอัฏฐมีบูชาเวียนมาบรรจบแต่ละปี 
                  พุทธศาสนิกชนบางส่วน โดยเฉพาะพระสงฆ์และอุบาสกอุบาสิกาในแต่ละวัด จะได้พร้อมกันประกอบพิธีบูชาขึ้นเป็นการเฉพาะภายในวัด
                  แต่วิถีการปฏิบัติกัน มาแต่เมื่อใดนั้น ไม่พบหลักฐาน ซึ่งปัจจุบันนี้ก็ยังถือปฏิบัติกันอยู่
                  </p>

            </div>
            </motion.div>
        <Fterpage></Fterpage>
    </div>
  )
}

export default Holyday3