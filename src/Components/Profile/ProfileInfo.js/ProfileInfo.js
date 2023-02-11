import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
           <ProfileStatusWithHooks status={props.status} updateStatus = {props.updateStatus}/>
        </div>
       
        
    </div>
}