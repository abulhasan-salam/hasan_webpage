import React from 'react'
import './services.css'
import ht from './assets/icons/ht.gif'
import mt from './assets/icons/monitor.gif'
import res from './assets/icons/responsive.gif'
const Services = ({screen_size}) => {
  return (
  <>
    {screen_size[0] ? (<div className="service_con">
        <h1 className='sess_head' data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">Services</h1>
        <div className="services_main_con"  >
        <div className="service_main" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <img src={ht} alt="" className='service_img'  />
            <h2>Custom Web <br />Development</h2>
            <p className='service_p' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perspiciatis ea quaerat laboriosam rem ratione suscipit facere, cum placeat dolorem quidem a quod officia.</p>
        </div>
        <hr />
        <div className="service_main" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <img src={mt} alt="" className='service_img' />
            <h2>Front-end Development and intergation</h2>
            <p className='service_p' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perspiciatis ea quaerat laboriosam rem ratione suscipit facere, cum placeat dolorem quidem a quod officia.</p>
        </div>
        <hr />
        <div className="service_main" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <img src={res} alt="" className='service_img' />
            <h2>Responsive <br />Designing</h2>
            <p className='service_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perspiciatis ea quaerat laboriosam rem ratione suscipit facere, cum placeat dolorem quidem a quod officia.</p>
        </div>

        </div>
        
    </div>):(<div className="service_con">
        <h1 className='sess_head'data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">Services</h1>
        <div className="services_main_con"  >
        <div className="service_main" data-aos="fade-down"
        data-aos-delay="600"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <img src={ht} alt="" className='service_img' />
            <h2>Custom Web <br />Development</h2>
            <p className='service_p' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perspiciatis ea quaerat laboriosam rem ratione suscipit facere, cum placeat dolorem quidem a quod officia.</p>
        </div>
        <hr />
        <div className="service_main"  data-aos="fade-down"
        data-aos-delay="600"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <img src={mt} alt="" className='service_img' />
            <h2>Front-end Development intergation</h2>
            <p className='service_p' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perspiciatis ea quaerat laboriosam rem ratione suscipit facere, cum placeat dolorem quidem a quod officia.</p>
        </div>
        <hr />
        <div className="service_main"  data-aos="fade-down"
        data-aos-delay="600"
     data-aos-easing="linear"
     data-aos-duration="1000">
            <img src={res} alt="" className='service_img'/>
            <h2>Responsive <br />Designing</h2>
            <p className='service_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam perspiciatis ea quaerat laboriosam rem ratione suscipit facere, cum placeat dolorem quidem a quod officia.</p>
        </div>

        </div>
        
    </div>)}
  </>
    
  )
}

export default Services