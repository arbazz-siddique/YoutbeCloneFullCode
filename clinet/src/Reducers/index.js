import {combineReducers} from "redux"
import authreducer from "./auth"
import currentuserreducer from "./currentuser"
import chanelreducer from "./channel"
import videoreducer from "./video"
import commentreducer from "./comment"
import historyreducer from "./history"
import watchlaterreducer from "./watchlater"
import likedvideoreducer from "./likedvideo"
import groupreducer from "./group"
import subscriptionReducer from "./subscription"

export default combineReducers({
    authreducer,
    currentuserreducer,
    chanelreducer,
    videoreducer,
    commentreducer,
    historyreducer,
    watchlaterreducer,
    likedvideoreducer,
    groupreducer,
    subscriptionReducer,
    
    
})