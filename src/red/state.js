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
        if (action.type === "ADD-POST") {
            let newPost = {
            message: this._state.profilePage.newPostText,
            counts:14
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        } else if(action.type === "UPDATE-NEW-POST-TEXT"){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        
        } else if (action.type === "ADD-MESSAGE"){
            let newMessage = {
            message: this._state.messagesPage.newMessageText
        }
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = "";
        this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE"){
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
}
    
        

}
export default store;
