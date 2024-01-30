import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ChannelsCard from "../ChannelsCard/ChannelsCard";
import "./ChannelsList.css";

function ChannelsList() {

    const [isLoading, setIsLoading] = useState(true);
    const [channelsList, setchannelsList] = useState([]);
    const authToken = localStorage.getItem("authToken");
    const fetchChannelsList = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                "https://academics.newtonschool.co/api/v1/facebook/channel?limit=100", {
                headers: {
                    'projectID': 'q0hgf03522dr'
                }
            });
            const channelsListData = response.data.data;
            if (channelsListData) {
                setchannelsList(channelsListData);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };
    const deleteChannel = async (channelId) => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/facebook/channel/${channelId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'projectID': 'q0hgf03522dr',
                },
            });
            if (response.ok) {
                // Refresh comments after deleting a comment
                alert("Deleted Page Successfully");
                fetchChannelsList();
            } else {
                console.error("Error deleting comment:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    useEffect(() => {
        fetchChannelsList();
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {channelsList.length === 0 ? (
                        <p>No channels available.</p>
                    ) : (
                        <section className="channelslist-container">
                            {channelsList.map((channel,_id) => (
                            <ChannelsCard
                                key={_id}
                                {...channel}  
                                deleteChannel={() => deleteChannel(channel._id)}                              
                            />
                            ))}
                        </section>

                    )}
                </div>
            )}
        </div>
    );

}

export default ChannelsList;