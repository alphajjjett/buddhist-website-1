import React from 'react';
import './nav.css' ;

function Navibar() {
  return (
    <nav className='bg p-4'>
      <div className="flex items-center justify-between">
        {/* logo */}
        <img src="./logo/logo1.png" alt='logo1' className="budhalogo" />

        <ul className='md:flex space-x-4'>
          <li><a href="#" className='text'>หน้าหลัก</a></li>
          <li><a href="#" className='text'>วันสำคัญ</a></li>
          <li><a href="#" className='text'>แหล่งที่มา</a></li>
          <li><a href="#" className='text'>ผู้จัดทำ</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navibar;
