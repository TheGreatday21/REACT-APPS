/*
//This id the source component of our data
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"


function App() {
  return(
    <>
    <Header />
    <Footer/>
    <Food/>
    <Food/>
    </>
  );
}
//We can use the components as many times as we want and move them anywhere we want

export default App
THIS WAS A BRIEF ON HOW COMPONENTS WORK IN REACT 
*/


/*
-----------------USING CARD COMPONENTS IN REACT ---------------------------

*/
/*
import Card from "./Card.jsx"

function App(){
  return(
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </>

    
  );
}
*/


/* 
--------------------- HOW TO STYLE COMPONENTS WITH CSS IN REACT ---------------

1.EXTERNAL CSS
2.MODULES
3.INLINE



#######  BUTTON COMPONENT  ############

import Button from "./Button.jsx"

function App(){
  return (
    <>
    <Button/>
    <Button/>
    <Button/>
    </>
    
  );
}

export default App
*/


/* 
  ####### PROPS IN REACT  #####
  */
import Card from "./Card.jsx";
import Student from "./Student.jsx";

function App(){
  return (
  <>
      <Student name = "Spongebob" age ={90} isStudent = {true} />
      <Student name = "Sandy" age ={21} isStudent = {true} />
      <Student name = "Patrick" age ={89} isStudent = {false} />
      <Student name = "Squidward" age ={49} isStudent = {false} />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  

  </>
  );
}
export default App;