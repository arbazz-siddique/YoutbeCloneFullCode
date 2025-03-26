import React,{useState} from 'react'
import "./Comment.css"
import Displaycomment from './Displaycomment'
import { useDispatch, useSelector } from 'react-redux'
import { postcomment } from '../../action/comment'


const Comment = ({videoid}) => {
    const[commenttext, setcommenttext]=useState("");
    const currentuser=useSelector((state)=>state.currentuserreducer);
    const commentlist = useSelector(state=>state.commentreducer)
    const dispatch = useDispatch()
    // const commentlist=[
    //     {
    //         _id:1,
    //         commentbody:"hello there",
    //         usercommented:"abs"
    //     },
    //     {
    //         _id:2,
    //         commentbody:"hello there are you free",
    //         usercommented:"random hai kya"
    //     },
        

    // ]

    const handleonsubmit=(e)=>{
        e.preventDefault();
        if(currentuser){
            if(!commenttext){
                alert("please type your comment!!")
            }else{
                dispatch(postcomment({
                    videoid:videoid,
                    userid:currentuser?.result._id,
                    commentbody:commenttext,
                    usercommented:currentuser?.result.name

                }))
                setcommenttext("")
            }
        }else{
            alert("please login to comment")
        }
    }

  return (
    <>
    <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
        <input type="text" onChange={(e)=>setcommenttext(e.target.value)} value={commenttext} placeholder='Add Comments' className='comment_ibox' />
        <input type="submit" value="add" className='comment_add_btn_comments' />
    </form>
    <div className="display_comment_container">
        {commentlist?.data.filter((q)=>videoid === q?.videoid).reverse().map((m)=>{
            return(<Displaycomment cid={m._id} userid={m.userid} commentbody={m.commentbody} commenton={m.commenton} usercommented={m.usercommented} />)
        })}
    </div>
    </>
  )
}

export default Comment