import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/auth';

import { useNavigate } from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const registeredUsers = useSelector((state) => state.registeredUsers);

    const handleSubmit = (e) => {
        e.preventDefault();
        // look for credentials that match and save to user variable
        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if(!email || !password){
            alert('Please fill in all fields')
        } 
        // if user exists, update redux store for currentUser and direct to home page
        else if (user)
        {
            console.log('user credentials match');
            dispatch(login({
                name: user.name,
                email: email,
                password: password,
                isLoggedIn: true,
            }))
            navigate('/home')
        } 
        else {
            alert('User credentials are invalid');
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    name="email"
                    type="email" 
                    autoFocus 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? 
                <Link to="/register">Sign up here</Link>
            </p>
        </div>

    );
}

export default Login;