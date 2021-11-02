
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';

const Topbar = () => {
    return (

        <div className="topbarContainer">

            <div className="topbarLeft">
                <span className="logo">RaviSocial</span>

            </div>


            <div className="topbarCenter">

                <div className="search">
                    <SearchIcon className="seacrhIcon" />
                    <input className="searhInput" placeholder="Search" />

                </div>
            </div>

            <div className="topbarRight">

                <div className="topbarLinks">

                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcon">

                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>

                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>

                    </div>
                    <div className="topbarIconItem">
                        <CircleNotificationsIcon />
                        <span className="topbarIconBadge">7</span>

                    </div>
                    <div className="topbarIconItem">
                        <img src="/images/1.jpeg" className="topbar_img" alt="1" />
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Topbar
