import Links from "./NavbarLinks";


const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <h1 className="logo">SounXpress</h1>
            <Links/>
            <button className="btnLogin">Login</button>
        </div>
        </>
    );
}
export default Navbar;