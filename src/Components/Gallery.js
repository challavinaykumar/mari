import React from 'react';
import '../Components/Gallery.css'
import Barheading from '../Components/Barheading'
import gallery_image from '../Images/gallery_head.png'
// import Heading from './Heading';
import g_side_1 from '../Images/g_side_1.png'
import g_side_2 from '../Images/g_side_2.png'
// import gallery_collage from '../Images/gallery_collage.png'
import gallery_collage_image from '../Images/gallery_collage_image.png'
import Footer from '../Components/Footer'

const Gallery = () => {
    const bar_head = 'Gallery'
    const bar_image = gallery_image
     
    return (
        <div>
            <div className="">
                <Barheading bar_head={bar_head} bar_image={bar_image}/>
            </div>

            {/* <div className="">
                <Heading/>
            </div> */}

            <section>
                <div className="">
                    <div className="">
                        <div className="g_side_main">
                            <h1>Hello Our NGO has been present for over 30 years. MARI has implemented a range of programmes to help people manage their own affairs sustainably, whilst simultaneously focusing on improving their living standards.</h1>
                            <div className="g_side">
                                <img src={g_side_1} alt="" />
                                <img src={g_side_2} alt="" />
                            </div>
                        </div>

                        <div className="g_col">
                            <img src={gallery_collage_image} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="gal_foot">
                <Footer/>
            </div>
        </div>
    );
};

export default Gallery;