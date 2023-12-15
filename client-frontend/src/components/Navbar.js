import React, { useState } from 'react';
import Links from "./NavbarLinks";
import Register from './Register';


const Navbar = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const toggleRegisterForm = () => {
        setShowRegisterForm(!showRegisterForm);
    };

    return (
        <>
            <div className="navbar">
                <h1 className="logo">SounXpress</h1>
                <Links />
                <button onClick={toggleRegisterForm} className="btnLogin">
                Sign up
                </button>
            </div>

            {showRegisterForm && (
                <div className="login-overlay">
                    <Register showRegisterForm={showRegisterForm}/>
                </div>
            )}
        </>
    );
}
export default Navbar;