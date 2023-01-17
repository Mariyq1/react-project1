import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo.js/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

export default function Profile(props){
    
    return <div className="Profile">
        <ProfileInfo/>
        <MyPostsContainer store = {props.store}/>
    </div>
}