import React from 'react'
import './maincard.css'
import my_img from './assets/1.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Typewriter from 'typewriter-effect';



const Maincard = ({screen_size}) => {


  
  return (
    <>
    {screen_size[0] ? (<div className="maincard_con">
    <div className="maincard" data-aos="zoom-out-up" data-aos-delay="600" data-aos-duration="1000" data-aos-offset='0'>
        <div className="card_con">
            <div className="card_content">
                <h1  data-aos="fade-right" data-aos-delay="800" data-aos-duration="500">Step into my Digital Realm ! 🌟</h1>
                <h1 className='name' data-aos="fade-right" data-aos-delay="900" data-aos-duration="500">I'm Abulhasan Self taught </h1>
                <h1 className='role' data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500">
                <Typewriter
                    options={{
                        strings: ['Front-end developer', 'React js Developer','Ui Designer','Programmer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
</h1>
                <p className='des' data-aos="fade-right" data-aos-delay="1100" data-aos-duration="500">Self-taught front-end UI developer and web developer. Adept in the use of associated frameworks and reactJs for developing dynamic and responsive user interfaces. Strong knowledge of cross-browser compatibility, user experience, and web design standards. Familiar with accessibility standards. Responds proactively to changing frontend software developments and design trends.</p>
            <div className="btns">
                <button className="hire_me">Hire Me</button>
                <button className="dwn_cv">Download CV</button>
            </div>
            </div>
            
            <div className="img_con" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                <img src={my_img} alt="" className='my_img'  />
            </div>
            <div className="soc_con" data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000">
                <div className="soc">
                    <FaLinkedin style={{width:'30px',height:'auto'}} data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000"/>
                    <FaGithubSquare style={{width:'30px',height:'auto'}}data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000"/>
                    <FaSquareInstagram style={{width:'30px',height:'auto'}}data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000"/>
                    <BiLogoGmail style={{width:'30px',height:'auto'}}data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000"/>
                </div>
            </div>
            
        </div>
    </div>
   </div>):(<div className="maincard_con">
    <div className="maincard" data-aos="zoom-out-up" data-aos-delay="600" data-aos-duration="1000" data-aos-offset='0'>
        <div className="card_con">
            <div className="card_content">
                <div className="head_con">
                <h1 className='intro' data-aos="fade-down" data-aos-delay="800" data-aos-duration="500">Step into my Digital Realm !</h1>
                <h1 className='name' data-aos="fade-down" data-aos-delay="800" data-aos-duration="500">I'm <br /> Abul<span className='out_name'>hasan</span> <br />Self taught </h1>
                <h1 className='role' data-aos="fade" data-aos-delay="800" data-aos-duration="1000">
                <Typewriter
                    options={{
                        strings: ['Front-end developer', 'React js Developer','Ui Designer','Programmer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h1>
                </div>
                <div className="img_con" >
                <img src={my_img} alt="" className='my_img'  data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000"/>
            </div>
            <div className="p_card">
            <p className='des' data-aos="fade-down" data-aos-delay="1100" data-aos-duration="800" style={{textAlign:"left"}}>Hands-on Experienced Frontend UI Developer and Web developer skilled in HTML5,Semantic HTML, JSX, CSS and JavaScript libraries. Proficient in ReactJS and related libraries for dynamic and responsive UI development. Strong understanding of web design standards, cross-browser compatibility, and user experience. Knowledgeable in accessibility guidelines. Proactively adapts to evolving design practices and software advancements in the frontend space.</p>
            </div>
                
            <div className="btns">
                <button className="hire_me">Hire Me</button>
                <a href={my_img} download> <button className="dwn_cv">Download CV</button></a>
            </div>
            </div>
            <div className="soc_con" data-aos="fade-up"
             data-aos-duration="1000">
                <div className="soc">
                    <FaGithubSquare style={{width:'30px',height:'auto'}}data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000"/>
                    <FaSquareInstagram style={{width:'30px',height:'auto'}}data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000"/>
                    <FaLinkedin style={{width:'30px',height:'auto'}} data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000"/>
                    <BiLogoGmail style={{width:'30px',height:'auto'}}data-aos="fade-right" data-aos-delay="900" data-aos-duration="1000"/>
                </div>
            </div>
            
        </div>
    </div>
   </div>)}
    
 </>
    
   
   
   
  )
}

export default Maincard