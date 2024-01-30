import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PostsCard.css";
import { FaCommentAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const PostsCard = (props) => {
    const { author , _id, createdAt, images, content, likeCount, commentCount,channel : {image} } = props;
//     const { author } = props;
//   const _id = author?._id;
    const name = author.name;
    const user_id = author._id;
    console.log(user_id);
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

    const handleLikeClick = async () => {
        setUpdatedLikeCount(updatedLikeCount+1);
        if (!isLiked) {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/like/${_id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr'
                }
            });
    
            if (response.ok) {
                const likeResponse = await response.json();
    
                if (likeResponse && likeResponse.status === 'success') {
                    setIsLiked(true);
                } else {
                    console.error('Invalid like response structure:', likeResponse);
                }
            } else {
                console.error('Failed to like post:', response);
            }
        }
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
                        <div onClick={handleLikeClick}>
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
