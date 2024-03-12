
import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="SpondBob" age={30} isStudent={true} gender={true}/>
      <Student name="Precilia" age={40} isStudent={false} gender={false}/>
      <Student name="Lida" age={25} isStudent={true} gender={false}/>
      <Student/>
    </>
  );
}



export default App

//ACTIVITY 1
//props = read-only properties that are shared btw components
//    A parent component can send data to a child component
//    <Compent key= value />

//ACTIVITY 2
//propTypes = a mechanism that ensures that the passed value
//     is of the correct datatupe.
//     age: PropTypes.number

//ACTIVITY 3
//defaultProps = default values for props in case they are not
//        passed from the parent component
//        name: "Guest"
