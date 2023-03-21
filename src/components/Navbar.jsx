import React from "react";
import "../styles/navbar.css";
import { HamburgerIcon } from 'react-hamburger-icon';


export default function Navbar(){
    const [show,setShow] = React.useState(false);
    const styles ={
        transform : `${show ? 'translateX(0%)' : 'translateX(100%)'}`,
        transition : "transform 1s ease"
    }
    function toggle(){
        setShow(prev => !prev)
    }
    return(
        <div className="navbar--head">
            <img src="/images/logo.svg" alt="logo"/>
            <div className="navbar---items">
                <ul className="navbar--items">
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Solar Panels</li>
                    <li>Solar Roof</li>
                </ul>
            </div>
            <div className="navbar--expand">
                <HamburgerIcon onClick={toggle} className="icon"/>

            </div>
            <div>
                <ul className="another--ul" style={styles}>
                    <div className="for--btn--close"><button onClick={toggle} className="btn--x">X  </button></div>
                    
                    <li className="items--li">Model 3</li>
                    <li className="items--li">Model S</li>
                    <li className="items--li">Model X</li>
                    <li className="items--li">Model Y</li>
                    <li className="items--li">Solar Panels</li>
                    <li className="items--li">Solar Roof</li>
                </ul>
            </div>
        </div>
    );
}