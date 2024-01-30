import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import { useParams } from 'react-router-dom';
import { Avatar } from "@mui/material";

const UserProfile = () => {
    // const name = JSON.parse(sessionStorage.getItem("userInfo"));
    // const {_id,name,email,skills,address,workExprience,education,profileImage} = props;
    const authToken = localStorage.getItem("authToken");
    const { userId } = useParams();
    
    // console.log(userId);
    // const [selectedImage, setSelectdImage] = useState(null);
    
    const [isFollowing, setIsFollowing] = useState(false);
    const [isFollowing1, setIsFollowing1] = useState(false);
    const [isFollowing2, setIsFollowing2] = useState(false);
    const [isFollowing3, setIsFollowing3] = useState(false);
    const toggleFollow1 = () => {
        setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    };
    const toggleFollow2 = () => {
        setIsFollowing1((prevIsFollowing) => !prevIsFollowing);
    };
    const toggleFollow3 = () => {
        setIsFollowing2((prevIsFollowing) => !prevIsFollowing);
    };
    const toggleFollow4 = () => {
        setIsFollowing3((prevIsFollowing) => !prevIsFollowing);
    };

    const [isLoading, setIsLoading] = useState(true);
    const [userDetails, setUserDetails] = useState([]);
    const UserDetails = async (userId) => {
        try {
            setIsLoading(true);
            // console.log(userId)
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/user/${userId}`, {
            method : "GET",    
            headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr'
                }
            });
            console.log(response);
            const userDetailsData = await response.json();
            console.log(userDetailsData);
            if (userDetailsData) {
                setUserDetails(userDetailsData);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        UserDetails(userId);
    }, []);
    
    // console.log(userDetails)

    return (
        <div className="profile-container">
            <div className="profile-main-background">
                <div className="profile-main">
                    <div className="profile-container1">
                        <img
                            src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/entry-level-front-end-developer.jpg"
                            className="main-background-image"
                            alt="backgroundImage"
                        />
                        <div className="profile-container-inner">
                            <div className="profile-pic-container">
                            <Avatar
                                        src={userDetails?.data?.profileImage}
                                        sx={{ width: 120, height: 120 }}
                                        className="profile-pic"
                                        alt="userProfile"
                                        
                                    />
                            </div>

                            <h2 id="user-profile">{userDetails?.data?.name || ''}</h2>
                            <p className="user-profile-p" id="user-profile">
                                {userDetails?.data?.email || ''}
                            </p>
                        </div>
                    </div>
                    <div className="profile-description">
                        <h2>Address</h2>
                        <p id="user-profile-about">
                            {userDetails?.data?.address[0]?.street || ''}
                        </p>
                        <p id="user-profile-about">
                            {userDetails?.data?.address[0]?.city || ''}
                        </p>
                        <p id="user-profile-about">
                            {userDetails?.data?.address[0]?.state || ''}<span>,{userDetails?.data?.address[0]?.country}</span>
                        </p>

                    </div>
                    <div className="profile-description">
                        <h2>Experience</h2>
                        <div>{userDetails?.data?.workExprience[0]?.companyName || ''}</div>
                        <div>{userDetails?.data?.workExprience[0]?.designation || ''}</div>                       
                    </div>
                    <div className="profile-description">
                        <h2>Education</h2>
                        <div className="profile-dec-row">{userDetails?.education || ''}</div>
                    </div>
                    <div className="profile-description">
                        <h2>Skills</h2>
                        <div>{userDetails.skills || ''}</div>
                    </div>
                </div>

                <div className="profile-sidebar">
                    <div className="sidebar-people">
                        <h3 id="sidebar-section">People you may know</h3>
                        <div className="sidebar-people-row">
                            <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="" />
                            <div>
                                <h2 id="sidebar-section">John</h2>
                                <p id="sidebar-section">Manager at Swiggy</p>
                                <button href="#" onClick={toggleFollow1}>
                                    {isFollowing ? "Following" : "Follow"}
                                </button>
                            </div>
                        </div>
                        <div className="sidebar-people-row">
                            <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="" />
                            <div>
                                <h2 id="sidebar-section">Luciana</h2>
                                <p id="sidebar-section">Studied from University of Tokyo</p>
                                <button href="#" onClick={toggleFollow2}>
                                    {" "}
                                    {isFollowing1 ? "Following" : "Follow"}
                                </button>
                            </div>
                        </div>
                        <div className="sidebar-people-row">
                            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                            <div>
                                <h2 id="sidebar-section">Anders</h2>
                                <p id="sidebar-section">Customer Support Executive at CRED</p>
                                <button href="#" onClick={toggleFollow3}>
                                    {isFollowing2 ? "Following" : "Follow"}
                                </button>
                            </div>
                        </div>
                        <div className="sidebar-people-row">
                            <img src="https://randomuser.me/api/portraits/women/61.jpg" alt="" />
                            <div>
                                <h2 id="sidebar-section">Sara</h2>
                                <p id="sidebar-section">SDE at Zomato</p>
                                <button href="#" onClick={toggleFollow4}>
                                    {isFollowing3 ? "Following" : "Follow"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UserProfile;