import React from 'react'
import "./Describechannel.css"
import { FaEdit, FaUpload } from 'react-icons/fa'
import { useSelector } from 'react-redux'


const Describechannel = ({setVideoUploadPage,cid,setEditCreateChannelBtn}) => {
    // const channel=[
    //     {
    //         _id:1,
    //         name:"hola",
    //         email:"abc@gmail.com",
    //         joinedon:"2025-01-11",
    //         desc:"buthead duirng error"
    //     }
    // ]
    const currentuser=useSelector(state=>state.currentuserreducer);
    const channel = useSelector(state=>state.chanelreducer)
    const currentchannel= channel.filter((c)=>c._id === cid )[0]
    


  return (
    <div className="container3_chanel">
        <div className="chanel_logo_chanel">
            <b>{currentchannel?.name.charAt(0).toUpperCase()}</b>
        </div>
        <div className="description_chanel">
            <b>{currentchannel?.name}</b>
            <p>{currentchannel?.desc}</p>
        </div>
        {currentuser?.result._id === currentchannel?._id && (
            <>
            <p className="editbtn_chanel" onClick={()=>setEditCreateChannelBtn(true)}>
                <FaEdit/>
                <b>Edit Channel</b>
            </p>
            <p className="uploadbtn_chanel" onClick={()=>setVideoUploadPage(true)}>
                <FaUpload/>
                <b>Upload Video</b>
            </p>
            </>
        )}
    </div> 
  )
}

export default Describechannel