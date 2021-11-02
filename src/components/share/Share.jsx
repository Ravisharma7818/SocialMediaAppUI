import React from 'react'
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
const Share = () => {
    return (
        <div className="Share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img alt="imaged" src="images/1.jpeg" className="shareProfileImg" />
                <input placeholder="Hello Brother ! How are you" className="shareInput" />
            </div>
            <div className="shareBottom">

            </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <PermMediaIcon htmlColor="tomato" className="icon"/>
                    <span className="shareoptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                <LabelIcon htmlColor="blue" className="icon"/>
                    <span className="shareoptionText">Tag</span>
                </div>
                <div className="shareOption">
                <RoomIcon htmlColor="green" className="icon"/>
                    <span className="shareoptionText">Location</span>
                </div>
                <div className="shareOption">
                <EmojiEmotionsIcon htmlColor="goldenrod" className="icon"/>
                    <span className="shareoptionText">Feelings</span>
                </div>
               

            </div>
            <button className="shareButton">Share</button>
        </div>
        </div>
            
        </div>
    )
}

export default Share
