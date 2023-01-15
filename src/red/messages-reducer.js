const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const messagesReducer = (state, action) =>{
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
            message: state.newMessageText
        }
        state.messages.push(newMessage);
        state.newMessageText = "";
        return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
        return state;
        default:
            return state;
    }

}

export default messagesReducer;