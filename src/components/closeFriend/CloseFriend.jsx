import React from 'react'
import './closeFriend.css';

const closeFriend = ({user}) => {
    return (
        <div>
             <li className="sidebarfriend">
                    <img className="sidebarfriendimg " src={user.profilePicture} alt="/public/images/2.jpeg"/>
                    <span className="sidebarfriendname">{user.username}</span>
                </li>
        </div>
    )
}

export default closeFriend;
