import React from 'react';
import Barheading from '../Components/Barheading'
import './Contact.css'
import Footer from './Footer';

const Contact = () => {
    const bar_image = 'https://sswm.info/sites/default/files/inline-images/photo-of-child-carrying-jug-2382878.jpg'
    const bar_head = 'Contact'
    return (
        <div>
            <div className="">
                <Barheading bar_image={bar_image} bar_head={bar_head}/>
            </div>
            <section className="">
                <div className="contact_det">
                    <div className="heading con_heading" >
                        <small>Get in Touch With Us</small>
                        <div className="head_sub">
                        <h1>Contact Us for any </h1>
                        <h1>questions !</h1>
                        </div>
                       <p>MARI envisions empowerment of vulnerable sections of the society to fight against poverty, injustice and the environmental degradation that threatens their basic livelihoods.</p>
                       <button className='donate_btn'>DETAILS</button>
                    </div>
                    <div className="con_inp">
                        <input type="text" placeholder='Name'/>
                        <input type="text" placeholder='Email'/>
                        <select name="" id="">
                            <option value="Funding / Donations">Funding / Donations</option>
                            <option value="Collaborations">Collaborations</option>
                            <option value="Experimental Learning">Experimental Learning</option>
                            <option value="Other Oppertunities">Other Oppertunities</option>
                        </select>
                        <textarea name="" id="" placeholder='Message'></textarea>
                        <button className='donate_btn_3'>send</button>
                    </div>
                </div>
            </section>

            <div className="con_iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68478.30125032789!2d78.47645484289684!3d17.439050287371888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726418909458!5m2!1sen!2sin"  style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="cont_card_main">
                    <div className="cont_card">
                        <h4>Contact Organization</h4>
                        <p className='foot_ad '><i class='bx bx-location-plus' ></i><span>Kimtee Colony, Tarnaka, Secunderabad</span></p>
                        <p className='foot_ad ' ><i class='bx bx-phone' ></i><span>Office +91 8121786230</span></p>
                        <p className='foot_ad ' ><i class='bx bx-envelope' ></i><span>admin@mari-india.org</span></p>
                         <button>Join Now</button>
                    </div>
                </div>
            </div>

            <div className="">
                <Footer/>
            </div>
        </div>
    );
};

export default Contact;