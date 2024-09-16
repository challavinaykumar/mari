import React from 'react';
import './Volunteer.css'
import Barheading from './Barheading';
import voluenteer_img from '../Images/volunteer.jpeg'
import Footer from '../Components/Footer'

const Volunteer = () => {
    const bar_image ='https://img.freepik.com/free-photo/close-up-volunteer-teamwork-join-hands-environment-conservation-volunteering-world-environment-day_640221-254.jpg'
    const bar_head = 'volunteer / internship'
    return (
        <div>
            <div className="">
                <Barheading bar_head={bar_head} bar_image={bar_image}/>
            </div>

            <section>
                <div className="vol_main">
                    <div className="vol_img">
                        <img src={voluenteer_img} alt="" />
                    </div>
                    <div className="vol_form">
                        <h4>BECOME A VOLUNTEER / INTERNSHIP</h4>
                        <div className="vol_inp">
                            <input type="text" placeholder='Name'/>
                            {/* <input type="text" /> */}
                            <div className="vol_inp_side">
                                <input type="text" placeholder='Email'/>
                                <input type="text" placeholder='Mobile'/>
                            </div>
                            <div className="">
                                <select name="" id="">
                                    <option value="Water, Sanitation and Hygiene">Water, Sanitation and Hygiene</option>
                                    <option value="Education">Education</option>
                                    <option value="Livelihoods">Livelihoods</option>
                                    <option value="Natural Resources Management">Natural Resources Management</option>
                                    <option value="Civil Leadership - Democratic Governance">Civil Leadership - Democratic Governance</option>
                                    <option value="Child Protection and Development">Child Protection and Development</option>
                                    <option value="Sustainable Agriculture">Sustainable Agriculture</option>
                                    <option value="Emergency Response">Emergency Response</option>
                                    <option value="Health">Health</option>
                                    <option value="Networking and Advocacy Initiatives">Networking and Advocacy Initiatives</option>
                                </select>
                                <select name="" id="">
                                    <option value="">Duration of Voluenteer Work(Months)*</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="vol_inp_side">
                                <input type="date" placeholder='Date From'/>
                                {/* <input type="date" /> */}
                            </div>
                            <textarea name="" id="" placeholder='Remarks/ Additional Information'></textarea>
                            <input type="file" className='inp_file'/>
                            <button className='donate_btn'>Submit</button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="">
                <Footer/>
            </div>

        </div>
    );
};

export default Volunteer;