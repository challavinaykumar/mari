import React, { useState } from 'react';
import './Ourorganization.css'
import Barheading from './Barheading';
import our_organize from '../Images/our_organize.jpeg'
// import Header from '../Headers/Header';
// import Heading2 from './Heading2';
import gensis1 from '../Images/genisis1.png'
import gensis_2 from '../Images/genisis_2.png'
import Heading from '../Components/Heading'
import award_cup from '../Images/award_cup.png'
import arundati from '../Images/G. Arundathi.jpeg'
import Suresh from '../Images/K. Suresh.jpeg'
import jayarama from '../Images/P. Jayarama Rao.jpeg'
import murali from '../Images/R.Murali.jpeg'
import hemamalini from '../Images/T.Hemanalini.jpeg'
import sesha_sai from '../Images/K.V.Sesha Sai.jpg'
import Ramarao from '../Images/K.Ramarao.jpeg'
import Footer from './Footer';



const Ourorganization = () => {
    const bar_image = our_organize

    const small = 'Modern Architects for Rural India'
    const head = 'GENESIS'

    const award_small = 'Each drop creates the sea'
    const award_head = 'AWARDS'

    const board_heading = 'Our Board Members'
    const board_small = 'Board takes the decission'
    // const 
    
    const bar_head = 'Our Organization'


    const [award_data,setaward_data] = useState([
        {
        image:award_cup,
        year:1993,
        txt:'Warangal District Best NGO Award'
        },
        {
            image:award_cup,
            year:1995   ,
            txt:'Warangal District Best NGO Award'
        },
        {
            image:award_cup,
            year:'2002 to 2005',
            txt:'Warangal District Best NGO Award –',
            text_2:'Won 5th Prize from SDC-IC Swiss Agency'
        },
        {
            image:award_cup,
            year:2004,
            txt:'Best Participant Award in National',
            text_2:'Environment Awareness Campaign'

        },
        {
            image:award_cup,
            year:2005,
            txt:'Won Micro Process Excellence Award',
            text_2:'under Flame Category of MPEA'
        },
        {
            image:award_cup,
            year:2006,
            txt:'Micro Process Excellence',
            text_2:'Participation Certificate of MPEA'
        },
        {
            image:award_cup,
            year:2007,
            txt:'Micro Insurance Award Participate',
            text_2:'Certificate of Excellence'

        },
        {
            image:award_cup,
            year:2004,
            txt:'Best Participant Award in National',
            text_2:'Environment Awareness Campaign'
        }
            
])

    const [board_mem,setboard_mem] = useState([{
        image:arundati,
        name:'G. Arundathi',
        role:'President',
        txt:'As a pioneer in the educational community, Gangula Arundathi has amassed over 40 years of experience in the field.',
    },
    {
        image:jayarama,
        name:'P. Jayarama Rao',
        role:'Director',
        txt:'He brings unparalleled experience and empathy to his role, which stems from over four decades of dedicated',
    },
    {
        image:hemamalini,
        name:'T.Hemanalini',
        role:'Vice President',
        txt:'She is an esteemed educator and a dynamic motivational speaker with extensive experience across various government colleges in Telangana.',
    },
    {
        image:murali,
        name:'R.Murali',
        role:'Executive Director',
        txt:'He has 38 years of experience in social development and plays a crucial role in steering MARI towards remarkable achievements in social development work.',
    },
    {
        image:Suresh,
        name:'K. Suresh',
        role:'Secretary',
        txt:'He is an agricultural professional with over three decades of experience in the development sector.',
    },
    {
        image:sesha_sai,
        name:'K.V.Sesha Sai',
        role:'Joint Secretary',
        txt:'He is an expert in financial management and statutory compliance, with extensive experience in the NGO sector. ',
    },
    {
        image:Ramarao,
        name:'K.Ramarao',
        role:'Treasurer',
        txt:'He brings over 35 years of comprehensive experience in the development sector, enhanced by a robust academic foundation in Commerce and financial management.',
    },
])
    return (
        <div>
            {/* <div className=""></div> */}
            <div className="our_bar_head">
                <Barheading bar_image={bar_image} bar_head={bar_head}/>
            </div>
            <section id='our_orga'>
                <div className="">
                    <div className="gen_main">
                        <div className="gen_img">
                            <img src={gensis1} alt="" />
                        </div>
                        <div className="gen_head">
                        <div className="">

                        <div className="heading impo_head2"  style={{textAlign:'left'}}>
                                <small>{small}</small>
                                <div className="head_sub">
                                <h1 style={{marginLeft:'-25px'}}>{head}</h1>
                                </div>

                        </div>


                            {/* <Heading2 small={small} head={head} /> */}
                            <div className="gen_txt">
                                <p>Modern Architects for Rural India (MARI) was started by a team of young professionals with social work background having a desire for heralding change towards egalitarian society. The founding members of the organization come from rural and tribal areas; who have undergone various hardships to complete higher education in social work.</p><br />
                                <p>They made a conscious choice of investing their professional knowledge, skills and experience for improving quality of lives in rural areas, in particular marginalised people, to achieve sustainable development. Immediately after establishing of MARI, R. Murali, Executive Director of MARI received one year fellowship (1989-90) from Gandhi Peace Centre (GPC).</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="">
                    <div className="gen_main gen_main_2">
                        
                        <div className="gen_head">
                        <div className="">

                        {/* <div className="heading impo_head2"  style={{textAlign:'left'}}>
                                <small>{small}</small>
                                <div className="head_sub">
                                <h1 style={{marginLeft:'-25px'}}>{head}</h1>
                                </div>

                        </div> */}


                            {/* <Heading2 small={small} head={head} /> */}
                            <div className="gen_txt">
                                <p>The fellowship was used to select project area and identify needs and priorities of local communities. Parvathagiri mandal, a remote and backward mandal, in Warangal district was selected for initial intervention of the organisation. The GPC fellowship, thus, laid foundation for initiating organisational activities.</p><br />
                                <p>Additionally, in-depth study was carried out on the experience of the NGO sector in dealing with development action; and gathered experts’ inputs on developmental priorities. All the above helped MARI to better inform and equip on issues and concerns of the poor and marginalised sections, and find solutions thereof. The strategies, approaches and interventions of MARI were thus evolved based on infelt needs of people. In the process, it could influence people centric policies and programs.</p>
                                <p>During the course of more than 28 years journey, MARI has implemented a range of programmes to help people manage their own affairs sustainably, whilst simultaneously focusing on improving their living standards. MARI has also consciously made effort to link its work with other processes. Hence, macro-political and economic policies are closely observed, studied and assessed for understanding their impact on MARI’s work and its target population. In the process, it could influence people centric policies and programs.</p>
                            </div>
                        </div>
                        </div>
                        <div className="gen_img">
                            <img src={gensis_2} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            <div className='vision_card_main'>
                <div className="vision_card_sub">
                    <div className="vision_card">
                        <h1>VISION</h1>
                        <p>MARI envisions empowerment of vulnerable sections of the society to fight against poverty, injustice and the environmental degradation that threatens their basic livelihoods. This should lead to establishing conditions in favour of sustainable growth.</p>
                    </div>
                    
                    <div className="vision_card" >
                        <h1 style={{color:"#FD9F00"}}>MISSION</h1>
                        <p>Promoting strong community based organizations of the poor and disadvantaged, enabling them to mobilize resources from within government and other agencies and guide them to work together for sustainable development</p>
                    </div>

                </div>
            </div>


            <section id='awards'>
                <div className="">
                    <div className="awards_main">
                        <div className="">
                            <Heading small={award_small} head={award_head}/>
                        </div>

                        <div className="awards_map">
                            {award_data.map(e=>{
                                return(
                                    <div className="awards_sub">
                                        <img src={e.image} alt="" className='award_img'/>
                                        <div className="awards_txt">
                                            <h3>{e.year}</h3>
                                            {e.txt && <p>{e.txt}</p>}
                                            {<e className="txt_2"></e> && <p>{e.text_2}</p>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>

            <section id='board'>
                <div className="">
                    <div className="board_head">
                        <Heading head={board_heading} small={board_small}/>
                    </div>
                   
                   <div className="board_mem">
                            <div className="board_mem_sub">
                                {board_mem.map(e=>{
                                    return(
                                        <div className="board_card">
                                            <img src={e.image} alt="" />
                                            <div className="board_txt">
                                                <h4>{e.name}</h4>
                                                <small>{e.role}</small>
                                                <p>{e.txt}</p>
                                                <button className='donate_btn_3'>Read More</button>

                                                <div className="board_social">
                                                    <div className="fa-brands fa-facebook" style={{color:"#3B579D"}}></div>
                                                    <div className="fa-brands fa-x-twitter" style={{color:'black'}}></div>
                                                    <div className="fa-brands fa-linkedin" style={{color:'#0077AF'}}></div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
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

export default Ourorganization;