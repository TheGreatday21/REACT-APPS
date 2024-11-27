import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <nav>
            <Link to ="/" className = "title" >Website</Link>
            <div className = "menu">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>
                    <NavLink to="/home"><a>Home</a></NavLink>
                </li>

                <li>
                    <NavLink to ="/savings"><a>Savings</a></NavLink>
                </li>

                <li>
                    <NavLink to ="/income"><a>Income</a></NavLink>
                </li>

                <li>
                    <NavLink to = "/budget"><a>Budget</a></NavLink>
                </li>
            </ul>
        </nav>
    );
}









