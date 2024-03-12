import React from "react";
import "./CommingSoon.css";
import Navbar from "../Navbar/Navbar";

function CommingSoon () {
    return(
        <>
            <Navbar />
            <div className="commingsoon">Feature is Unavailable</div>
            <div className="comming-soon-image">
                <img src="https://media.istockphoto.com/id/1354840767/photo/coming-soon-written-white-lightbox-sitting-on-pink-and-blue-background.webp?b=1&s=170667a&w=0&k=20&c=tHBJxA1dt0mS940mZLuPLcm_g8_p6GBjf7qCanrUuM8="></img>
            </div>
        </>
        
    )
}
export default CommingSoon;