import { useState  } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {

    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
    
     setErrors(validation({
        ...userData,
            [event.target.name]: event.target.value
     }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData );
    }
    return (
        <form onSubmit={handleSubmit}>

            <h1>Holi soy el Form</h1>
            <label htmlFor="email" > Email: </label>
            <input type="text" placeholder="Ingrese su email" name = "email" value = {userData.email}
            onChange = {handleChange}/>
            {errors.email && <p>{errors.email} </p>}
            <hr />
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Ingrese su password"name = "password" value = {userData.password}
            onChange = {handleChange}/>
            {errors.password && <p>{errors.password} </p>}
            <button onSubmit={handleSubmit}> Submit</button>

         </form>
    )
}

export default Form;