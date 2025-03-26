const groupreducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case "CREATE_GROUP":
      return { ...state, data: [...state.data, action.payload] };
    case "FETCH_ALL_GROUPS":
      return { ...state, data: action.payload };
    case "UPDATE_GROUP":
      return {
        ...state,
        data: state.data.map((group) =>
          group._id === action.payload._id ? action.payload : group
        ),
      };
    case "SEARCH_GROUPS":
      return { ...state, data: action.payload };
    case "SEND_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "FETCH_MESSAGES":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

export default groupreducer;
