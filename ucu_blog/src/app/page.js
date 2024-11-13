import Title from "./components/Title"
import Content from  "./components/Content"
import Footer from "./components/Footer"
function Home (){
  return( 
    <div> 
      <Title  heading = "God is good" />
      <Content  details = "This is a very nice blog from Elijah the Greatday 21" />
      <br />
      <p>God loves me </p>
      <p> Iam a child of God and iam the vine </p>
      <Footer footer = "Jesus loves you and you should know that child of God "/>

    </div>
);
}
export default Home;