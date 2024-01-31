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
import Navbar from "../Navbar/Navbar";

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
        <>
            <Navbar />
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

            </div>
        </>

    )
}

export default Home;