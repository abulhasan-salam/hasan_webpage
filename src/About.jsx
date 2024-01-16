import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='abt_con'>
      <div className="above_p">
        <h1>About Me</h1>
        <p>
          Hello there! I'm Abulhasan, a self-taught front-end developer with a passion for creating stunning and intuitive user interfaces. I specialize in turning ideas into interactive and visually appealing web applications.
        </p>
      </div>
      
      <ul className='abt_list'>
        <li className='abt_content' data-aos="zoom-out-down" data-aos-delay="300" data-aos-duration="500"> 
          <h2>Educational Background</h2>
          <ul>
            <li>
              Completed Bachelor of Engineering in Electronics and Communication Engineering (ECE) from Anna University, Chennai.
            </li>
            <li>
              Achieved a CGPA of 8.2, earning a first-class distinction.
            </li>
          </ul>
        </li>
        <li className='abt_content'  data-aos="zoom-out-down" data-aos-delay="300" data-aos-duration="500">
          <h2>Expertise in Front-End Development</h2>
          <ul>
            <li>
              My expertise lies in front-end development, where I leverage my handson experience to create seamless and user-friendly web experiences.
            </li>
          </ul>
        </li>
        <li className='abt_content'  data-aos="zoom-out-down" data-aos-delay="300" data-aos-duration="500">
          <h2>Currently Learning</h2>
          <ul>
            <li>
              Actively expanding my skill set by learning backend technologies to fulfill my goal of becoming a full-stack developer.
            </li>
            <li>
      Exploring modern JavaScript frameworks for building dynamic and responsive user interfaces.
    </li>
          </ul>
        </li>
        <li className='abt_content'  data-aos="zoom-out-down" data-aos-delay="300" data-aos-duration="500">
  <h2>What Sets Me Apart?</h2>
  <ul>
    <li>Passion for Innovation</li>
    <li>Effective Collaboration</li>
    <li>Continuous Learning</li>
    <li>Strong Problem-Solving Skills</li>
    <li>Effective communication</li>
    <li>Analytical skills</li>
    <li>highly motivated</li>
  </ul>
</li>
      </ul>
      
      <div className="below_p">
         <h2>Let's Collaborate!</h2>
      <p>
        If you're seeking a passionate first-class front-end developer who can bring your vision to life, I'd love to connect. Check out my portfolio to explore some of my projects, and let's discuss how we can create something amazing together.
      </p>

      <p>Thank you for stopping by!</p>
      <div className="btn_abt">
        <button className='hire_me'>Contact Me</button>
      </div>

      </div>

      
    </div>
  );
};

export default About;
