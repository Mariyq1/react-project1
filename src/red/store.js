import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        newMessageText: ""
    },
    sidebar: {}
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
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
       this._state.sidebar = sidebarReducer(this._state.sidebar, action);
       this._callSubscriber(this._state);


        
}
    
}
    

        
export default store;
