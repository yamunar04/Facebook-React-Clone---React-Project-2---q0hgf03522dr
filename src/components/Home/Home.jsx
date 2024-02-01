import React from "react";
import { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare, FaUserFriends } from "react-icons/fa";
import { MdEmojiFlags } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import PostsList from "../Posts/PostsList/PostsList";
import { useUser } from "../Provider/UserProvider";
import Navbar from "../Navbar/Navbar";
import { FaVideo } from "react-icons/fa6";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";

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

                            <img src="https://www.shutterstock.com/shutterstock/photos/1153673752/display_1500/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg"
                                alt="img"
                                className="home-profile-image1"
                                onClick={() => navigate("/commingsoon")}
                            />
                        </div>

                    </div>

                    <div className="home-other-options">
                        <div className="home-other-icons" onClick={() => navigate("/commingsoon")}>
                            <FaPlusSquare className="home-sidebar-icon" />
                            <p className="home-sidebar-info">
                                COVID-19 information center</p>
                        </div>
                        <div className="home-other-icons-para" onClick={handleClickPages}>
                            <MdEmojiFlags className="home-sidebar-icon" />
                            <p className="home-sidebar-info">Pages</p>
                        </div>
                        <div className="home-other-icons" onClick={() => navigate("/commingsoon")}>
                            <FaUserFriends className="home-sidebar-icon" />
                            <p className="home-sidebar-info">Friends</p>
                        </div>
                        <div className="home-other-icons" onClick={() => navigate("/commingsoon")}>
                            <BiSolidVideos className="home-sidebar-icon" />
                            <p className="home-sidebar-info">Videos</p>
                        </div>
                        <div className="home-other-icons" onClick={() => navigate("/commingsoon")}>
                            <SlCalender className="home-sidebar-icon" />
                            <p className="home-sidebar-info">Events</p>
                        </div>
                    </div>

                </div>
               

                <div className="posts-section">
                <div className="home-header-container" onClick={() => navigate("/commingsoon")}>
                    <div className="home-header-1" > 
                        <CiCirclePlus className="home-header1-icon"/>
                    </div>
                    <div className="home-header-2">
                        <span>Create Story</span>
                    </div>
                </div>
                    <div className="create-posts-container">
                    <div className="create-posts">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1153673752/display_1500/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg"
                            alt="img"
                            className="home-profile-image1"
                            onClick={handleClick}
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
                    <hr></hr>
                    <div className="create-posts-section2">
                        <div className="create-posts-section2-icon" onClick={() => navigate("/commingsoon")}>
                            <FaVideo className="create-posts-section2-icon1"/>
                        </div>
                        <div className="create-posts-section2-icon" onClick={handleClick}>
                            <MdOutlinePhotoLibrary className="create-posts-section2-icon2"/>
                        </div>
                        <div className="create-posts-section2-icon" onClick={() => navigate("/commingsoon")}>
                            <GoSmiley className="create-posts-section2-icon3"/>
                        </div>
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