import React from 'react'
import Describechannel from './Describechannel'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../Components/Showvideogrid/Showvideogrid'
// import vid from "../../Components/Video/video.mp4"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Channel = ({setVideoUploadPage,setEditCreateChannelBtn}) => {
  const {cid} = useParams();
  const vids = useSelector(state=>state.videoreducer)?.data?.filter(q=>q?.videochanel === cid).reverse()
    // const vids=[
    //             {
    //               _id:1,
    //               video_src:vid,
    //               chanel:"guys",
    //               title:"Video one",
    //               uploader:"Abc",
    //               description:"About how to make video on youtube",
    //             },
    //             {
    //               _id:2,
    //               video_src:vid,
    //               chanel:"Programming guys",
    //               title:"Video two",
    //               uploader:"Abc",
    //               description:"About how to make video programming video",
    //             },
    //             {
    //               _id:3,
    //               video_src:vid,
    //               chanel:"justCode guys",
    //               title:"Video three",
    //               uploader:"Abc",
    //               description:"About how to make video jsutcode",
    //             },
    //             {
    //               _id:4,
    //               video_src:vid,
    //               chanel:"holaProgram guys",
    //               title:"Video 4",
    //               uploader:"Abc",
    //               description:"About how to make video like just chill guys",
    //             },
    //           ]
    

  return (
    <div className="container_Pages_App">
        <Leftsidebar/>
        <div className="container2_Pages_App">
            <Describechannel cid={cid} setVideoUploadPage={setVideoUploadPage} setEditCreateChannelBtn={setEditCreateChannelBtn}/>
            <Showvideogrid vids={vids}  />
        </div>
    </div>
  )
}

export default Channel