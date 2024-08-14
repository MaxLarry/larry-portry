import logo from "../assets/img/LJA.png";
import { navItems } from "../constants";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="logo-container" data-strength="20" data-strength-text="10">
        <img src={logo} alt="Logo" className="logo" />
        <span className="btn-text">
          <div className="cbd">
            <span className="site-name">LRRY JHN</span>
            <span className="andonga">ANDONGA</span>
          </div>
        </span>
      </div>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li className="btn btn-link" key={index}>
            <a href={item.href} className="btn-click magnetic" data-strength="20" data-strength-text="10">
              <div className="nav-link-line"></div>
              <span className="btn-text" style={{ transform: "rotate(0.001deg)" }}>
                <span className="btn-text-inner">{item.label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
