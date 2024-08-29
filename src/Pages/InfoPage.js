import React from 'react'
import Navibar from '../component/nav/Navibar'
import Fterpage from '../component/footer/Fterpage'
import './info.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



function InfoPage() {

  return (
    <div>
        <Navibar></Navibar>
        <h1>แหล่งที่มา</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="https://www.onab.go.th/th/page/item/index/id/1">
              <img
                class="info1"
                src="./img/info1.png"
                alt="info1" />
                </Link>
          </motion.div>
        <Fterpage></Fterpage>
    </div>
  )
}

export default InfoPage