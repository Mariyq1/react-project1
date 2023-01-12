import { rerenderEntireTree } from "../render";

let state = {
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
}
    export let addPost= () => {
        let newPost = {
            message: state.profilePage.newPostText,
            counts:14
        }
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = "";
        rerenderEntireTree(state);
    }
    export let updateNewPostText = (newText) =>{
        state.profilePage.newPostText = newText;
        rerenderEntireTree(state);
    }
    export let addMessage = () => {
        let newMessage = {
            message: state.messagesPage.newMessageText
        }
        state.messagesPage.messages.push(newMessage);
        state.messagesPage.newMessageText = "";
        rerenderEntireTree(state);
    }
     export let updateNewMessage = (newMessage) =>{
        state.messagesPage.newMessageText = newMessage;
     }
export default state;