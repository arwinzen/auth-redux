import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
    // 
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    let navigate = useNavigate();
    // console.log(useSelector(registeredUsers));
    const registeredUsers = useSelector((state) => state.registeredUsers);
    
    const dispatch = useDispatch();
    // const registeredUsers = useSelector((state) => state.registeredUsers);

    function handleRegister(e){
        e.preventDefault();
        console.log(name, email, password);
        if (!name || !email || !password){
            alert('Please fill in all fields');
        } else if (registeredUsers.find(user => user.email === email)){
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
            navigate("/");
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
                />
                <label htmlFor="email"></label>
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password"></label>
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
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
