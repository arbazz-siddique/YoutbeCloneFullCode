import * as api from "../Api"

export const creategroup = (groupdata) => async (dispatch) => {
    try {
        console.log("Creating group with data:", groupdata); 
        const { data } = await api.creategroup(groupdata);
        dispatch({ type: "CREATE_GROUP", payload: data });
        dispatch(getallgroups());
    } catch (error) {
        console.log("Error creating group:", error.response ? error.response.data : error.message);
    }
};


export const getallgroups = (id) => async (dispatch) => {
    try {
        const { data } = await api.getallgroups(id);
        dispatch({ type: "FETCH_ALL_GROUPS", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const joingroup = (groupId, userId) => async (dispatch) => {
    try {
        
        const { data } = await api.joingroup(groupId, userId);
        dispatch({ type: "UPDATE_GROUP", payload: data.group });
    } catch (error) {
        console.error("Error joining group:", error.response ? error.response.data : error.message);
    }
}; 

export const leavegroup = (groupId, userId) => async (dispatch) => {
    try {
        await api.leavegroup(groupId, userId);
        dispatch(getallgroups());
    } catch (error) {
        console.log(error);
    }
};

export const deletegroup = (id) => async (dispatch) => {
    try {
        await api.deletegroup(id)
        dispatch(getallgroups()) 
    } catch (error) {
        console.log(error)
    }
};

export const searchGroups = (query) => async (dispatch) => {
    try {
        const { data } = await api.searchGroups(query);
        dispatch({ type: "SEARCH_GROUPS", payload: data });
    } catch (error) {
        console.error("Error searching groups:", error.response ? error.response.data : error.message);
    }
};

export const sendMessage = (groupId, userId, message) => async (dispatch) => {
    try {
        const { data } = await api.sendMessage(groupId, { userId, message });
        dispatch({ type: "SEND_MESSAGE", payload: { groupId, messages: data.messages } });
    } catch (error) {
        console.error("Error sending message:", error.response ? error.response.data : error.message);
    }
};
export const getMessages = (groupId) => async (dispatch) => {
    try {
        const { data } = await api.getMessages(groupId);
        dispatch({ type: "FETCH_MESSAGES", payload: { groupId, messages: data.messages } });
    } catch (error) {
        console.error("Error fetching messages:", error.response ? error.response.data : error.message);
    }
};