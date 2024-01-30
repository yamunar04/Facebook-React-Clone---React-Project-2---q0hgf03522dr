import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./SinglePost.css";

function SinglePost() {
    const authToken = localStorage.getItem("authToken");
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { _id } = useParams();
    const navigate = useNavigate();

    const getPost = async () => {
        try {
            const postResponse = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${_id}`, {
                headers: {
                    'projectId': 'q0hgf03522dr',
                },
            });
            const postData = await postResponse.json();
            setPost(postData.data);

            // Fetch comments for the post
            const commentsResponse = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${_id}/comments`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr',
                },
            });
            const commentsData = await commentsResponse.json();
            setComments(commentsData.data);
        } catch (error) {
            console.error("Error fetching post and comments:", error);
        }
    };

    const addComment = async () => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${_id}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: newComment }),
            });

            if (response.ok) {
                // Refresh comments after adding a new comment
                getPost();
                setNewComment('');
            } else {
                console.error("Error adding comment:", response.statusText);
            }
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const deleteComment = async (commentId) => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/comment/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr',
                },
            });
            if (response.ok) {
                // Refresh comments after deleting a comment
                getPost();
            } else {
                console.error("Error deleting comment:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const deletePost = async (postId) => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/post/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr',
                },
            });
            if (response.ok) {
                // Refresh comments after deleting a comment
                getPost();
                alert("Post deleted Successfully");
                navigate("/");
            } else {
                console.error("Error deleting comment:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    useEffect(() => {
        getPost();
    }, [_id]); // Include _id in the dependency array to refetch on route parameter change

    const { author, createdAt, images = [""] } = post;

    return (
        <div className="single-post-container">
            <div className="single-post-container1">
                {author ? (
                    <>
                        <div className="single-post-name-createdat">
                            <p>{author.name}</p>
                        </div>
                        <div className="single-post-image">
                            <img src={images} alt="image" />
                        </div>
                        <div className="delete-post-container">
                            <button className="delete-post" onClick={() => deletePost(_id)} >Delete Post</button>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div className="single-post-container2">

                <h2 className="comments-section">Comments</h2>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment._id}>
                            <div className="comments-container">
                                <p>{comment.content}</p>
                                <p>{comment.createdAt}</p>
                                <button className="comments-delete-button" onClick={() => deleteComment(comment._id)}>Delete Comment</button>
                            </div>

                        </li>
                    ))}
                </ul>

                {/* Comment Form */}
                <div className="textarea-container">
                    <textarea
                        placeholder="Add a new comment..."
                        className="textarea-section"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={addComment} className="comments-add-button">Add Comment</button>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;
