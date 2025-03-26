import React, { useState } from 'react';
import "./Videoupload.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSelector, useDispatch } from 'react-redux';
import { uploadvideo } from '../../action/video';

const Videoupload = ({ setVideoUploadPage }) => {
    const [title, settitle] = useState("");
    const [videofile, setvideofile] = useState("");
    const [progress, setprogress] = useState(0);

    const dispatch = useDispatch();
    const currentuser = useSelector(state => state.currentuserreducer);

    const handlesetvideofile = (e) => {
        setvideofile(e.target.files[0]);
    };

    const fileoption = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setprogress(percentage)
            if (percentage === 100) {
                setTimeout(function () { }, 3000);
                setVideoUploadPage(false)
            }
        },
    };
    const uploadvideofile = () => {
        if (!title) {
            alert("plz enter a title of the video")
        } else if (!videofile) {
            alert("plz attach a video file");
        } else if (videofile.size > 1000000) {
            alert("Plz attach video file less than 1mb")
        } else {
            const filedata = new FormData()
            filedata.append("file", videofile)
            filedata.append("title", title)
            filedata.append("chanel", currentuser?.result?._id)
            filedata.append("uploader", currentuser?.result.name)
            // console.log(videofile)
            dispatch(uploadvideo({ filedata: filedata, fileoption: fileoption }))
        }
    }
    
    // const uploadvideofile = () => {
    //     console.log("Title:", title);  // Debugging
    //     if (!title) {
    //         alert("Please Enter The Video Title!!");
    //     } else if (!videofile) {
    //         alert("Please attach a video file!!");
    //     } else if (videofile.size > 10485760) { // 10MB limit
    //         alert("Please attach a video file smaller than 10MB!");
    //     } else {
    //         const filedata = new FormData();
    //         filedata.append("file", videofile); // Key name should match Multer
    //         filedata.append("title", title);
    //         filedata.append("channel", currentuser?.result?._id);
    //         filedata.append("uploader", currentuser?.result?.name);

    //         console.log("Uploading:", filedata);
          
    //         dispatch(uploadvideo(filedata, fileoption));
    //     }
    // };

    return (
        <div className="container_VidUpload">
            <input type="submit" name="text" value={"X"} onClick={() => setVideoUploadPage(false)} className="ibtn_x" />
            <div className="container2_VidUpload">
                <div className="ibox_div_vidupload">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
                        maxLength={30}
                        placeholder="Enter title of your video"
                        className="ibox_vidupload"
                    />
                    <label htmlFor="file" className="ibox_vidupload btn_vidUpload">
                        <input
                            type="file"
                            name="file"
                            style={{ fontSize: "1rem" }}
                            onChange={handlesetvideofile}
                            className="ibox_vidupload"
                        />
                    </label>
                </div>
                <div className="ibox_div_vidupload">
                    <input type="submit" onClick={uploadvideofile} value={"Upload"} className="ibox_vidupload btn_vidUpload" />
                    <div className="loader ibox_div_viduload">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "20px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255,255,255,${progress / 100})`,
                                textColor: "#f88",
                                trailColor: "#adff2f",
                                backgroundColor: "#3e98c7"
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videoupload;
