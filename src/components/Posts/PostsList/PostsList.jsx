import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PostsCard from "../PostsCard/PostsCard";
import "./PostsList.css";

function PostsList() {

    const [isLoading, setIsLoading] = useState(true);
    const [postsList, setPostsList] = useState([]);
    const fetchPostsList = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                "https://academics.newtonschool.co/api/v1/facebook/post?limit=100", {
                headers: {
                    'projectID': 'q0hgf03522dr'
                }
            });

            const postsListData = response.data.data;

            if (postsListData) {
                setPostsList(postsListData);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPostsList();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {postsList.length === 0 ? (
                        <p>No posts available.</p>
                    ) : (
                        <div className="postslist-container">
                            {postsList.map((post,_id) => (
                            <PostsCard
                                key={_id}
                                {...post}
                                
                            />
                            ))}
                        </div>

                    )}
                </div>
            )}
        </div>
    );

}

export default PostsList;

