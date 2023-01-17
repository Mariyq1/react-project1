import React from "react";
import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../red/profile-reducer"
import MyPosts from "./MyPosts";

    export default function MyPostsContainer (props){
    let state = props.store.getState();

    let onAddPost= () =>{
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPosts onAddPost={onAddPost} 
        onPostChange={onPostChange}
        newPostText = {state.profilePage.newPostText}
        posts = {state.profilePage.posts}
        
        />)
}
