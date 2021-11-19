import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth';

function Home() {
    const currentUser = useSelector((state) => state.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    useEffect(() => {
        if (!currentUser.isLoggedIn){
            console.log('Logging you out');
            alert('Logging out. Redirecting to Login page');
            navigate('/');
        }
    },[currentUser.isLoggedIn])

    return (
        <div>
            <h1>Welcome <span>{currentUser.name}</span></h1>
            <button onClick={(e) => handleLogout(e)}>
                Logout
            </button>
        </div>
    )
}

export default Home;
