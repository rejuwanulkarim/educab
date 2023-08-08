import React from 'react'
import '../css/Navbar.css'
import NavLogo from "../Images/FavIcon.png"
import UserIcon from '../svg/user-solid.svg'
function Navbar() {
    const Logedin = false;
let navbar=document.getElementsByClassName('navbar');
console.log(navbar[0])

    const NavOpener = () => {
    }

    const Navhide = () => { console.log("hide") }


    return (

        <nav className="navbar" onLoad={NavLoad}>
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

                <ul className="navlist" id='NavItemList'>
                    <button className="nav-hide-btn" onClick={() => Navhide(`-${window.innerWidth}`)}>&times;</button>
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