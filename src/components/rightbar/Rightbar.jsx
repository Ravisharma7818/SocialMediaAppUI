import React from 'react'
import "./rightbar.css"
import {Users} from '../../dumydata';
import Online from '../online/Online'
const Rightbar = () => {
    return (
        <div className="Rightbar">
            <div className="rightbarwrapper">
                <div className="birthdaycontainer">
                    <img src="images/add/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Fosters</b> and <b>3 other friends</b>Have a birthday Today
                    </span>

                </div>
                <img src="images/add/ad.png" alt="" className="rightbarad" />
                <h4 className="rightbartitle">Online Friend</h4>
                <ul className="rightbartfriendlist">
                 
                  { Users.map((u)=>(
                      <Online user={u} key={u.id}/>
                  ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;
