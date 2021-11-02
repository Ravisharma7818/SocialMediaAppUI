import React from 'react'
import "./sidebar.css";

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import HelpIcon from '@mui/icons- material/Help';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';

// import closeFriend from '../closeFriend/closeFriend';
import {Users} from '../../dumydata.js';
import CloseFriend from '../closeFriend/CloseFriend';
const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="sidebarwrapper">
                <ul className="sidebarlist">

                    <li className="sidebarlistitem">

                        <RssFeedIcon  className="Icon"  />
                        <span >  Feed </span>

                    </li>

                    <li className="sidebarlistitem">
                        <ChatIcon   className="Icon" />
                        <span > Chat </span>

                    </li>

                    <li className="sidebarlistitem">
                        <VideocamIcon  className="Icon"  />
                        <span > Video </span>

                    </li>

                    <li className="sidebarlistitem">
                        <GroupsIcon   className="Icon" />
                        <span > Groups </span>

                    </li>

                    <li className="sidebarlistitem">
                        <BookmarkIcon    className="Icon"/>
                        <span > Bookmark </span>

                    </li>

                    <li className="sidebarlistitem">
                        <HelpIcon   className="Icon" />
                        <span > Help </span>

                    </li>

                    <li className="sidebarlistitem">
                        <WorkIcon   className="Icon" />
                        <span > Work </span>

                    </li>
                    <li className="sidebarlistitem">
                        <EventIcon   className="Icon" />
                        <span > Event </span>

                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarhr"/>
                <ul className="sidebarfriendlist">
                
                {Users.map((u)=>(
                    <CloseFriend key={u.id} user={u}/>
                ))}

                </ul>
            </div>
        </div>
    )
}
// Compiled successfully!
export default Sidebar;
