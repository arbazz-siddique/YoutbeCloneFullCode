const subscriptionReducer = (state = { subscription: {} }, action) => {
    switch (action.type) {
        case "UPGRADE_SUBSCRIPTION":
            return { ...state, subscription: action.payload };
        default:
            return state;
    }
};

export default subscriptionReducer;
