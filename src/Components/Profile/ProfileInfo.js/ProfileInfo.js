import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export default function ProfileInfo({profile,status,updateStatus}){
    if (!profile){
        return <Preloader/>
    }
    return<div className="ProfileInfo">
        <div>
        <img src="https://zaycafe.ru/wp-content/uploads/2019/05/top-mobile.jpg" alt="rabbit"/>
        </div>
        <div>
            <img src={profile.photos.large} alt={profile.fullName}/>
           <ProfileStatusWithHooks status={status} updateStatus = {updateStatus}/>
        </div>
       
        
    </div>
}