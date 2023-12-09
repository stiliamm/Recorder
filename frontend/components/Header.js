function Header() {
    const header = document.createElement('header');
    header.innerHTML = `
      <h2 class="logo">SounXpress</h2>
      <nav class="navigation">
        <a href="/">Home</a>
        <a href="/recordings">My Recordings</a>
        <a href="/recorder">Recorder</a>
        <a href="/messages">Messages</a>
        <a href="/profile">Profile</a>
        <button class="btnLogin">Login</button>
      </nav>
    `;
    return header;
}
  
export default Header;