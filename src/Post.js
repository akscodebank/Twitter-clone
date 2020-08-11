import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function post({ displayName, username, verified, text, image, avatar}) 
{
    return (
        <div className="post">
            <div classNAme="post_avatar">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Akshay Anand{" "}
                            <span className="post_headerSpecial">
                                <VerifiedUserIcon className="post_badge"/> @akshaytweets
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>This is the desciption</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/VIWrAn9VoMmM3eqJYa/giphy.gif" alt="Post Image"/>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                        <RepeeatIcon fontSize="small"/>
                        <FavouriteBorderIcon fontSize="small"/>
                        <PublishIcon font="small"/>
                </div>
            </div>            
        </div>
    )
}

export default post;
