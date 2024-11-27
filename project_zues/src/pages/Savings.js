import Footer from "../components/Footer.js"
import { Navbar } from "../components/Navbar.jsx";
import React from "react";


/*
import { useParams } from "react-router-dom";
import video from "../vids&images/techman.jpeg";
function Video(){
    const{id} = useParams();
    return(
        <div>
            <video width={window.innerWidth} height={window.innerHeight} controls>
                <source src = {video}type = "video/mp4"/></video>
        </div>
    )
}
*/

function Savings(){
    return(
        <div>
            <Navbar/>
            <p>This is the savings </p>
            
            <Footer/>
        </div>
    );
}



export default Savings;