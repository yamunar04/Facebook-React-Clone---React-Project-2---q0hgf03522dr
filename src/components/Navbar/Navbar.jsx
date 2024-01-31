import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import { FaFacebook, FaHome, FaUserFriends, FaFacebookMessenger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineGroups } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import SearchBar from "../Search/SearchBar";

function Navbar() {
  return (
    <header className="navbar-container" id="nav-bar-container">
      <section className="navbar-container1">
        <NavLink to="/">
          <FaFacebook className="nav-logo" />
        </NavLink>
        <div className="header_search">
          <SearchBar />
        </div>
      </section>

      <section className="navbar-container2">
        <div className="navbar-container2-home">
          <NavLink className="homeNav" to="/">
            <FaHome className="nav-icon" />
            <span className="nav-home">Home</span>
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <NavLink className="messagenav" to="/commingsoon">
            <FaUserFriends className="nav-icon" />
            <span>Friends</span>
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <NavLink className="messagenav" to="/channelslist">
            <MdOutlineGroups className="nav-icon" />
            <span>Pages</span>
          </NavLink>
        </div>

      </section>
      <div className="navbar-container3">
        <div className="navbar-container2-messaging">
          <NavLink className="messagenav" to="/commingsoon">
            <span className="nav-icon-span">Find Friends</span>
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <NavLink className="messagenav" to="/commingsoon">
            <FaFacebookMessenger className="nav-icon" />
            <span>Messenger</span>
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <NavLink className="messagenav" to="/commingsoon">
            <IoIosNotifications className="nav-icon" />
            <span>Notifications</span>
          </NavLink>
        </div>
        <div className="navbar-container2-me">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              alignItems: "center",
              fontSize: "14px",
              color: "black"
            }}
          >
            <CgProfile className="nav-icon" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: "rgba(0,0,0,0.6)" }}>Me</span>
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;