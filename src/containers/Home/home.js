import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../../features/auth';

function Home() {
    const user = useSelector(selectUser);
    console.log(user);
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
            alert('User not logged in. Redirecting to Login page');
            navigate('/');
        }
    },)


    return (
        <div>
            <h1>Welcome <span>{user.name}</span></h1>
            <button onClick={(e) => handleLogout(e)}>
                Logout
            </button>
        </div>
    )
}

export default Home;
