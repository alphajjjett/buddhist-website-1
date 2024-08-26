import React from 'react';
import { Link } from "react-router-dom";
import './nav.css' ;

function Navibar() {
  return (
    <nav className='bg p-4'>
      <div className="flex items-center justify-between">
        {/* logo */}
        <img src="./logo/logo1.png" alt='logo1' className="budhalogo" />

        <ul className='md:flex space-x-4'>
          <li><Link to="/" className='text'>หน้าหลัก</Link></li>
          <li><Link to="/วันสำคัญ" className='text'>วันสำคัญ</Link></li>
          <li><Link to="/ข้อมูล" className='text'>แหล่งที่มา</Link></li>
          <li><Link to="/จัดทำ" className='text'>ผู้จัดทำ</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navibar;
