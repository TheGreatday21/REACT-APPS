import PropTypes from "prop-types";
import propTypes from "prop-types"


function Student(props){
    return (
        <div className = "student" >
            <p> Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

//This is the specify the data type for all the props in the file 
//prop types are good for debugging 
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
//Adding default props down here
Student.default

export default Student 
//Booleans do not appear obviously on the screen so we use a tenary operators
//props.isStudent ? "Yes" : "No"}
//where the ? acts like an if statement that if its props then say yes when the bool is true and no when the bool is false ..Bool is placed in the app.jsx file 





















