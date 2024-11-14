import Title from "./components/Title"
import Content from  "./components/Content"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";


function Home (){

  const [showBlog , setBlog] = useState('NO BUTTON HAS BEEN CLICKED');
  const[movies_data, setmovies_data] = useState([]);

  function changeBlogs(){
    setShowBlog(!showBlog);

    if (showBlog) {
      setRandomText("This is MUK")
    }else{
      setRandomText('This is UCU')
    }
  }


  function fetchtopMovies (){
  
  }
  useEffect(() => {
    console.log("The component is mounted ");
  },[])


  return( 
    <div>
      {showBlog ? <div>
        <Title  heading = "Makerere"/>
        <Content  details = "This is a very nice blog about muk in Uganda"/> </div>
          : <div>
          <Title  heading = "MUganda Christian University" />
          <Content  details = "This is a very nice blog about UCU in Uganda" />
          <Footer footer = "Jesus loves you and you should know that child of God "/>
          </div>
      }
      <Button variant="contained">CLICK ME NOW </Button>
        <br/>
        <p>{setRandomText}</p>
        
      </div>
  );

}
export default Home;