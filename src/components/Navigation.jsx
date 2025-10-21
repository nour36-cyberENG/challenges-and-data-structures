import { NavLink } from "react-router-dom"
import "./styles/Navigation.css";


export default function Navigation(){
    const navLinkStyle = ({isActive}) => {
        return{
      color: isActive ? "#fff" : "#bdc3c7",
      background: isActive ? "rgba(255,255,255,0.2)" : "transparent",
      borderBottom: isActive ? "3px solid #3498db" : "3px solid transparent"
    };
    };
    return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>📱 InstaBoard</h2>
        </div>

    
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              style={navLinkStyle}
              className="nav-link"
            >
               Home🏠
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              style={navLinkStyle}
              className="nav-link"
            >
               About Usℹ️
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/team" 
              style={navLinkStyle}
              className="nav-link"
            >
               Team👥
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/liked-users" 
              style={navLinkStyle}
              className="nav-link"
            >
               Liked Users❤️
            </NavLink>
          </li>
        </ul>

        <div className="nav-user">
          <span> 👋Hellow </span>
        </div>
      </div>
    </nav>
  );
}