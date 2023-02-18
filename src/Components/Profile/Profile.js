import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo.js/ProfileInfo";
import MyPostsContainer from "./Posts/MyPostsContainer";

export default function Profile(props){
    
    return <div className="Profile">
        <ProfileInfo profile={props.profile} 
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}/>
        <MyPostsContainer/>
    </div>
}