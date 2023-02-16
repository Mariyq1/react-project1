import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../Images/userPhoto.png";
import classes from './ProfileInfo.module.css'
import ProfileDataForm from "./ProfileDataForm";

export default function ProfileInfo({profile,status,updateStatus}){
    let [editMode, setEditMode] = useState(false);
    if (!profile){
        return <Preloader/>
    }
    return<div className={classes.Profile}>
        <div>
            <img src={profile.photos.large || userPhoto} 
            alt={profile.fullName}
            className={classes.mainPhoto}/>
            {editMode ? <ProfileDataForm profile={profile}/>: 
            <ProfileData profile={profile}
            goToEditMode={()=>{setEditMode(true)}}
            />}
          
           <ProfileStatusWithHooks status={status} updateStatus = {updateStatus}/>
        </div>
       
        
    </div>
}
const ProfileData = ({profile, goToEditMode}) =>{
    return <div>
                <div>
                    <button onClick={goToEditMode}>
                        Edit
                    </button>
                </div>
                <div>
                    <b>Full Name:</b> {profile.fullName}
                </div>
            <div>
                <b>Looking for a job:</b> {profile.lokingForAjob ? "yes" : "no"}
            </div>
            {profile.lokingForAjob &&
            <div>
                <b>My skills:</b> {profile.lokingForAjobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key} 
                    contactValue={profile.contacts[key]}
                    key={key}
                    />
                })}
            </div>
            </div>

}

const Contact =({contactTitle, contactValue})=>{
    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>

}