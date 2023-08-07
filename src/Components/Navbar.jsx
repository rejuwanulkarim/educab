import React from 'react'
import '../css/Navbar.css'
import NavLogo from "../Images/FavIcon.png"
import UserLogo from '../svg/user-solid.svg'
function Navbar() {
    const Logedin = false;
    return (

        <nav className="navbar">
            {/* <div className="navitems"></div> */}
            <ul className="navlist">
                <li className="navitems navlogo"><a href="/">

                    <img src={NavLogo} alt="" className='logo2' />
                    <div className="logo">educab.in</div>
                </a></li>
                <li className="navitems"><a href="/">Career Support</a></li>
                <li className="navitems"><a href="/">Success Stories</a></li>
                <li className="navitems"><a href="/">Study Abroad</a></li>
                <li className="navitems"><a href="/">For Recruiters</a></li>
                <li className="navitems"><a href="/">Blog</a></li>
                <li className="navitems"><a href="/">Free Online Courses</a></li>
            </ul>
            <div className="user-login">{
                Logedin ? <a className="user-icon">
                    <img src={UserIcon} alt="" />
                </a> : <a className="btn-login"><span>Login</span></a>


            }
            </div>
        </nav>

    )
}

export default Navbar