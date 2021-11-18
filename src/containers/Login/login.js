import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../features/auth';

function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            email: email,
            password: password,
            loggedIn: true,
        }))
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