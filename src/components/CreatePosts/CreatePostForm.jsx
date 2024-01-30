import React, { useState } from "react";
import "./CreatePosts.css";
import { useNavigate } from 'react-router-dom';
import { createPostApi } from "../../helper/createPostAPI";

const CreatePostForm = () => {
    const authToken = localStorage.getItem("authToken");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const channelId = "64e5ef9e467bbeae5d846e04";
        const response = await createPostApi(authToken,title,content,images,channelId);
        alert("Post Created Successfully");
        navigate("/");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImages(file);
    };

    return (
        <>
            <div className="createpost-form">
                <form onSubmit={handleSubmit} >
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>

                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} />

                    <button type="submit">Create Post</button>
                </form>
            </div>
        </>

    );
};

export default CreatePostForm;
