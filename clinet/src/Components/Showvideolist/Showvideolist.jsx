import React from 'react'
import Showvideo from '../Showvideo/Showvideo'
// import vid from "../Video/video.mp4"
import { useSelector } from 'react-redux'

const Showvideolist = ({videoid}) => {
  const vids = useSelector(state=>state.videoreducer)
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
  return (
    <div className="container_ShowVideoGrid">
        {
            vids?.data.filter(q=>q._id === videoid).map(vi=>{
                return(
                    <div className="video_box_app" key={vi._id}>
                        <Showvideo vid={vi}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Showvideolist