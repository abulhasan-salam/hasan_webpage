import React from 'react'
import './feedback.css'

const Feedback = () => {
  return (
    <section className="enquiry_form_con">
    
      <div className="form_content" >
        <form action="" className='full_form'>
          <h2 className='form_heading' data-aos="fade-down"
   data-aos-anchor-placement="center-bottom"  data-aos-delay="0" data-aos-duration="1000">Feedback</h2>
          <div className="nam" data-aos="fade"
   data-aos-anchor-placement="center-bottom"  data-aos-delay="0" data-aos-duration="1000">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='John Deo'/>
          </div>
          <div className="email" data-aos="fade"
   data-aos-anchor-placement="center-bottom"  data-aos-delay="0" data-aos-duration="1000">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='johndeo@gmail.com'/>
          </div>
          <div className="message_box" data-aos="fade"
   data-aos-anchor-placement="center-bottom"  data-aos-delay="0" data-aos-duration="1000">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Give some msg to as'></textarea>
          </div>
          <div className="smt_btn">
            <button className='submit_btn' data-aos="fade"
   data-aos-anchor-placement="center-bottom"  data-aos-delay="0" data-aos-duration="1000">Send</button>
          </div>
          
        </form>
      </div>
  </section>
  )
}

export default Feedback