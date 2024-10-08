import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Surfer } from '../Surfer/Surfer';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import './Navbar.css'
import bannerImage from '../../assets/img/banner-EMME.png';

export const Navbar = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout, isAdmin } = useAuth();

    return (
        <nav className='navbar'>
            <img className='img-nav-item' src={bannerImage} alt='Banner' />
            {!isLoggedIn ? (
                <>
                    <Surfer
                        className='nav-item'
                        path='/login'
                        content='Login'
                    />
                    <Surfer
                        className='nav-item'
                        path='/register'
                        content='Register'
                    />
                </>
            ) : (
                <>
                    <Surfer
                        className='nav-item'
                        path='/profile'
                        content='Profile'
                    />
                    <Surfer
                        className='nav-item'
                        path='/home'
                        content='Home'
                    />
                    <div
                        className='nav-item'
                        onClick={logout}>
                        Logout
                    </div>
                </>
            )}
            {isAdmin && (
                <>
                    <Surfer
                        className='nav-item'
                        path='/adminusers'
                        content='Users'
                    />
                    <Surfer
                        className='nav-item'
                        path='/adminposts'
                        content='Posts'
                    />
                </>
            )}
        </nav>
    );
};
