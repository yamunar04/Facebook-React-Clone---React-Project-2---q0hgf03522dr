import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PostsCard.css";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const PostsCard = (props) => {
    // const { author, _id, createdAt, images, content, likeCount, commentCount, channel: { image } } = props;
    const { author, _id, createdAt, images, content, likeCount, commentCount } = props;

    const name = author.name;
    const user_id = author._id;
    const profileImage = author.profileImage;

    const [isLiked, setIsLiked] = useState(false);
    const [updatedLikeCount, setUpdatedLikeCount] = useState(likeCount);
    const authToken = localStorage.getItem("authToken");

    const navigate = useNavigate();
    const handleImageClick = () => {
        navigate(`/posts/${_id}`);
    };
    const handleClickProfile = () => {
        navigate(`/userprofile/${user_id}`);
    }

    const like = () => {
        setUpdatedLikeCount(updatedLikeCount + 1);
        setIsLiked(!isLiked);
    };
    const dislike = () => {
        setUpdatedLikeCount(updatedLikeCount - 1);
        setIsLiked(!isLiked);
    };

    return (
        <>
            <Link to={`/posts/${_id}`} ></Link>
            <section className="posts-container">
                <div className="posts-image-name">
                    {/* <img src={profileImage}
                        alt="img"
                        className="posts-profile-image"
                        onClick={handleClickProfile}
                    /> */}
                    <img
                        src={profileImage ? profileImage : 'https://www.shutterstock.com/shutterstock/photos/1153673752/display_1500/stock-vector-profile-placeholder-image-gray-silhouette-no-photo-1153673752.jpg'}
                        alt="img"
                        className="posts-profile-image"
                        onClick={handleClickProfile}
                    />
                    <div className="posts-name-createdat">
                        <h4 className="posts-name">{name}</h4>
                        <h6 className="posts-createdAt">{createdAt}</h6>
                    </div>
                </div>
                <div className="posts-description">
                    <div className="posts-description-content">
                        <p className="posts-content">{content}</p>
                    </div>

                    <div className="posts-image">
                        <img
                            src={images}
                            alt={name}
                            height="150"
                            width="150"
                            onClick={handleImageClick}
                            className="posts-image-click"
                        />
                    </div>

                </div>
                <div className="like-comment-section-display">
                    <div className="like-comment">
                        <div onClick={isLiked ? dislike : like}>
                            <AiFillLike className="like" />
                            <span className="like-count">
                                {updatedLikeCount}
                            </span>
                        </div>
                        <div className="comment1">
                            <FaCommentAlt className="comment" onClick={handleImageClick} />
                            <span className="comment-count" >
                                {commentCount}
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PostsCard;
