import React,{useState} from 'react'
import "./Createeditchannel.css"
import { useSelector } from 'react-redux';
import { updatechanneldata } from '../../action/channeluser';
import { useDispatch } from 'react-redux';
import {login} from "../../action/auth"

const Createeditchannel = ({setEditCreateChannelBtn}) => {
  const dispatch = useDispatch()
  const currentuser=useSelector(state=>state.currentuserreducer);
  
    const[name, setname]=useState(currentuser?.result.name);
    const[desc, setdesc]=useState(currentuser?.result.desc)



      const handlesubmit=()=>{
        if(!name){
            alert("Enter you name!!")
        }else if(!desc){
            alert("Enter descripton!!")
        }else{
            dispatch(updatechanneldata(currentuser.result._id,{name:name, desc:desc}))
            setEditCreateChannelBtn(false)
            setTimeout(()=>{
              dispatch(login({email:currentuser.result.email}))
            },5000)
        }
      }

  return (
    <div className="container_CreateEditChanel">
        <input type="submit" name='text' value={"X"} className="ibtn_x" onClick={()=>setEditCreateChannelBtn(false)} />
        <div className="container2_CreateEditChanel">
            <h1>{currentuser?.result?.name ? <>Edit</>:<>Create</>} Your Channel</h1>
            <input type="text" placeholder='Enter your Channel Name' name='text' value={name} onChange={(e)=>setname(e.target.value)} className="ibox" />
            <textarea type="text" rows={15} placeholder='Enter your Channel Description' className='ibox' value={desc} onChange={(e)=>setdesc(e.target.value)} id=""></textarea>
            <input type="submit" value={"submit"} onClick={handlesubmit} className="ibtn" />
        </div>
    </div>
  )
}

export default Createeditchannel