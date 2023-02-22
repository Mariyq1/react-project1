const ADD_MESSAGE = "ADD-MESSAGE";

type DialogType={
    id: number
    name: string
}
type MessageType={
    id: number
    message: string
}
let initialState = {
    dialogs: [
        {id: 1, name: "Mariya"},
        {id: 2, name:"Yurii"}
    ] as Array<DialogType>,
        messages: [
        {id: 1, message: "Hello, how are you"},
        {id:2, message:"I am very good and you"},
        {id:3, message:"OK"}
    ] as Array<MessageType>
}
export type InitialStateType= typeof initialState

const messagesReducer = (state = initialState, action:any):InitialStateType =>{
    
    switch(action.type) {
         
        case ADD_MESSAGE:
        let newMessage = action.newMessageText;
        return{...state,
            messages: [...state.messages, { id: 6, message: newMessage}]
        };
        
        
        default:
            return state;
    }

}
type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE
    newMessageText: string
}
export const addMessageActionCreator = (newMessageText: string):AddMessageActionCreatorType =>({type: ADD_MESSAGE,newMessageText})
    

export default messagesReducer;