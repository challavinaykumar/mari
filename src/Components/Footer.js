import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section id='footer'>
                <div className="foot_main">
                    <div className="foot_card">
                        <div className="foot_card_sub">
                            <h5>ABOUT US</h5>
                            <p>MARI envisions empowerment of vulnerable sections of the society to fight against poverty, injustice and the environmental degradation that threatens their basic livelihoods.</p>
                            <div className="foot_brands">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <div className="foot_card_sub">
                            <h5>ALL CONTACTS</h5>
                            {/* <ul> */}
                                <p className='foot_ad'><i class='bx bx-location-plus' ></i><span>Kimtee Colony, Tarnaka, Secunderabad</span></p>
                                <p className='foot_ad'><i class='bx bx-phone' ></i><span>Office +91 8121786230</span></p>
                                <p className='foot_ad'><i class='bx bx-envelope'></i><span>admin@mari-india.org</span></p>
                                <p className='foot_ad'><i class='bx bx-time' ></i><span>Mon-Sat (08 am - 06 pm )</span></p>
                            {/* </ul> */}
                        </div>
                    </div>
                    <div className="foot_card">
                        <div className="foot_card_sub">
                            <h5>SUBSCRIBE</h5>
                            <p>Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam efficitur dui vitae sem</p>
                            <div className="foot_inp">
                                <input type="text" placeholder='Insert Your Email' name="" id="" />
                                <Link className="donate_btn foot_btn">Send</Link>
                            </div>
                        </div>
                        <div className="foot_card_sub">
                            <h5>Gallery</h5>
                            <div className="foot_img">
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-9-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-8-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-3-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-4-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-5-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-7-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-10-1.jpg" alt="" />
                                <img src="https://mari-india.org/wp-content/uploads/2024/01/Untitled-design-2-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="foot_copy">
                    <p>&copy; Copyright 2024</p>
                    <p><i class="fa-solid fa-angle-right"></i> admin@mari-india.org</p>
                </div>
            </section>
        </div>
    );
};

export default Footer;