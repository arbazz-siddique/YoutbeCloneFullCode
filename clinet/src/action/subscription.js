import * as api from "../Api";

export const upgradeSubscription = (userId, plan) => async(dispatch)=>{
    try {
        const {data} = await api.upgradeSubscription(userId, plan);
        dispatch({type:"UPGRADE_SUBSCRIPTION", payload:data.subscription});
    } catch (error) {
        console.error("Subscription Upgrade Error:", error.response ? error.response.data : error.message);
    }
}