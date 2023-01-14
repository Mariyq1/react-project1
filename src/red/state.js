const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";


let store = {
    _state: {
    profilePage:{
        posts: [
        {message: 'Hi, how are you?', counts:14},
        {message: 'I am very good!', counts:1}
    ],
        newPostText:"Hello my friend"
    },
    messagesPage:{
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
},
    _callSubscriber () {
    console.log("State changed")
},   
    getState (){
        return this._state;
},
     subscribe (observer) {
        this._callSubscriber = observer;
},
    dispatch(action){
        if (action.type === ADD_POST) {
            let newPost = {
            message: this._state.profilePage.newPostText,
            counts:14
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        
        } else if (action.type === ADD_MESSAGE){
            let newMessage = {
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE){
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
}
    
}
        
        export const addPostActionCreator = () => ({type: ADD_POST})

        export const updateNewPostTextActionCreator = (text) =>({type: "UPDATE-NEW-POST-TEXT",
            newText: text})
    
        export const addMessageActionCreator = () =>({type: "ADD-MESSAGE"})
    
        export const updateNewMessageActionCreator = (message) =>({ type:"UPDATE-NEW-MESSAGE",
        newMessage: message})
    

        
export default store;
