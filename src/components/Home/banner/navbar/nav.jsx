import React, { useState } from "react";
import NavImg from '../../../../assets/LogoImg.svg'
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [Nav, setNav] = useState(false);
  return (
    <nav className="nav-container">
      <div className="nav-main" id="navmain">
        <img src={NavImg} alt="" />
        <div className="list" id="list">
          <ul>
          <li>
            <Link to={'/'} className="NavLink" activeClassName='NavNav'>⇃Home</Link>
          </li>
          <li>
            <Link to={'/courses'} className="NavLink">⇃Courses</Link>
          </li>
          <li>
            <Link to={'/teachers'} className="NavLink">⇃Teachers</Link>
          </li>
          <li>
            <Link to={'/account'} className="NavLink">⇃Account</Link>
          </li>
          </ul>
        </div>
        <Link className="primary-btn account" to={''}>
        <i class="fa-solid fa-circle-user"></i>
        </Link>

        {/* hamburger */}
        
        <div className="hamburger">
          <input type="checkbox" id="checkbox" onClick={() => setNav(!Nav)} />
          <label for="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>
      <div className={Nav ? "nav-manu" : "nav-hide"}>
        <ul>
          <Link className="link" to="/" onClick={()=>{setNav(!Nav)}}>
            <li>Home⇂</li>
          </Link>
          <Link className="link" to="/courses" onClick={()=>{setNav(!Nav)}}>
            <li>Courses⇂</li>
          </Link>
          <Link className="link" to="/teachers" onClick={()=>{setNav(!Nav)}}>
            <li>Teachers⇂</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
