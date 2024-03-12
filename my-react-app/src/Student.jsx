import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            <p>Gender: {props.gender ? "Male" : "Female"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    gender: PropTypes.bool,
}

Student.deaultProps = {
    name: "Guest",
    age: 0,
    isStudent: true,
    gender: true,
}
export default Student