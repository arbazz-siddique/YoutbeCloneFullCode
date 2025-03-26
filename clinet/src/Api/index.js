import axios from "axios"

// const API=axios.create({baseURL:`http://localhost:5000/})
const API=axios.create({baseURL:`http://localhost:5000/`})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("Profile")){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem("Profile")).token}`
    }
    return req;
})


export const login = (authdata)=>API.post("/user/login", authdata);
export const updatechanneldata = (id,updatedata)=>API.patch(`/user/update/${id}`, updatedata);
export const fetchallchannel=()=>API.get("/user/getallchannel")

export const uploadvideo = (filedata,fileoption)=>API.post("/video/uploadvideo", filedata,fileoption)
export const getvideos=()=>API.get("/video/getvideos")
export const likevideo =(id,Like)=>API.patch(`/video/like/${id}`,{Like})
export const viewsvideo=(id)=>API.patch(`/video/views/${id}`);

export const postcomment = (commentdata)=>API.post("/comment/post", commentdata)
export const getallcomment=()=>API.get('/comment/get')
export const deletecomment =(id)=>API.delete(`/comment/delete/${id}`)
export const editcomment =(id, commentbody) => API.patch(`/comment/edit/${id}`, commentbody)


export const addtohistory =(historydata)=>API.post("/video/history", historydata)
export const getallhistory =()=>API.get("/video/getallhistory")
export const deletehistory =(userid)=>API.delete(`/video/deletehistory/${userid}`)

export const addtolikevideo=(likedvideodata)=>API.post('/video/likevideo',likedvideodata)
export const getalllikedvideo=()=>API.get('/video/getalllikevide')
export const deletelikedvideo=(videoid,viewer)=>API.delete(`/video/deletelikevideo/${videoid}/${viewer}`)


export const addtowatchlater=(watchlaterdata)=>API.post('/video/watchlater',watchlaterdata)
export const getallwatchlater=()=>API.get('/video/getallwatchlater')
export const deletewatchlater=(videoid,viewer)=>API.delete(`/video/deletewatchlater/${videoid}/${viewer}`)

//  for groups
export const creategroup = (groupdata) => API.post("/group/create", groupdata);
export const getallgroups = () => API.get("/group/all");
export const joingroup = (groupId, userId) => API.post(`/group/join/${groupId}`, { userId });
export const leavegroup = (groupId, userId) => API.post(`/group/leave/${groupId}`, { userId });
export const deletegroup = (id) => API.delete(`/group/delete/${id}`);

export const searchGroups = (query) => API.get(`/group/search?query=${query}`);
export const sendMessage = (groupId, messageData) => API.post(`/group/message/${groupId}`, messageData);
export const getMessages = (groupId) => API.get(`/group/messages/${groupId}`);


export const upgradeSubscription = (userId, plan) => API.post("/subscription/upgrade", { userId, plan });
