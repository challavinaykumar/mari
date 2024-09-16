import React from 'react';
import './Barheading.css'

const Barheading = (p) => {
    return (
        <div>
            <div className="bar_head" >
                <img src={p.bar_image} alt="" />
                <h1>{p.bar_head}</h1>
            </div>
        </div>
    );
};

export default Barheading;