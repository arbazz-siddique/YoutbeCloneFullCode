import React from 'react'
import vid from "../../Components/Video/video.mp4"
import WHL from '../../Components/WHL/WHL'
import { useSelector } from 'react-redux'


const Likevideo = () => {
  const likedvideolist=useSelector((state)=>state.likedvideoreducer)
//   const currentUser = useSelector((state) => state.currentuserreducer);

// if (!currentUser || !currentUser.result) {
//     return <h2>Please log in to see your liked videos</h2>;
// }


    // const likevideolist=[
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
    <WHL page={"Liked Video"} videolist={likedvideolist} />
  )
}

export default Likevideo