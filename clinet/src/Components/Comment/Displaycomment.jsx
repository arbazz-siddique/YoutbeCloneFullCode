import React,{useState} from 'react'
import moment from "moment"
import "./Comment.css"
import { useSelector,useDispatch} from 'react-redux'
import { editcomment, deletecomment } from '../../action/comment'

const Displaycomment = ({cid,commentbody,userid,commenton,usercommented}) => {

  const[edit,setedit]=useState(false);
  const[cmtbody, setcommentbody]=useState("");
  const[cmtid, setcmntid]=useState("");
  const currentuser=useSelector(state=>state.currentuserreducer);
  const dispatch = useDispatch()

  const handleedit=(ctid, ctbdy)=>{
    setedit(true);
    setcmntid(ctid);
    setcommentbody(ctbdy)
    
  }

  const handleonsubmit=(e)=>{
    e.preventDefault()
    if(!cmtbody){
      alert("type your comment")
    }else{
      dispatch(editcomment({id:cmtid, commentbody:cmtbody}))
      setcommentbody("")
    }
    setedit(false)
  }

  const handledelete = (id)=>{
    dispatch(deletecomment(id))
  }

  return (
    <>
    {edit?(
      <>
      <form className="comments_sub_form_comments" onSubmit={handleonsubmit}>
        <input type="text" onChange={(e)=>setcommentbody(e.target.value)} placeholder='Edit Comment' value={cmtbody} className="comment_ibox" />
        <input type="submit" value="change" className='comment_add_btn_comments'/>
      </form>
      </>
    ):(
      <p className="comment_body">{commentbody}</p>
    )}
    <p className="usercommented">{" "}- {usercommented} commented {moment(commenton).fromNow()}</p>
    {
      currentuser?.result?._id === userid && (
        <p className="EditDel_DisplayCommendt">
          <i onClick={()=>handleedit(cid, commentbody )}>Edit</i>
          <i onClick={()=>handledelete(cid)}>Delete</i>
        </p>
      )
    }
    </>
  )
}

export default Displaycomment