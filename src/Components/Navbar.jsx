import React from 'react'
import '../css/Navbar.css'
import NavLogo from "../Images/FavIcon.png"
import UserIcon from '../svg/user-solid.svg'
function Navbar() {
    let navlist = document.getElementsByClassName("navlist")[0];
    let navlogo = document.getElementsByClassName("navlogo")[0];

    const Navhide = (width) => {
        navlist.setAttribute("style", `left:-${width}px;`)

        navlogo.setAttribute("style", "position:reletive !important;top:7px;")
    }
    window.onload = () => {
        Navhide(-window.innerWidth)
        navlogo.setAttribute("style", "position:reletive !important;top:7px;")

    }

    const Logedin = false;
    const NavOpener = () => {
        Navhide(0);
        navlogo.setAttribute("style", "position:fixed !important;")
    }
    return (

        <nav className="navbar">
            <div className="nav-phone">
                <div className="hambarger-btn" onClick={NavOpener}>
                    <span className='hambarger-lines'></span>
                    <span className='hambarger-lines'></span>
                    <span className='hambarger-lines'></span>
                </div>
                <ul >
                    <li className="navlogo"><a href="/">

                        <img src={NavLogo} alt="" className='logo2' />
                        <div className="logo">educab.in</div>
                    </a></li>
                </ul>

                <ul className="navlist">
                    <button className="nav-hide-btn" onClick={() => Navhide(window.innerWidth)}>&times;</button>
                    <li className="navitems"><a href="/"> <span>
                        Courses
                    </span>
                        <span className='nav-item-symbol'>&gt;</span>
                    </a></li>
                    <li className="navitems"><a href="/">

                        <span>
                            For Recruiters
                        </span>
                        <span className='nav-item-symbol'>&gt;</span>
                    </a></li>
                    <li className="navitems"><a href="/">
                        <span>
                            Success Stories
                        </span>
                        <span className='nav-item-symbol'>&gt;</span>
                    </a></li>
                    <li className="navitems"><a href="/">
                        <span>
                            Blog
                        </span>
                        <span className='nav-item-symbol'>&gt;</span>
                    </a></li>

                </ul>
            </div>
            <div className="user-login">{
                Logedin ? <a href='/' className="user-icon">
                    <img src={UserIcon} alt="" />
                </a> : <button className="btn-login">Login</button>


            }
            </div>
        </nav>

    )
}

export default Navbar