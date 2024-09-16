import React from 'react';
import './Heading.css'

const Heading = (p) => {
    return (
        <div>
            <div className="heading">
                {p.small && <small>{p.small}</small>}
                <div className="head_sub">
                {p.head && <h1>{p.head}</h1>}
                {p.head2?<h1>{p.head2}</h1>:<span></span>}
                </div>
                {p.txt?<p>{p.txt}</p>:<p></p>}
            </div>
        </div>
    );
};

export default Heading;