import React, { useEffect, useState } from "react";
import './Nav.css';
import netflixLogo from '../img/netflix.jpg';

const Nav = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
    }, []);

    return ( 
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src={netflixLogo} 
                alt="Netflix Logo" 
            />

            {/* <img 
                className="nav__avatar"
                src={netflixLogo} 
                alt="Netflix Logo" 
            />       */}
        </div>

        
        
     );
}
 
export default Nav;