import React from "react";
import "./ChannelsCard.css";

const ChannelsCard = (props) => {
    
    const { name, image, description, deleteChannel } = props;
    return (
        <>
            
            <div className="channels-container">
                <div className="channels-image-name">                   
                    <div className="channels-name-createdat">                       
                        <h4 className="channels-name">{name}</h4>                        
                    </div>
                </div>
                <div className="channels-description">
                    <div className="channels-description-content">
                        <p className="channels-content">{description}</p>
                    </div>

                    <div className="channels-image">
                        <img
                            src={image}
                            alt={name}
                            height="150"
                            width="150"
                            className="channels-image-click"
                        />
                    </div>

                </div>
                <div className="delete-channel-section">
                    <button className="delete-channel" onClick={deleteChannel}>Delete Channel</button>
                </div>
            </div>
        </>
    );
};

export default ChannelsCard;
