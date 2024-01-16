import React, { useState } from 'react';
import './skill_sec.css';
import c from './assets/icons/c.png';
import html from './assets/icons/html.png';
import css from './assets/icons/css.png';
import js from './assets/icons/js.png';
import java from './assets/icons/java.png';
import figma from './assets/icons/figma.png';
import react from './assets/icons/react.png';
import git from './assets/icons/github.png'
import tailwind from './assets/icons/tailwind.png';
import { Honeycomb, Hexagon } from 'react-honeycomb';
import range from 'lodash/range';

const items = range(9);
const sideLength = 75;

const Skill_section = ({screen_size}) => {

  const defaultskill = {
     id: 'react', img: react, title: 'React', experince: '1 years', projects: '10+', pro_des: 'React.js Developer building modern web applications' ,color:'blue'

  }

  const[hover,setHover] = useState(defaultskill)

  const skills = [
    { id: '.net', img: c, title: 'C# programming', skill_des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus deserunt voluptatum similique. Accusantium dolor commodi corrupti obcaecati labore soluta harum!', experince: '2 years', projects: '10+', pro_des: 'Professional C# Developer',color:'blue' },
    { id: 'html', img: html, title: 'HTML 5', experince: '1 year', projects: '5+', pro_des: 'Frontend Developer specializing in HTML' },
    { id: 'css', img: css, title: 'CSS 3', experince: '1 years', projects: '8+', pro_des: 'CSS Styling Expert' },
    { id: 'js', img: js, title: 'JavaScript', experince: '2 years', projects: '12+', pro_des: 'Full-stack Developer with JavaScript expertise' },
    { id: 'java', img: java, title: 'Java', experince: '2 years', projects: '15+', pro_des: 'Java Developer with enterprise-level experience' },
    { id: 'figma', img: figma, title: 'Figma', experince: '1 year', projects: '3+', pro_des: 'UI/UX Designer using Figma' },
    { id: 'react', img: react, title: 'React', experince: '1 years', projects: '10+', pro_des: 'React.js Developer building modern web applications' },
    { id: 'tailwind', img: tailwind, title: 'Tailwind CSS', experince: '1 year', projects: '6+', pro_des: 'Tailwind CSS Expert for efficient styling' },
    { id: 'git', img: git, title: 'Git', experince: '1 year', projects: '6+', pro_des: 'Tailwind CSS Expert for efficient styling' }
    // Add more skills as needed
  ];

  const handlehovering = (id) => {
    const hoveredSkill = skills.find((item) => item.id === id);
    console.log(hoveredSkill);
    setHover(hoveredSkill);
  }; 
  



  return (
  <>
     {screen_size[0] ? (<div className="skill_section">
      <div className="icons_sec" data-aos="zoom-in-down" data-aos-delay="500" data-aos-duration="1000">
        <Honeycomb
          columns={3}
          size={sideLength}
          items={items}
          renderItem={(item, index) => (
            <Hexagon key={index} className="hex">
              <img className='skill_img'
                src={skills[index % skills.length].img}
                alt={`Skill #${skills[index % skills.length].id}`}
                onMouseEnter={() => handlehovering(skills[index % skills.length].id)}
                
                
              />
            </Hexagon>
          )}
        />
      </div>
      <div className="expertise_con" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
      {hover && <div className="html_card">
           <div className="hov_img_con">
                 <img src={hover.img} alt=""  className='logo_fade'/>

        </div>
        <h1 className='skill_heading'>My Skills</h1>
        <h2 className='skill'>{hover.title}</h2>
        <p className='skill_des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus deserunt voluptatum similique. Accusantium dolor commodi corrupti obcaecati labore soluta harum!</p>

        <div className="duration_skill" data-aos="fade-up" data-aos-delay="300">
        <h3>Hands-on experince : {hover.experince}</h3>

        <h3>Total Projects : {hover.projects}</h3>

           </div>

      </div>
      }
        
        

      </div>
    </div>
):(<div className="skill_section">
<div className="icons_sec" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000">
  <Honeycomb
    columns={3}
    size={50}
    items={items}
    renderItem={(item, index) => (
      <Hexagon key={index} className="hex">
        <img className='skill_img'
          src={skills[index % skills.length].img}
          alt={`Skill #${skills[index % skills.length].id}`}
          onMouseEnter={() => handlehovering(skills[index % skills.length].id)}
        />
      </Hexagon>
    )}
  />
</div>
<div className="expertise_con" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
{hover && <div className="html_card">
     <div className="hov_img_con">
           <img src={hover.img} alt=""  className='logo_fade'/>

  </div>
  <h1 className='skill_heading' >My Skills</h1>
  <h2 className='skill'>{hover.title}</h2>
  <p className='skill_des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus deserunt voluptatum similique. Accusantium dolor commodi corrupti obcaecati labore soluta harum!</p>

  <div className="duration_skill">
  <h3>Hands-on experince : {hover.experince}</h3>

  <h3>Total Projects : {hover.projects}</h3>

     </div>

</div>
}
  
  

</div>
</div>
)}
  </>
      );
};

export default Skill_section;
