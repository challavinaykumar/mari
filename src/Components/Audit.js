import React, { useEffect } from 'react';
import Barheading from './Barheading';
import Heading from '../Components/Heading'
import './Audit.css'
// import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import pdf1 from '../Reports/AUDITED-FINANCIAL-STATMENTS-2020-21.pdf'
import pdf2 from '../Reports/AUDITED-FINANCIAL-STATEMENT-2021-22.pdf'
import pdf3 from '../Reports/Audited-Accounts-FY-2022-23-of-MARI-FOR-WEBSITE.pdf'


const Audit = () => {
    const bar_image = 'https://cloudinary.hbs.edu/hbsit/image/upload/s--VhMix7JO--/f_auto,c_fill,h_375,w_750,/v20200101/0050608AB35644123E6F6F6ED778F253.jpg'
    const bar_head = 'Our Resources'

    const head = 'Audit Reports'

    const handlepdf1 = ()=>{
        window.open(pdf1,'_blank')
    }
    const handlepdf2 = ()=>{
        window.open(pdf2,'_blank')
    }
    const handlepdf3 = ()=>{
        window.open(pdf3,'_blank')
    }


    useEffect(()=>{
        window.document.title = 'Audit Reports'
    },[])
    return (
        <div >
            <div className="">
                <Barheading bar_head={bar_head} bar_image={bar_image}/>
            </div>
            <div className="">
                <Heading head={head}/>
            </div>

            <section>
                <div className="report_main">
                    <div className="report_sub">
                        <div className="reports_images">
                            <img src="https://www.jobsmate.com/assets/frontend/images/jobsmate_3.png" alt="" />
                        </div>
                        <div className="report_txt">
                            <h1>2020 - 2021 - Audit Report</h1>
                            <span className='donate_btn_3' onClick={handlepdf1}>Preview</span>
                        </div>
                    </div>
                    <div className="report_sub">
                        <div className="reports_images">
                            <img src="https://www.jobsmate.com/assets/frontend/images/jobsmate_3.png" alt="" />
                        </div>
                        <div className="report_txt">
                            <h1>
                            2021 - 2022 - Audit Report</h1>
                            <span className='donate_btn_3' onClick={handlepdf2}>Preview</span>
                        </div>
                    </div>
                    <div className="report_sub">
                        <div className="reports_images">
                            <img src="https://www.jobsmate.com/assets/frontend/images/jobsmate_3.png" alt="" />
                        </div>
                        <div className="report_txt">
                            <h1>
                            2022 - 2023 - Audit Report</h1>
                            <span className='donate_btn_3' onClick={handlepdf3}>Preview</span>
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

export default Audit;