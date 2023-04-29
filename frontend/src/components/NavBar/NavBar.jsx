import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b style={{fontFamily:"cursive"}}>Pics By Acosta</b>
          </Link>
        </li>
        <li> <Link to="/" className="navBarText"> Home </Link> </li>
        <li> <Link to="/about" className="navBarText"> About </Link> </li>
        <li> <Link to="/packages" className="navBarText"> Packages </Link> </li>
        <li> <Link to="/bookings" className="navBarText"> Book Me </Link> </li>
        <li className="navBarText">
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
