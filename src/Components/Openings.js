import React from 'react';
import Barheading from './Barheading';
import './Openings.css'
import Footer from './Footer';

const Openings = () => {
    const bar_image = 'https://www.shutterstock.com/image-vector/this-modern-abstract-highspeed-motion-600nw-2456433529.jpg'
    const bar_head = 'Our Current Openings'
    return (
        <div>
            <div className="">
                <Barheading bar_head={bar_head} bar_image={bar_image}/>
            </div>
            <section>
                <div className="cur_op">
                    <h1>No current openings</h1>
                </div>
            </section>
            <div className="">
                <Footer/>
            </div>
        </div>
    );
};

export default Openings;