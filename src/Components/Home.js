import React, { useState } from 'react';
import Header from '../Headers/Header';
import './Home.css'
import Heading from './Heading';
import img1 from '../Images/pixelcut-export (1).png'
import img2 from '../Images/pixelcut-export (2).png'
import img3 from '../Images/pixelcut-export (3).png'
import CountUpSection from './Count';
import Footer from './Footer';


const Home = () => {
    const p_small = 'A help to those who need it'
    const p_head = "Each donation is an essential "
    const p_head2 = "help for everyone's life"


    const mod_head = 'Modern Architects for Rural India'
    const mod_p = 'To Organise and build capacities of people to engage in community development and collective actions.'


    const maxCounts = [16, 45, 26,10]; // Maximum count values for each card
    const count_names =[ 'Active Projects','Targets','Donations','Themetic Focus']

    const [data,setdata] = useState(100)

    // const abc =(e)=>{
    //     setdata(e.target.value)
    // }   
    // console.log(data)
    
    return (
        <div>
            {/* <div className="">
                <Header/>
            </div> */}

            <div className="home">
                <div className="home_sub">
                    <div className="home_txt">
                        <h2>WORLD MEETING <br /> VOLUNTEERS <br /> 2020</h2>

                        <h1>FREE WATER</h1>

                        <div className="home_btn">
                            <button className='donate_btn_3'>DONATE</button>
                            <p className='congo'>Congo - Park Virunga</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="medi_main">
                <div className="medi">
                    <div className="medi_sub">
                        <div className="">
                            <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/icon-1.png" alt="" />
                        </div>
                        <div className="medi_txt">
                            <h4>MEDICINES</h4>
                            <p>Duis tempor id nul</p>
                        </div>
                    </div>
                    <div className="medi_sub">
                        <div className="">
                            <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/icon-2.png" alt="" />
                        </div>
                        <div className="medi_txt">
                            <h4>MEDICAL AID</h4>
                            <p>Duis tempor id nul</p>
                        </div>
                    </div>
                    <div className="medi_sub">
                        <div className="">
                            <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/icon-3.png" alt="" />
                        </div>
                        <div className="medi_txt">
                            <h4>DONATIONS</h4>
                            <p>Duis tempor id nul</p>
                        </div>
                    </div>
                    <div className="medi_sub">
                        <div className="">
                            <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/icon-4.png" alt="" />
                        </div>
                        <div className="medi_txt">
                            <h4>SKILLED</h4>
                            <p>Duis tempor id nul</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="">
                <Heading small={p_small} head={p_head} head2={p_head2}/>

                <div className="">
                    <div className="help_card_main">

                        <div className="help_card">
                            <div className="help_card_img">
                                <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/cause1-1024x575.jpg" alt="" />
                                <a href="" className='donate_btn donate_btn_2'>DONATE NOW</a>
                            </div>
                            <div className="help_card_txt">
                                <h3>New Sustainability</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                                <input type='range' className="bar" value={69} ></input>
                                <div className="goal">
                                    <h6>GOAL :<span> 1340 $</span></h6>
                                    <h6>RAISED :<span> 925 $</span></h6>
                                </div>
                                <a href="" className='donate_btn donate_btn_2'>VIEW DEATILS</a>
                            </div>
                        </div>
                        <div className="help_card">
                            <div className="help_card_img">
                                <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/cause2-1024x575.jpg" alt="" />
                                <a href="" className='donate_btn donate_btn_2 donate_btn_3'>DONATE NOW</a>
                            </div>
                            <div className="help_card_txt">
                                <h3>Free Volunteering</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                                <input type='range' className="bar bar2" value={69} ></input>
                                <div className="goal">
                                    <h6>GOAL :<span> 1000 $</span></h6>
                                    <h6>RAISED :<span> 668 $</span></h6>
                                </div>
                                <a href="" className='donate_btn donate_btn_2 donate_btn_3'>VIEW DEATILS</a>
                            </div>
                        </div>

                        <div className="help_card">
                            <div className="help_card_img">
                                <img src="https://www.padovaoggi.it/~media/horizontal-hi/58809977070701/africa-bambini-2.jpg" alt="" />
                                <a href="" className='donate_btn '>DONATE NOW</a>
                            </div>
                            <div className="help_card_txt">
                                <h3>Free Volunteering</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in magna ac tellus fringilla eleifend.</p>
                                <input type='range' className="bar bar3" value={69} ></input>
                                <div className="goal">
                                    <h6>GOAL :<span> 1260 $</span></h6>
                                    <h6>RAISED :<span> 857 $</span></h6>
                                </div>
                                <a href="" className='donate_btn '>VIEW DEATILS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id='surgeons'>
                <div className="">
                    <div className="support">
                        <div className="sup_txt">
                            <h4>Support Us</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci nisl, tempus ut sem a</p>
                        </div>
                        <div className="sup_inp">
                            <input type="text" value={data}/>
                            <div className="sup_dol">
                                $
                            </div>
                        </div>
                        <div className="sup_inp_2">
                            <input type="text" value={100} readOnly onClick={abc}/>
                            <input type="text" value={200} readOnly onClick={abc}/>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </section> */}
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>

  </div>
</div>

        <section className="mod_heading">
            <Heading head={mod_head} txt={mod_p}/>

            <div className="">
                <CountUpSection  count={maxCounts}
                count_names={count_names}
                
                maxCounts={maxCounts}/>
            </div>
        </section>

        <div className="">
            <Footer/>
        </div>

        </div>
    );
};

export default Home;