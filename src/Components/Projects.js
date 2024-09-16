import React, { useState } from 'react';
import './Projects.css'
import Footer from './Footer';
import Barheading from './Barheading';
import Heading from './Heading';

const Projects = () => {
    const [regdata,setregdata] = useState([
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-70-1024x575.jpg',
            head:'Farmers Producers Company Limited (FPOs)',
            txt:'Increased crop yields and higher farm productivity resulted from better agricultural practices, improved technology, and training services provided by the FPOs. ',
            status:'Active',
            partner:'NABARD'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-82-1024x575.jpg',
            head:'Promoting Agro-Forestry',
            txt:'This project aims to promote biodiversity, enhance soil health, improve water retention, and provide a sustainable source of income for farmers, by combining the elements of agriculture and forestry. ',
            status:'Active',
            partner:' RABO BANK FOUNDATION'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/09/CareToAction_Logo-1.png',
            head:'Education To Children Of Waste Collectors',
            txt:'Contribute to the realization of SDGs 3 (Good Health & Nutrition) and SDG4 (Quality Education) byenabling the children of waste collectors and street sweepers within the limits of GHMC. ',
            status:'Active',
            partner:'CARE & SHARE ITALIA'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-72-1024x575.jpg',
            head:'COVID-19 Response & Relief Programme In INDIA',
            txt:'Populations of Concern and host communities live with dignity and improve their lives & communities ',
            status:'Active',
            partner:'CATHOLIC RELIEF SERVICES'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-75-1024x575.jpg',
            head:'Provision Of Pure Drinking Water',
            txt:'To bring potable safe drinking water to village communities affected by fluoride and other contaminants in groundwater and improve the health of the poor. ',
            status:'Active',
            partner:' SWN INDIA'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-83-1024x575.jpg',
            head:'Provision Of Medical & Economic Relief To Covid-19 Victims',
            txt:'100% covid vaccination of targeted slum population to reduce / prevent Covid infection by the end of 6 months',
            status:'Active',
            partner:'AZIM PREMZI FOUNDATION'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-74-1024x575.jpg',
            head:'Promotion Of Wash Infrastructure In Govt Schools (AWARE-II)',
            txt:'To Increase Retention and decrease Absenteeism, especially of girls through improved access to WASH facilities and promoting behavioural change towards better education and health. ',
            status:'Active',
            partner:'HOPE FOR CHILDREN'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-85-1024x575.jpg',
            head:'Developing Safe & Comfortable Toilets.',
            txt:'Providing customised toilet usage aids for elderly persons to promote inclusive sanitation progress and contribute to achieving the National objectives of the Swachh Bharat Mission (SBM) being pursued by the Government of India.',
            status:'Active',
            partner:' SOLON INDIA PVT.LTD'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-77-1024x575.jpg',
            head:'Provision Of Wash Infrastructure',
            txt:'To enhance WASH awareness and behaviour amongst the students of the selected GOVT., schools and their families by ensuring adequate and sustained access to WASH facilities and appropriate behavioural change communication.',
            status:'Active',
            partner:' HCL FOUNDATION'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-78-1024x575.jpg',
            head:'AIDS Control & Prevention Among High-Risk Population',
            txt:'Reduce HIV incidence in population groups at risk of HIV/AIDS by integrated prevention, care and support measures.',
            status:'Active',
            partner:' T.S AIDS CONTROL SOCIETY '
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-70-1024x575.jpg',
            head:'Chinalaxmapur Watershed Development',
            txt:'To foster sustainable development, and enhance socio-economic conditions and overall well-being of communities and ecosystems.',
            status:'Active',
            partner:'NABARD'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-70-1024x575.jpg',
            head:'Climate Proofing Project Mekalagattu',
            txt:'To ensure that agriculture remains a viable and sustainable livelihood option for current and future generations in the face of a changing climate.',
            status:'Active',
            partner:'NABARD'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-79-1024x575.jpg',
            head:'Better Cotton - MARI',
            txt:'MARI aims to work closely with small and marginal cotton farmers, farm workers, and the farm community to understand deep-rooted issues ',
            status:'Active',
            partner:'BETTER COTTON – GROWTH & INNOVATION FUND'
        },   
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-84-1024x575.jpg',
            head:'Rising for the Rights',
            txt:'Rising for the Rights: Strengthening CSO Network in South Asia for achieving SDG 6',
            status:'Active',
            partner:'BILL & MELINDA GATES FOUNDATION'
        },
        {
            image:'https://mari-india.org/wp-content/uploads/2024/08/Untitled-design-83-1024x575.jpg',
            head:'Basti Vikas Project',
            txt:'Developed Baseline tool and we derived slum wise details of all documents and entitlements along with slum level basic information. ',
            status:'Active',
            partner:'AZIM PREMJI PHILANTHROPIC INITIATIVES (APF'
        },
        
        
    ])
    const bar_head = "Projects"
    const bar_image = 'https://static.vecteezy.com/system/resources/previews/041/468/054/non_2x/hands-of-poor-people-asking-for-food-from-volunteers-helping-concept-of-food-donation-free-photo.jpg'

    const small = 'A help to those who need it'
    const head = 'Each donation is an essential help'
    const head2 = "which improves everyone's life"
    const txt = 'To organise and build capacities of people to engage in community development and collective actions.'
    return (
        <div>
            {/* <div className="project_head">
                <img src={bar_image} alt="" />
                <div className="pro_head_txt">
                    <h1>ach donation is an essential help which improves everyone's life</h1>
                </div>
            </div> */}

            <div className="">
                <Barheading bar_head={bar_head} bar_image={bar_image}/>
            </div>

            <section id='projects'>
                <div className="">
                    <Heading head={head} head2={head2} small={small} txt={txt}/>
                </div>
                <div className="reg_main">
                    {regdata.map(e=>{
                        return(
                            <div className="reg_card">
                                <img src={e.image} alt="" />
                                <div className="reg_txt">
                                    <h3>{e.head}</h3>
                                    <div className="reg_small">
                                    <small>{e.txt}</small>
                                    </div>
                                </div>
                                <div className="reg_status">
                                    <div className="reg_status_sub">
                                    <h6 className='status'>STATUS: <span>{e.status}</span></h6>
                                    <h6 className='partner'>PARTNER: <span>{e.partner}</span></h6>
                                    </div>
                                    <button className='donate_btn'>View Details</button>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <div className="">
                <Footer/>
            </div>
        </div>
    );
};

export default Projects;