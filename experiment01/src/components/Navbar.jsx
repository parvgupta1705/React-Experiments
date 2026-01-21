import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MySPA</h2>
      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;
