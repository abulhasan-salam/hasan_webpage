import React, { useState } from 'react'
import './header.css'
import { IoMenu } from "react-icons/io5";
import { motion, useScroll } from "framer-motion";


const Header = () => {
  const { scrollYProgress } = useScroll();
  const[navselect,setnavselect]=useState('home')
  return (
    <header>
        <div className="header_con" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
            <h1 className="heading">Portfolio</h1>
            <div className="navlist_con">
                <nav>
                    <ul>
                        <li className='slct_nav'>Home</li>
                        <li>Projects</li>
                        <li>About</li>
                    </ul>
                </nav>
                
            </div>
            <div className="mob_view">
            <div className="navlist_con_mob">
                <IoMenu style={{width:'26px',height:"auto"}} className='menu_mob'/>      
            </div>

            </div>
            
        </div>
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress}}
      />
    </header>
  )
}

export default Header