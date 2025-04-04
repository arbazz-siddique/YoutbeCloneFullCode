import React from 'react'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../Components/Showvideogrid/Showvideogrid'
import vid from "../../Components/Video/video.mp4"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Search = () => {
  const {searchquery}=useParams();
    const vids=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase()))
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
        <div className="container_Pages_App">
          <Leftsidebar/>
          <div className="container2_Pages_App">
            <Showvideogrid vid={vids}/>
          </div>
        </div>
      )
}

export default Search