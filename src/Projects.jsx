import React from 'react'
import './project.css'
import  ps from './assets/icons/ps.png'
import  lms from './assets/icons/lms.svg'
import  fb from './assets/icons/fb.jpg'
import to_do from './assets/icons/to_do.jpg'
import cal from './assets/icons/cal.jpg'
import nf from './assets/icons/netflix.png'
import ui from './assets/icons/ui.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './cardslide.css';
import { EffectCards } from 'swiper/modules';


const Projects = ({screen_size}) => {


  
  const projects_list = [
    {
      id:1,
      title: "Edumpass the Project Selling website",
      short_description: "Contributed to the development of Edumpass, an LMS platform, using the React.js framework.",
      long_description: "Implemented responsive design for all screen sizes and utilized Redux for state management. Collaborated on the front-end development to ensure a seamless user experience.",
      git_link: "https://github.com/EdumPass/Project",
      live_link: "https://edumpass-lms-live-link.com",
      img_link: lms,
      video_link: "https://example.com/edumpass-lms-video.mp4",
    },
    {
      id:2,
      title: "Facebook UI Clone using React Js",
      short_description: "Crafted a mobile-centric Facebook user-interface clone in React JS and intergration of fake REST API.",
      long_description: "Achieved seamless integration of API and JSON for dynamic content.",
      git_link: "https://github.com/your-username/facebook-ui-clone",
      live_link: "https://facebook-ui-clone-live-link.com",
      img_link: fb,
      video_link: "https://example.com/facebook-ui-clone-video.mp4",
    },
    {
      id:3,
      title: "To-Do List Application with React js",
      short_description: "Built a robust To-Do List application in React with a mock REST API for seamless task.",
      long_description: "Demonstrated proficiency in React, REST API, and effective data management.",
      git_link: "https://github.com/your-username/todo-list-with-fake-api",
      live_link: "https://todo-list-fake-api-live-link.com",
      img_link: to_do,
      video_link: "https://example.com/todo-list-fake-api-video.mp4",
    },
    {
      id:4,
      title: "Anna University CGPA Calculator",
      short_description: "Developed a CGPA calculator using JavaScript for precise academic performance.",
      long_description: "Integrated HTML and CSS for efficient functionality.",
      git_link: "https://github.com/your-username/anna-university-cgpa-calculator",
      live_link: "https://anna-university-cgpa-calculator-live-link.com",
      img_link: cal,
      video_link: "https://example.com/anna-university-cgpa-calculator-video.mp4",
    },
    {
      id:5,
      title: "Netflix UI Clone with HTML CSS",
      short_description: "Crafted a Netflix UI clone using React to replicate the user interface of the Netflix platform.",
      long_description: "Implemented features such as movie listings, dynamic content loading, and responsive design.",
      git_link: "https://github.com/your-username/netflix-ui-clone",
      live_link: "https://netflix-ui-clone-live-link.com",
      img_link: nf,
      video_link: "https://example.com/netflix-ui-clone-video.mp4",
    },
    {
      title: " webpage UI Design in Figma",
      short_description: "Crafted a online learning platform user interface with captivating animations using Figma.",
      long_description: "", 
      git_link: "", 
      live_link: "https://modern-learning-platform-figma-link.com",
      img_link: ui,
      video_link: "https://example.com/modern-learning-platform-video.mp4",
    },
    // Add more projects as needed
  ];
  return (
  <>
   {screen_size[0] ? (<div className="project_session_con">
        <h1 className='Project_session_heading' data-aos="fade-down" data-aos-delay="600">Projects</h1>

      <div className="pro_card_roll" >
          {projects_list.map((item)=>(
             <div className="pro_card" data-aos="fade-up"
             data-aos-duration="2000">
             <div className="img">
               <img src={item.img_link} alt="card__img"  className='card_img'/>
             </div>
             <div className="card_des">
                 <h3 className='card_head' >{item.title}</h3>
                 <p style={{fontSize:'13px',lineHeight:'1.5'}}>{item.short_description}</p>
             </div>
             <div className="btn_con">
                
                <button className='git_demo'>
                <a href={item.git_link}
                >  View more</a>
               
                 </button>
                <button className="demo">
                 Live Demo
                </button>
             </div>
             

         </div>

          ))}
           
            
        </div>

    </div>):(<div className="project_session">
        <h1 className='Project_session_heading' style={{fontSize: "26px"}}  data-aos="fade-down" data-aos-delay="500" data-aos-duration="500">Projects</h1>
        <div className="project_content">
        {projects_list.map((item)=>(
             <div className="pro_card_mob" data-aos="fade-left"
             data-aos-duration="2000">
                <div className="img">
               <img src={item.img_link} alt="card_img_mob"  className='card_img_mob'/>
             </div>
              <div className="inside_content">
             <div className="card_des_mob">
                 <h3 className='card_head_mob'>{item.title}</h3>
                 <p style={{fontSize:'13px',lineHeight:'1.5'}}>{item.short_description}</p>
             </div>
             <div className="btn_con_mob">
                
                <button className='git_demo_mob'>
                <a href={item.git_link}
                >  View more</a>
               
                 </button>
                <button className="demo_mob">
                 Live Demo
                </button>
             </div>
             

         </div>

              </div>
             

          ))}

        </div>

    </div>)}
  </>
    
  )
}

export default Projects