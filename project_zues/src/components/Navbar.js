import React from "react";
import { Link } from "react-router-dom";


export const Navbar =() =>{
    return(
        <nav>
            <Link to ="/">Website</Link>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to ="savings">Savings</Link>
                </li>
                <li>
                <Link to ="income">Income</Link>
                </li>
                <li>
                <Link to = "budget">Budget</Link>
                </li>
            </ul>
        </nav>
    );
}









