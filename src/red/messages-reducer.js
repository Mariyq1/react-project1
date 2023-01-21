const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Mariya"},
        {id: 2, name:"Yurii"}
    ],
        messages: [
        {id: 1, message: "Hello, how are you"},
        {id:2, message:"I am very good and you"},
        {id:3, message:"OK"}
    ],
        newMessageText: "What is your name"
}

const messagesReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
            message: state.newMessageText
        }
        let stateCopy = {...state};
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageText = "";
        return stateCopy;}
        case UPDATE_NEW_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessage;
        return stateCopy;}
        default:
            return state;
    }

}

export const addMessageActionCreator = () =>({type: ADD_MESSAGE})
    
export const updateNewMessageActionCreator = (message) =>({ type:UPDATE_NEW_MESSAGE,
        newMessage: message})
export default messagesReducer;