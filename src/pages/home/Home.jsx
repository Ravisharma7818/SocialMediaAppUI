import React from 'react'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import Feed from '../../components/feed/Feed.jsx';
import Rightbar from '../../components/rightbar/Rightbar.jsx';
import "./home.css";



const Home = () => {
    return (
        <>

            <Topbar />
            <div className="homecontainer">
            <Sidebar />
            <Feed />
            <Rightbar />
            </div>   



        </>
    )
}

export default Home;
