import React, { useEffect } from 'react'
import "./Yourvideo.css"
import vid from "../../Components/Video/video.mp4"
import Showvideogrid from '../../Components/Showvideogrid/Showvideogrid'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import { useSelector } from 'react-redux'

const Yourvideo = () => {
  const currentuser=useSelector(state=>state.currentuserreducer);
  const yourvideolist= useSelector(state=>state.videoreducer)?.data?.filter(q=>q.videochanel === currentuser?.result._id).reverse()
  
  // const yourvideolist=[
//                 {
//                   _id:1,
//                   video_src:vid,
//                   chanel:"hello guys",
//                   title:"Video one",
//                   uploader:"Abc",
//                   description:"About how to make video 1",
//                 },
//                 {
//                   _id:2,
//                   video_src:vid,
//                   chanel:"hello guys",
//                   title:"Video two",
//                   uploader:"Abc",
//                   description:"About how to make video 2",
//                 },
//                 {
//                   _id:3,
//                   video_src:vid,
//                   chanel:"hello guys",
//                   title:"Video three",
//                   uploader:"Abc",
//                   description:"About how to make video 3",
//                 },
//                 {
//                   _id:4,
//                   video_src:vid,
//                   chanel:"hello guys",
//                   title:"Video 4",
//                   uploader:"Abc",
//                   description:"About how to make video 4",
//                 },
//               ]
  return (
    <div className="container_Pages_App">
        <Leftsidebar/>
        <div className="container2_Pages_App">
            <div className="container_yourvideo">
                <h1>Your Video</h1>
                {
                    currentuser ?(
                        <>
                        <Showvideogrid vid={yourvideolist} />
                        </>
                    ): <>
                    <h3>please login to see your videos</h3>
                    </>
                }
            </div>
        </div>
    </div>
    
  )
 
}

export default Yourvideo