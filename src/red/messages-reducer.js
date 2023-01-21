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
        case UPDATE_NEW_MESSAGE:
        return {...state,
        newMessageText: action.newMessage
        };
         
        case ADD_MESSAGE:
        let newMessage = state.newMessageText;
        return{...state,
            newMessageText: "",
            messages: [...state.messages, {id:4, message: newMessage}]
        };
        
        
        default:
            return state;
    }

}

export const addMessageActionCreator = () =>({type: ADD_MESSAGE})
    
export const updateNewMessageActionCreator = (message) =>({ type:UPDATE_NEW_MESSAGE,
        newMessage: message})
export default messagesReducer;