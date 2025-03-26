import React from 'react'
import "./Leftsidebar.css"
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineVideoLibrary, MdSubscriptions, MdOutlineWatchLater } from "react-icons/md"
import { HiUsers } from 'react-icons/hi';
import { FaHistory } from 'react-icons/fa'
import shorts from "./short.png"
import { NavLink } from 'react-router-dom'

const Drawersliderbar = ({ toggledraw, toggledrawersidebar }) => {
  return (
    <div className="container_DrawaerLeftSidebar" style={toggledrawersidebar}>
      <div className="container2_DrawaerLeftSidebar">
        <div className="Drawer_leftsidebar">
          <NavLink to={'/'} className="icon_sidebar_div">
            <AiOutlineHome size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Home</div>
          </NavLink>

          <div className="icon_sidebar_div">
            <MdOutlineExplore size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Explore</div>
          </div>
          <div className="icon_sidebar_div">
            <img src={shorts} alt='shorts' width={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Shorts</div>
          </div>
          <div className="icon_sidebar_div">
            <MdSubscriptions size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Subscriptions</div>
          </div>
        </div>
        <div className="libraryBtn_Drawerleftsidebar">

        <NavLink to={'/group'} className="icon_sidebar_div">
  <HiUsers size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
  <div className="text_sidebar_icon">Groups</div>
</NavLink>

          <NavLink to={'/Library'} className="icon_sidebar_div">
            <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Library</div>
          </NavLink>
          <NavLink to={'/Watchhistory'} className="icon_sidebar_div">
            <FaHistory size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">History</div>
          </NavLink>
          <NavLink to={'/Yourvideo'} className="icon_sidebar_div">
            <AiFillPlaySquare size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Your Videos</div>
          </NavLink>
          <NavLink to={'/Watchlater'} className="icon_sidebar_div">
            <MdOutlineWatchLater size={22} className="icon_sidebar" style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Watch Later</div>
          </NavLink>
          <NavLink to={'/Likedvideo'} className="icon_sidebar_div">
            <AiFillLike size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
            <div className="text_sidebar_icon">Liked Videos</div>
          </NavLink>
        </div>
        <div className="subScriptions_lsdbar">
          <h3>Your Subscription</h3>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
          <div className="chanel_lsdbar">
            <p>C</p>
            <div>Chanel</div>
          </div>
        </div>
      </div>
      <div className="container3_DrawaerLeftSidebar" onClick={toggledraw}></div>
    </div>
  )
}

export default Drawersliderbar;