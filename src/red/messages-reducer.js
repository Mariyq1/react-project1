const ADD_MESSAGE = "ADD-MESSAGE";


let initialState = {
    dialogs: [
        {id: 1, name: "Mariya"},
        {id: 2, name:"Yurii"}
    ],
        messages: [
        {id: 1, message: "Hello, how are you"},
        {id:2, message:"I am very good and you"},
        {id:3, message:"OK"}
    ]
}

const messagesReducer = (state = initialState, action) =>{
    
    switch(action.type) {
         
        case ADD_MESSAGE:
        let newMessage = action.newMessageText;
        return{...state,
            newMessageText: "",
            messages: [...state.messages, { message: newMessage}]
        };
        
        
        default:
            return state;
    }

}

export const addMessageActionCreator = (newMessageText) =>({type: ADD_MESSAGE,newMessageText})
    

export default messagesReducer;