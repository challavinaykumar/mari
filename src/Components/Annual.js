import React, { useEffect } from 'react';
import './Audit.css'
import Barheading from './Barheading';
import Heading from '../Components/Heading'
import './Audit.css'
// import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import pdf1 from '../Reports/Annual-Report-2020-21.pdf'
import pdf2 from '../Reports/Annual-Report-2021-22.pdf'
import pdf3 from '../Reports/MARI_Annual-Report-_2022-23_compressed.pdf'

const Annual = () => {
    const bar_image = 'https://media.licdn.com/dms/image/D5612AQFRjYc31bUPzw/article-cover_image-shrink_720_1280/0/1661352646926?e=2147483647&v=beta&t=YecyjsTplvzobXCM3ypUDuJKhiSr-Z2_nydICqFQ5sQ'
    const bar_head = 'Our Resources'

    const head = 'Annual Reports'

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
        window.document.title = 'Annual Reports'
    },[])

    return (
        <div>
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
                            <h1>2020 - 2021 - Annual Report</h1>
                            <span className='donate_btn_3' onClick={handlepdf1}>Preview</span>
                        </div>
                    </div>
                    <div className="report_sub">
                        <div className="reports_images">
                            <img src="https://www.jobsmate.com/assets/frontend/images/jobsmate_3.png" alt="" />
                        </div>
                        <div className="report_txt">
                            <h1>
                            2021 - 2022 - Annual Report</h1>
                            <span className='donate_btn_3' onClick={handlepdf2}>Preview</span>
                        </div>
                    </div>
                    <div className="report_sub">
                        <div className="reports_images">
                            <img src="https://www.jobsmate.com/assets/frontend/images/jobsmate_3.png" alt="" />
                        </div>
                        <div className="report_txt">
                            <h1>
                            2022 - 2023 - Annual Report</h1>
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

export default Annual;