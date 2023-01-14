import React from "react";
import MyPosts from "./Posts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo.js/ProfileInfo";

export default function Profile(props){
    
    return <div className="Profile">
        <ProfileInfo/>
        <MyPosts 
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
        />
    </div>
}