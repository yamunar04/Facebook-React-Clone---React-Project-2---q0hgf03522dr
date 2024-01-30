import React, { useState, useRef, useEffect } from "react";
import "./Profile.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
          <div>
            <div className="for-svg-for-name">
              <AccountCircleIcon className="forSvg" />
            </div>

          </div>

          <div className="upper-div-main">
            <div className="upper-div">
              <p onClick={() => alert("Comming Soon")}>
                Setting & Privacy
              </p>
              <p onClick={() => alert("Comming Soon")}>
                Help & Support
              </p>
              <p onClick={() => alert("Comming Soon")}>Display & Accessibility</p>
              <p onClick={() => alert("Comming Soon")}>Give Feedback</p>
              <button className="sign-out-btn" onClick={handleSignout}>
                Sign Out
              </button>
            </div>


          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;