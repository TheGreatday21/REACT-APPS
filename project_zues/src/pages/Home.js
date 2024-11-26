import Header from "../components/Header.js";
import Footer from "../components/Footer.js"
import { Navbar } from "../components/Navbar.js";

function Home(){
    return(
        <>
        <Navbar/>
        
        <body className = "body">
            <h1 className = "h1_tag" >Group9</h1>
            <h2 className="h2_tag">Who we are</h2>
                <h3> We as Tech Savvy Uganda are here to serve you in not just fixing your phone but helping you with all your phone and laptop needs . 
                        Beat it being an android issue or macos ..Tech Savvy has got you covered
                </h3>
        </body>
        
        <Footer/>
        </>
    );
}

export default Home