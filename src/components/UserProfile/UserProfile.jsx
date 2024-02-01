import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import { useParams } from 'react-router-dom';
import { Avatar } from "@mui/material";
import Navbar from "../Navbar/Navbar";

const UserProfile = () => {
    const authToken = localStorage.getItem("authToken");
    const { userId } = useParams();

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

            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/user/${userId}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr'
                }
            });

            const userDetailsData = await response.json();

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


    return (
        <>
            <Navbar />
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
                            <p>{userDetails?.data?.workExperience[0]?.companyName || ''}</p>
                            <p>{userDetails?.data?.workExperience[0]?.designation || ''}</p>
                        </div>
                        <div className="profile-description">
                            <h2>Education</h2>
                            <p className="profile-dec-row">{userDetails?.data?.education[0]?.schoolName || ''}</p>
                            <p className="profile-dec-row">{userDetails?.data?.education[0]?.degree || ''}</p>
                        </div>
                        <div className="profile-description">
                            <h2>Skills</h2>
                            <p>{userDetails?.data?.skills[0] || ''}</p>
                            <p>{userDetails?.data?.skills[1] || ''}</p>
                            <p>{userDetails?.data?.skills[2] || ''}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default UserProfile;