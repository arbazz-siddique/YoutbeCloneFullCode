import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "../src/Allroutes"; // ✅ Import routes
import Drawsliderbar from "../src/Components/Leftsidebar/Drawsliderbar"
import Createeditchannel from "./pages/Channel/Createeditchannel";
import Videoupload from "./pages/Videoupload/Videoupload";
import { useDispatch } from "react-redux";
import { fetchallchannel } from "./action/channeluser";
import { getallvideo } from "./action/video";
import { getallcomment } from "./action/comment";
import { getallhistory } from "./action/history";
import { getallwatchlater } from "./action/watchlater";
import { getalllikedvideo } from "./action/likedvideo";
import { getallgroups } from "./action/group";

function App() {
  const [toggledrawersidebar, setToggledrawersidebar] = useState({ display: "none" });
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchallchannel())
  dispatch(getallvideo())
  dispatch(getallcomment())
  dispatch(getallhistory())
  dispatch(getallwatchlater())
  dispatch(getalllikedvideo())
  dispatch(getallgroups())
},[dispatch])


const toggledrawer = () => {
  if (toggledrawersidebar.display === "none") {
    setToggledrawersidebar({
      display: "flex",
    });
  } else {
    setToggledrawersidebar({
      display: "none",
    });
  }
}
  const [editCreateChannelBtn, setEditCreateChannelBtn] = useState(false);
  const [videoUploadPage, setVideoUploadPage] = useState(false);

  return (
    <Router>
      {
        videoUploadPage && <Videoupload setVideoUploadPage={setVideoUploadPage}/>
      }
      {editCreateChannelBtn && (
        <Createeditchannel setEditCreateChannelBtn={setEditCreateChannelBtn}/>
      )}
      <Navbar setEditCreateChannelBtn={setEditCreateChannelBtn} toggledrawer={toggledrawer} />
      <Drawsliderbar toggledrawer={toggledrawer} toggledrawersidebar={toggledrawersidebar} />
      <Allroutes setEditCreateChannelBtn={setEditCreateChannelBtn} setVideoUploadPage={setVideoUploadPage} /> {/* ✅ Add Routes */}
    </Router>
  );
}

export default App;
