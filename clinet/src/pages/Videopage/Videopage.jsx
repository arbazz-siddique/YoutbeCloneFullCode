
import React, { useEffect } from 'react'
import "./Videopage.css"
import moment from 'moment'
import Likewatchlatersavebtns from './Likewatchlatersavebtns'
import { Link, useParams } from 'react-router-dom'
// import vidd from "../../Components/Video/video.mp4"
import Comment from '../../Components/Comment/Comment'
import { useSelector ,useDispatch} from 'react-redux'
import { viewvideo } from '../../action/video'
import { addtohistory } from '../../action/history'
import { useRef } from 'react';

const Videopage = () => {

    const {vid} = useParams();
    const dispatch = useDispatch()
    const effectRan = useRef(false);
  const vids = useSelector((state)=>state.videoreducer)
  const currentuser=useSelector(state=>state.currentuserreducer);
    // const vids=[
    //         {
    //           _id:1,
    //           video_src:vidd,
    //           chanel:"hello guys",
    //           title:"Video one",
    //           uploader:"Abc",
    //           description:"About how to make video 1",
    //         },
    //         {
    //           _id:2,
    //           video_src:vidd,
    //           chanel:"hello guys",
    //           title:"Video two",
    //           uploader:"Abc",
    //           description:"About how to make video 2",
    //         },
    //         {
    //           _id:3,
    //           video_src:vidd,
    //           chanel:"hello guys",
    //           title:"Video three",
    //           uploader:"Abc",
    //           description:"About how to make video 3",
    //         },
    //         {
    //           _id:4,
    //           video_src:vidd,
    //           chanel:"hello guys",
    //           title:"Video 4",
    //           uploader:"Abc",
    //           description:"About how to make video 4",
    //         },
    //       ]
    // const vidNumber = parseInt(vid,10)
    // const vv= vids?.data.filter((q)=> q._id ===vid)[0]
    
    const vv = vids?.data?.filter((q) => q._id === vid)[0] || null;


    // console.log(vv,vid)

 
    const handleviews =()=>{
        dispatch(viewvideo({id:vid}))
    }
    

    const handlehistory=()=>{
        dispatch(addtohistory({
            videoid:vid,
            viewer:currentuser?.result._id,
        }))
    }

    useEffect(() => {
        if (effectRan.current === false) {
            if (currentuser) {
                handlehistory();
            }
            handleviews();
        }
    
        return () => {
            effectRan.current = true;
        };
    }, []);
    

  return (
   <>
   <div className="container_videoPage">
    <div className="container2_videoPage">
        <div className="video_display_screen_videoPage">
            <video src={`http://localhost:5000/${vv?.filepath}`} className="video_ShowVideo_videoPage" controls ></video>
            <div className="video_details_vidoePage">
                <div className="video_btns_title_VideoPage_cont">
                    <p className="video_title_VideoPage">{vv?.title}</p>
                    <div className="views_date_btns_VideoPage">
                        <div className="views_videoPage">
                            {vv?.views} views <div className='dot'> </div>{"  "}
                            {moment(vv?.createdat).fromNow()}
                        </div>
                        <Likewatchlatersavebtns  vv={vv} vid={vid} />
                    </div>
                </div>
                <Link to={"/"} className='chanel_details_videoPage'>
                <b className="chanel_logo_videoPage">
                    <p>{vv?.uploader.charAt(0).toUpperCase()} </p>
                </b>
                <p className="chanel_name_videoPage">{vv?.uploader}</p>
                </Link>
                <div className="comments_VideoPage">
                    <h2>
                        <u>Comments</u>
                    </h2>
                    <Comment videoid={vv?._id}/>
                </div> 
            </div>
        </div>
        <div className="moreVideoBar">More Videos</div>
    </div>
   </div>
   </>
  )
}

export default Videopage