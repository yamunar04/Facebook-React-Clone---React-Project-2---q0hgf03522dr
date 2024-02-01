import React, { useState, useRef, useEffect } from "react";
import "./Profile.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IoIosSettings, IoMdHelpCircle, IoIosMoon } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Profile = () => {

  const [showModal, setShowModal] = useState();
  const profileIconRef = useRef(null);
  const navigate = useNavigate(null);

  const handleSignout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("logInStatus");
    localStorage.removeItem("authToken");
    localStorage.setItem("loginStatus", JSON.stringify(false));
    navigate("/signin");
    setTimeout(() => {
      console.log("Logged-Out Succesfully");
    });
  };

  useEffect(() => {
    const hideModal = (e) => {
      if (profileIconRef.current.contains(e.target)) {
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <section
      className="profile"
      onClick={() => setShowModal(!showModal)}
      ref={profileIconRef}
    >
      <section className="arrowIconForDropDown">
        <ArrowDropDownIcon style={{ color: "rgba(0,0,0,0.6)" }} />
      </section>
      {showModal && (
        <div className="auth-modal">
          <div className="auth-modal-icon">
            <div className="for-svg-for-name" onClick={() => navigate("/commingsoon")}>
              <AccountCircleIcon className="forSvg" />
            </div>
            <hr></hr>
            <span className="quth-modal-span" onClick={() => navigate("/commingsoon")}>See all profiles</span>
          </div>

          <div className="upper-div-main">
            <div className="upper-div">
              <div className="uppder-div-container">
                <IoIosSettings className="upper-div-icon-container"/>
                <p onClick={() => navigate("/commingsoon")}>
                  Setting & Privacy
                </p>
              </div>
              <div className="uppder-div-container">
                <IoMdHelpCircle className="upper-div-icon-container"/>
                <p onClick={() => navigate("/commingsoon")}>
                  Help & Support
                </p>
              </div>
              <div className="uppder-div-container">
                <IoIosMoon className="upper-div-icon-container"/>
                <p onClick={() => navigate("/commingsoon")}>Display & Accessibility</p>
              </div>
              <div className="uppder-div-container">
                <MdFeedback className="upper-div-icon-container"/>
                <p onClick={() => navigate("/commingsoon")}>Give Feedback</p>
              </div>
              <div className="uppder-div-container">
                <IoLogOut className="upper-div-icon-container"/>
                <button className="sign-out-btn" onClick={handleSignout}>
                  Sign Out
                </button>
              </div>

            </div>


          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;