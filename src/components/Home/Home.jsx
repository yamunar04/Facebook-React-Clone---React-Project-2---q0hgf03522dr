import React from "react";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare, FaUserFriends } from "react-icons/fa";
import { MdEmojiFlags } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import PostsList from "../Posts/PostsList/PostsList";
import { useUser } from "../Provider/UserProvider";

function Home() {
    const navigate = useNavigate();
    const { isUserLoggedIn } = useUser();

    useEffect(() => {
        if (!isUserLoggedIn) {
          navigate("/signin");
        }
      }, []);

    const handleClick = () => {
        navigate("/createposts")
    };
    const handleClickPages = () => {
        navigate("/createpages")
    }
    
    return (
        <div className="home">

            <div className="home-left-sidebar">
                <div className="home-profile">
                    <div className="home-profile-pic">
                        <Avatar
                            src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"
                            sx={{ width: 50, height: 50 }}
                            className="profile-pic"
                            alt="userProfile"
                            onClick={() => navigate("/UserProfile")}
                        />
                    </div>

                </div>

                <div className="home-other-options">
                    <div className="home-other-icons" onClick={() => alert("Comming Soon")}>
                        <FaPlusSquare className="home-sidebar-icon" />
                        <p className="home-sidebar-info">
                            COVID-19 information center</p>
                    </div>
                    <div className="home-other-icons-para" onClick={handleClickPages}>
                        <MdEmojiFlags className="home-sidebar-icon" />
                        <p className="home-sidebar-info">Pages</p>
                    </div>
                    <div className="home-other-icons" onClick={() => alert("Connect with friends")}>
                        <FaUserFriends className="home-sidebar-icon" />
                        <p className="home-sidebar-info">Friends</p>
                    </div>
                    <div className="home-other-icons" onClick={() => alert("Comming Soon")}>
                        <BiSolidVideos className="home-sidebar-icon" />
                        <p className="home-sidebar-info">Videos</p>
                    </div>
                    <div className="home-other-icons" onClick={() => alert("Comming Soon")}>
                        <SlCalender className="home-sidebar-icon" />
                        <p className="home-sidebar-info">Events</p>
                    </div>
                </div>

            </div>

            <div className="posts-section">
                <div className="create-posts">

                    <Avatar
                        src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"
                        sx={{ width: 50, height: 50 }}
                        className="create-profile-pic"
                        alt="userProfile"
                    />

                    <div className="create-post-input">
                        <input
                            type="button"
                            value="Create new posts... "
                            className="create-input"
                            onClick={handleClick}
                        />
                    </div>
                </div>
                <div className="home-posts-list">
                    <PostsList />
                </div>
            </div>


            <div className="home-right-sidebar">
                <h5 className="home-advt">Unlock New Opportunities: Master Full Stack Development!</h5>
                <img src="https://theknowledgereview.com/wp-content/uploads/2021/01/NEWTON-SCHOOL.jpg"
                    alt="advertisement" className="home-right-image" />

                <p className="home-right-description">
                    Newton School is an ed-tech platform that is building a futuristic online
                    university to provide a highly immersive and interactive learning path to
                    millions of students and enable them to tap into new-age tech opportunities.
                </p>
                <hr />
                <h4 className="home-right-header">Learn Full Stack Development</h4>
                <img src="https://d2ms8rpfqc4h24.cloudfront.net/Guide_to_Full_Stack_Development_000eb0b2d0.jpg"
                    alt="full-stack" className="home-right-image" />
                <p className="home-right-description">Full stack development is the end-to-end development of applications. It includes
                    both the front end and back end of an application. The front end is usually
                    accessed by a client, and the back end forms the core of the application where
                    all the business logic is applied.</p>
            </div>

        </div>
    )
}

export default Home;