import React, { useState } from 'react';
import Links from "./NavbarLinks";
import Login from "./Login";


const Navbar = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <>
            <div className="navbar">
                <h1 className="logo">SounXpress</h1>
                <Links />
                <button onClick={toggleLoginForm} className="btnLogin">
                Login
                </button>
            </div>

            {showLoginForm && (
                <div className="login-overlay">
                <Login showLoginForm={showLoginForm} toggleLoginForm={toggleLoginForm} />
                </div>
            )}
        </>
    );
}
export default Navbar;