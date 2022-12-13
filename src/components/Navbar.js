import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar wrapper">
      
      <ul className="links">
          <li>
            <Link to='/causes'>Causes</Link>
          </li>
          <li>
            <Link to='/effect'>Effect</Link>
          </li>
          <li>
            <Link to='/help'>Get Help Now</Link>
          </li>
      
        </ul>
        <div className="logo">
          <Link to="/">
          <h2>CyberBulling</h2>
          </Link>
        </div>

        <ul className="links">
          <li>
            <Link to='/causes'>Causes</Link>
          </li>
          <li>
            <Link to='/effect'>Effect</Link>
          </li>
          <li>
            <Link to='/help'>Get Help Now</Link>
          </li>
      
        </ul>

    </nav>
  );
};

export default Navbar;
