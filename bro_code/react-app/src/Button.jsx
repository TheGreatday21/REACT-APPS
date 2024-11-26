/*For the external css 
function Button(){
    return (
        <button className = "button">Click me please😭</button>
    );

}
export default Button 
*/
/*For the module 
import styles from "./Button.module.css"
function Button(){
    return (
        <button className = {styles.button}>Click me please😭</button>
    );

}
export default Button 
*/

//For inline styles (move button file out of the button folder back into the src folder)

function Button(){
const styles ={
    backgroundColor: "hsl(294, 63%, 37%)",
    color: "hsl(235, 51%, 46%)",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor : "pointer",
}
    return (
        <button style = {styles}>Click me please😭</button>
    );

}
export default Button 










