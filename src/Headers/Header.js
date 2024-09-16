import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const nav_open = useRef()
  const side_nav = ()=>{
    nav_open.current.style.right = '0'
    nav_open.current.style.transition = '0.3s'
  }
  const side_nav_close = ()=>{
    nav_open.current.style.right = '-300px'
  }


  return (
    <div>
      <div className="small_header">
        <div className="small_head_left d-flex align-items-center ">
          <div className="info d-flex align-items-center gap-2">
            <i className="fa-regular fa-envelope"></i>
            <span>Info@donations.com</span>
          </div>
          <div className="time d-flex align-items-center gap-2">
            <i className="fa-regular fa-clock"></i>
            <span>Mon - Sat: 08.00 am - 05:00</span>
          </div>
        </div>
        <div className="small_head_right  gap-3">
          <div className="lor">
            <span>Pellentesque hendrerit turpis magna, non</span>
          </div>
          <div className="f_links d-flex align-items-center gap-2">
            <div className="fa-brands fa-facebook-f"></div>
            <div className="fa-brands fa-youtube"></div>
            <div className="fa-brands fa-x-twitter"></div>
            <div className="fa-brands fa-instagram"></div>
          </div>
        </div>
      </div>
      <header>
        <div className="header_main">
            <div className="logo">
                <img src="http://www.nicdarkthemes.com/themes/donation/wp/demo/charity/wp-content/uploads/sites/2/2020/06/logo-color.png" alt="" />
            </div>
            <div className="nav_links_main" ref={nav_open}>
              <div className="" id="wrg_btn" onClick={side_nav_close}>
                <i className="fa-solid fa-x" ></i>
                </div>
            <ul className="nav_links">
                <li><Link to={'/'}>Home </Link> </li>
                <li className="drop_link_li"><span className="d-flex align-items-center gap-1">About <i className='bx bx-chevron-down fs-5'></i></span>
                <ul className="drop_links">
                  <li><Link to={'/Ourorganization'}>Our Organization</Link></li>  
                  <li><Link to={'/Registration'}>Registartion/ Legal Cover</Link></li>  
                </ul></li>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li className="drop_link_li"> <span className="d-flex align-items-center gap-1">Human Resources <i className='bx bx-chevron-down fs-5'></i></span>
                <ul className="drop_links">
                  <li><Link to={'/volunteer'}>Volunteer/ Internship</Link></li>  
                  <li><Link to={'/Openings'}>Current Openings</Link></li>  
                </ul>
                </li>
                <li className="drop_link_li"> <span className="d-flex align-items-center gap-1">Resources <i className='bx bx-chevron-down fs-5'></i></span>
                <ul className="drop_links">
                  <li><Link to={'/Audit'}>Audit Reports</Link></li>  
                  <li><Link to={'/Annual'}>Annual Reports</Link></li>  
                </ul>
                </li>
                {/* <li><Link to={''}>Reports</Link></li> */}
                <li><Link to={'/Gallery'}>Gallery</Link></li>
                <li><Link to={'/Contact'}>Contact</Link></li>
            </ul>
            </div>
            <div className="menu_btn" onClick={side_nav}>
              <i class='bx bx-menu'></i>
            </div>
            <div className="que d-flex align-items-center ">
                <div className="que_sub ">
                    <div className="">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="">
                        <h6>Any questions ?</h6>
                        <small>Phone 202 303 405</small>
                    </div>
                </div>
                <div className="">
                    <span className="donate_btn">DONATE</span>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
