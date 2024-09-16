import React, { useState } from 'react';
import './Registration.css'
import Barheading from './Barheading';
// import registration_image from '../Images/registration.jpeg'
import Heading from './Heading';
import Footer from './Footer';

const Registration = () => {
    const bar_image = 'https://i0.wp.com/calmatters.org/wp-content/uploads/2021/01/iStock_court_02.jpg?fit=2000%2C1333&ssl=1'
    const bar_head = 'Registration/Legal Cover'

    const head = 'Legal cover'
    // const small ='Registration/Legal Cover'
    const txt = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

    const [legal_data,setlegal_data] = useState([
        {
            heading:'Society Registration Number',
            txt1:'No.123 of 1988 registered under the Andhra Pradesh (Telangana Areas) Public Societies Registration Act. 1350 Fasli (Act I of 1350 F) dated January 21, 1988.',
            
        },
        {
            heading:'80 G Certificate',
            txt1:'Unique Registration Number: AAATM2442CF20151, Dt: 30-11-2022 valid till 31st March, 2026',
            txt2:'PAN No.:  AAATM2442C  ',
            txt3:'TAN : HYDM03222C'
            
        },
        {
            heading:'Registration Under IT Act',
            txt1:'Registered u/s 12A of the Income-tax Act, 1961, Unique Registration Number: AAATM2442CE20211, Dt: 30-05-2022 valid till 31st March, 2026.',
            
        },
        {
            heading:'FCRA Registration Number',
            txt1:'Registered under the Foreign Contribution (Regulation) Act, 1976 and section 6(1) of the Act with No.010360033 ,Government of India, Ministry of Home Affairs, Foreigners Division (FCRA Wing) NDCC-II Building, Jai Singh Road New Delhi-110001. Dated 7th November 1990 valid till 30-09-2027CRA Registration No.: 010360033',
            
        },
        {
            heading:'DARPAN ID',
            txt1:'TS/2017/0164976 Dt: 10th October, 2017',
            
        },
        {
            heading:'CSR REGISTRATION NUMBER',
            txt1:'CSR00000168 Dt: 02.04.2021',
            
        },
        {
            heading:'EPF Registration Number',
            txt1:'APHYD1567061000 Dt: 21.03.2017',
            
        },
        {
            heading:'PTIN',
            txt1:'36752219098 Dt: 2nd July, 2012',
            
        }
    ])
    return (
        <div >
            <div className="">
                <Barheading bar_head={bar_head} bar_image={bar_image}/>
            </div>

            <section className="" id='legal'>
                <Heading  head={head} txt={txt}/>

                <div className="legal_main">
                    <div className="legal_sub">
                        {legal_data.map(e=>{
                            return(
                                <div className="legal_card">
                                    <h1>{e.heading}</h1>
                                    <small>{e.txt1}</small>
                                    <div className="legal_txt">
                                    {e.txt2 && <p>{e.txt2}</p>}
                                    {e.txt3 && <p>{e.txt3}</p>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
               
            </section>

            <div className="">
                <Footer/>
            </div>
        </div>
    );
};

export default Registration;