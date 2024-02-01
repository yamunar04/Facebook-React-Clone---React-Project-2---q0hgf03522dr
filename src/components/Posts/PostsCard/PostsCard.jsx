import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PostsCard.css";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const PostsCard = (props) => {
    const { author , _id, createdAt, images, content, likeCount, commentCount,channel : {image} } = props;

    const name = author.name;
    const user_id = author._id;

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
                    <img src={image}
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
                        <FaCommentAlt className="comment" onClick={handleImageClick}/>
                        <span className="comment-count" >
                            {commentCount}                           
                        </span>                                           
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostsCard;
