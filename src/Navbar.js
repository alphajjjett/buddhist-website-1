import React from 'react'
import { Nav } from 'react-bootstrap'
import './Navbar.css' // อย่าลืม import ไฟล์ CSS

function Navbar() {
  return (
    <div className="navbar-container">
        <Nav>
            <ul>
                <h1>This gonna be a logo</h1>
                <li>วันสำคัญทางศาสนา</li>
                <li>แหล่งข้อมูล</li>
                <li>ผู้จัดทำ</li>
            </ul>
        </Nav>
    </div>
  )
}

export default Navbar
