import React from 'react'
import "./Home.css"
// import vid from "../../Components/Video/video.mp4"
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar"
import Showvideogrid from '../../Components/Showvideogrid/Showvideogrid'
import { useSelector } from 'react-redux'

const Home = () => {
  const vids = useSelector(state=>state.videoreducer)?.data?.filter(q=>q).reverse()
  
  // const vids=[
  //   {
  //     _id:1,
  //     video_src:vid,
  //     chanel:"hello guys",
  //     title:"Video one",
  //     uploader:"Abc",
  //     description:"About how to make video 1",
  //   },
  //   {
  //     _id:2,
  //     video_src:vid,
  //     chanel:"hello guys",
  //     title:"Video two",
  //     uploader:"Abc",
  //     description:"About how to make video 2",
  //   },
  //   {
  //     _id:3,
  //     video_src:vid,
  //     chanel:"hello guys",
  //     title:"Video three",
  //     uploader:"Abc",
  //     description:"About how to make video 3",
  //   },
  //   {
  //     _id:4,
  //     video_src:vid,
  //     chanel:"hello guys",
  //     title:"Video 4",
  //     uploader:"Abc",
  //     description:"About how to make video 4",
  //   },
  // ]
  const navlist=[
    "All",
    "Python",
    "Java",
    "JavaScript",
    "C++",
    "C#",
    "Web Devlopment",
    "Animation ",
    "Gaming",
    "Coding",
  ]
  return (
    <div className="container_Pages_App">
      <Leftsidebar/>
      <div className="container_2_Pages_App">
        <div className="navigation_Home">
        {
          navlist.map((m)=>{
            return(
              <p key={m} className='btn_nav_home'>{m}</p>
            )
          })
        }
        </div>
        <Showvideogrid vid={vids} />
      </div>
    </div>
  )
}

export default Home