import React from "react";


function Header() {
    return(
        <header style={{position: 'fixed',
                        top: 0, left: 0,
                        width: '100%', padding: '20px 100px', background: 'red'}}>
            <h2 style={{}}>Logo</h2>
            <nav style={{}}>
                <a href="/">Home</a>
                <a href="/user/recordings">My Recordings</a>
                <a href="/messages">Messages</a>
                <a href="/recorder">Recorder</a>
                <a href="/settings">Settings</a>
                <button style={{}}>Login</button>
            </nav>
        </header>
        
    )
}

export default Header;