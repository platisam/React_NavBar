import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle"></button>
        </div>
        <div className="links-container show-container"></div>
        <ul className="social-icons"></ul>
      </div>
    </nav>
  );
};
export default Navbar;
