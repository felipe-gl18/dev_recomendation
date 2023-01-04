import React from "react";
import '../css/navbar.css';

import { Link } from 'react-router-dom';

const Navbar = ({menuBarsActived, setMenuBarsActived}) => {
    
    function menuBars(){
        setMenuBarsActived(!menuBarsActived)
    }

    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <p>
                        <a>
                            <strong>DEV</strong> RECOMENDATION
                        </a>
                    </p>
                </div>

                <div className={menuBarsActived?'menu-bars-deactived':'menu-bars'} id="menu-bars" onClick={menuBars}></div>

                <ul id="nav-items" className={menuBarsActived ? "nav_actived":"nav-items"}>
                    <li className="nav-item"><Link to="/" >Home</Link></li>
                    <li className="nav-item"><Link to="/create/recomendation" >Create Recomendation</Link></li>
                    <li className="nav-item"><Link to="/about" >About me</Link></li>
                </ul>
            </nav>
    </header>
    )
}

export default Navbar;