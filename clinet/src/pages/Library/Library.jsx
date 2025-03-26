import React from 'react'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import { FaHistory } from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import vid from "../../Components/Video/video.mp4"
import WHLvideolist from '../../Components/WHL/WHLvideolist'
import "./Library.css"
import { useSelector } from 'react-redux'

const Library = () => {
    
    // const vids=[
    //     {
    //       _id:1,
    //       video_src:vid,
    //       chanel:"hello guys",
    //       title:"Video one",
    //       uploader:"Abc",
    //       description:"About how to make video 1",
    //     },
    //     {
    //       _id:2,
    //       video_src:vid,
    //       chanel:"hello guys",
    //       title:"Video two",
    //       uploader:"Abc",
    //       description:"About how to make video 2",
    //     },
    //     {
    //       _id:3,
    //       video_src:vid,
    //       chanel:"hello guys",
    //       title:"Video three",
    //       uploader:"Abc",
    //       description:"About how to make video 3",
    //     },
    //     {
    //       _id:4,
    //       video_src:vid,
    //       chanel:"hello guys",
    //       title:"Video 4",
    //       uploader:"Abc",
    //       description:"About how to make video 4",
    //     },
    //   ]

      const currentuser=useSelector(state=>state.currentuserreducer); 
      const likedvideolist=useSelector((state)=>state.likedvideoreducer)
      const watchlatervideolist=useSelector((s)=>s.watchlaterreducer)
      const watchhistoryvideolist=useSelector(s=>s.historyreducer)  
  return (
    <div className="container_page_App">
        <Leftsidebar/>
        <div className="container2_pages_app"> 
            <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                    <b>
                        <FaHistory/>
                    </b>
                    <b>History</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideolist page={"History"} currentuser={currentuser?.result?._id} videolist={watchhistoryvideolist} />
                </div>
            </div>

            <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                    <b>
                        <MdOutlineWatchLater/>
                    </b>
                    <b>Watch Later</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideolist page={"Watch Later"} currentuser={currentuser?.result?._id}  videolist={watchlatervideolist} />
                </div>
            </div>
            <div className="container_libraryPage">
                <h1 className="title_container_LibraryPage">
                    <b>
                        <AiOutlineLike/>
                    </b>
                    <b>Liked Videos</b>
                </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLvideolist page={"Liked Videos"} currentuser={currentuser?.result?._id}  videolist={likedvideolist} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Library