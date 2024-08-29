import React from 'react'
import Navibar from '../../component/nav/Navibar'
import CarouselPage from '../../component/carousel/CarouselPage'
import Fterpage from '../../component/footer/Fterpage'
import { motion } from 'framer-motion'
import "./Holyday.css"
import { Link } from 'react-router-dom'

function Holyday1() {
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
              หน้าหลัก
          </button>
        </Link>
                <h1>วันมาฆบูชา</h1>
                  <img
                    alt="img4"
                    src="./img/img4.jpg"
                    className="image1"
                  />
                <h4>ประวัติความเป็นมา</h4>
                <p>วันมาฆบูชา ตรงกับวันขึ้น 15 ค่ำ เดือน 3 ถือเป็นวันสำคัญทางพระพุทธศาสนาวันหนึ่ง 
                สำหรับประวัติวันมาฆบูชา ความสำคัญของวันมาฆบูชา รวมถึงกิจกรรมที่พุทธศาสนิกชนควรปฏิบัติมีอะไรบ้าง</p>

                <h4>ความหมายของวันมาฆบูชา</h4>
                <p>คำว่า "มาฆะ" นั้น เป็นชื่อของเดือน 3 ย่อมาจากคำว่า "มาฆบุรณมี" หมายถึง 
                การบูชาพระในวันเพ็ญกลางเดือนมาฆะตามปฏิทินของอินเดีย หรือเดือน 3</p>

                <h4>การกำหนดวันมาฆบูชา</h4>
                <p>ความสำคัญของวันมาฆบูชา คือเป็นวันที่พระสัมมาสัมพุทธเจ้าทรงแสดง "โอวาทปาติโมกข์"แก่พระสงฆ์เป็นครั้งแรก 
                หลังจากตรัสรู้มาแล้วเป็นเวลา 9 เดือน ซึ่งหลักคำสอนนี้เป็นหลักการ และวิธีการปฏิบัติต่าง ๆ 
                หากสรุปเป็นใจความสำคัญ จะมีเนื้อหาว่า "ทำความดี ละเว้นความชั่ว ทำจิตใจให้บริสุทธิ์"</p>

                <h4>ความสำคัญของวันมาฆบูชาและประวัติวันมาฆบูชา</h4>
                <p>ความสำคัญของวันมาฆบูชา คือเป็นวันที่พระสัมมาสัมพุทธเจ้าทรงแสดง "โอวาทปาติโมกข์"แก่พระสงฆ์เป็นครั้งแรก หลังจากตรัสรู้มาแล้วเป็นเวลา 9 เดือน 
                ซึ่งหลักคำสอนนี้เป็นหลักการ และวิธีการปฏิบัติต่าง ๆ หากสรุปเป็นใจความสำคัญ จะมีเนื้อหาว่า "ทำความดี ละเว้นความชั่ว ทำจิตใจให้บริสุทธิ์"</p>
                <h5>ทั้งนี้ในวันมาฆบูชาได้เกิดเหตุอัศจรรย์ขึ้นพร้อม ๆ กันถึง 4 ประการ อันได้แก่</h5>
                    <p>1. วันนั้นตรงกับวันเพ็ญ ขึ้น 15 ค่ำ เดือน 3 ซึ่งพระจันทร์เสวยมาฆฤกษ์ </p>
                    <p>2. มีพระสงฆ์จำนวน 1,250 รูป มาประชุมพร้อมกันโดยมิได้นัดหมาย ณ วัดเวฬุวัน เมืองราชคฤห์ แคว้นมคธ เพื่อสักการะพระสัมมาสัมพุทธเจ้า</p>
                    <p>3. พระสงฆ์ที่มาประชุมทั้งหมดล้วนแต่เป็นพระอรหันต์ ผู้ได้อภิญญา 6</p>
                    <p>4. พระสงฆ์ทั้งหมดได้รับการอุปสมบทโดยตรงจากพระพุทธเจ้า หรือ "เอหิภิกขุอุปสัมปทา"</p>
                
                <h4>ประวัติวันมาฆบูชาในประเทศไทย</h4>
                <p>พิธีทำบุญวันมาฆบูชานี้ ไม่ปรากฏหลักฐานว่ามีมาในสมัยใด อย่างไรก็ตามในหนังสือ "พระราชพิธีสิบสองเดือน" อันเป็นบทพระราชนิพนธ์ของ "พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว" มีเรื่องราวเกี่ยวกับการประกอบราชกุศลมาฆบูชาไว้ว่า ประเทศไทยเริ่มกำหนดพิธีปฏิบัติในวันมาฆบูชาเป็นครั้งแรกในช่วงรัชสมัยพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว รัชกาลที่ 4 ซึ่งมีการประกอบพิธีเป็นครั้งแรกในปี พ.ศ. 2394 ในพระบรมมหาราชวังก่อน โดยมีพิธีพระราชกุศลในเวลาเช้า นมัสการพระสงฆ์จากวัดบวรนิเวศราชวรวิหารและวัดราชประดิษฐสถิตมหาสีมารามราชวรวิหาร จำนวน 30 รูป ฉันภัตตาหารในพระอุโบสถ วัดพระศรีรัตนศาสดาราม เมื่อถึงเวลาค่ำ พระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว เสด็จออก ทรงจุดธูปเทียนนมัสการ พระสงฆ์ทำวัตรเย็นและสวดคาถาโอวาทปาติโมกข์ เมื่อสวดจบทรงจุดเทียน 1,250 เล่ม รอบพระอุโบสถ มีการประโคมอีกครั้งหนึ่งแล้วจึงมีการเทศนาโอวาทปาติโมกข์ 1 กัณฑ์ เป็นทั้งเทศนาภาษาบาลี และภาษาไทย ส่วนเครื่องกัณฑ์ประกอบด้วยจีวรเนื้อดี 1 ผืน เงิน 3 ตำลึง และขนมต่าง ๆ เมื่อเทศนาจบ พระสงฆ์ 30 รูป สวดรับในสมัยรัชกาลที่ 4 นั้น พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว จะเสด็จออกประกอบพิธีด้วยพระองค์เองทุกปี แต่มีการยกเว้นบ้างในสมัยพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว รัชกาลที่ 5 เนื่องจากบางครั้งตรงกับช่วงเสด็จประพาสก็จะทรงประกอบพิธีมาฆบูชาในสถานที่นั้น ๆ ขึ้นอีกแห่ง นอกเหนือจากภายในพระบรมมหาราชวัง
                    ต่อมาการประกอบพิธีมาฆบูชาได้แพร่หลายออกไปภายนอกพระบรมมหาราชวัง และประกอบพิธีกันทั่วราชอาณาจักร ทางรัฐบาลจึงประกาศให้เป็นวันหยุดทางราชการด้วย เพื่อให้ประชาชนจากทุกสาขาอาชีพได้ไปวัด เพื่อทำบุญกุศลและประกอบกิจกรรมทางศาสนา</p>
            </div>

            </motion.div>
            
        <Fterpage></Fterpage>
    </div>
  )
}

export default Holyday1