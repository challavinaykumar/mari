import React from 'react';
// import './hea'

const Heading2 = (p) => {
    return (
        <div>
            <div className="heading "  style={{textAlign:'left'}}>
                {p.small && <small>{p.small}</small>}
                <div className="head_sub">
                {p.head && <h1 style={{marginLeft:'-25px'}}>{p.head}</h1>}
                {p.head2?<h1>{p.head2}</h1>:<span></span>}
                </div>
                {p.txt?<p>{p.txt}</p>:<p></p>}
            </div>
        </div>
    );
};

export default Heading2;