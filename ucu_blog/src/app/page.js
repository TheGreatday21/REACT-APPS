import Image from "next/image";
import styles from "./page.module.css";
import content from "../../components/content"
import title from "../../components/title"


function Elijah(){
  return( 
  <div>
    <h1>TecH Savvy Uganda </h1>
    <p>This is sample code </p>
    <title />
    <p>This is the start of our semester project</p>
    <content />
  </div>
);
}
export default Elijah;