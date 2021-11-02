import React from 'react'
import './online.css'
const Online = ({user}) => {
    return (
        <div>
           <li className="rightbartfriend">
                        <div className="rightbarprofileimgcontainer">
                            <img className="rightbarprofileimg" alt="" src={user.profilePicture} />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarUsername"> {user.username}</span>
                    </li>
                   
            
        </div>
    )
}

export default Online
