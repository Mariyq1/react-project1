import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

export default function ProfileInfo(props){
    if (!props.profile){
        return <Preloader/>
    }
    return<div className="ProfileInfo">
        <div>
        <img src="https://zaycafe.ru/wp-content/uploads/2019/05/top-mobile.jpg" alt="rabbit"/>
        </div>
        <div>
            <img src={props.profile.photos.large} alt={props.profile.fullName}/>
           <ProfileStatus status={props.statu} updateStatus = {props.updateStatus}/>
        </div>
       
        
    </div>
}