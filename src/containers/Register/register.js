import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth';
import { useNavigate } from 'react-router-dom';

function Register(props) {
    // 
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    // let name = useRef();
    // let email = useRef();
    // let password = useRef();  
    let navigate = useNavigate();
    // console.log(useSelector(registeredUsers));
    const registeredUsers = useSelector((state) => state.registeredUsers);
    // let users = useSelector(state => state.registeredUsers);
    // console.log(registeredUsers);
    
    const dispatch = useDispatch();
    // const registeredUsers = useSelector((state) => state.registeredUsers);

    function handleRegister(e){
        e.preventDefault();
        console.log(name, email, password);
        if (!name || !email || !password){
            alert('Please fill up all fields');
        } 
        
        if (registeredUsers.find(user => user.email === email)){
            alert('Email has been registered before');
        } 
        else {
            dispatch(register({
                name: name,
                email: email,
                password: password,
                key: Date.now(),
            }))
            alert(`User ${name} successfully created. Please Login`);
            console.log(registeredUsers);
            // navigate("/");
        }
    }

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={(e) => handleRegister(e)}>
                <label htmlFor="name"></label>
                <input 
                    name="name" 
                    type="text" 
                    autoFocus 
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    // ref={(e) => name = e}
                />
                <label htmlFor="email"></label>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    // ref={(e) => email = e}
                />
                <label htmlFor="password"></label>
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    // ref={(e) => password = e}
                />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? 
                <Link to="/">Login here</Link>
            </p>
        </div>
    )
}

export default Register;
