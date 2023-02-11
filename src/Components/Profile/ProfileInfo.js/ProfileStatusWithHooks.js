import React, {useState} from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks =(props)=>{
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)
    const activateEditMode = ()=>{
        setEditMode(true);
    }
    const deactivateEditMode = ()=>{
        setEditMode(false);
    }
    const onStatusChange = (e)=>{
        setStatus(e.currentTarget.value);
    }
    return (
        <div className={classes.ProfileStatus}>
                {
                    !editMode &&
                    <div>
                        <span onClick={activateEditMode}>{props.status || "_____"}</span>
                    </div>
                }
                {
                    editMode &&
                    <div>
                        <input 
                        onChange={onStatusChange}
                        autoFocus={true} 
                        onBlur={deactivateEditMode}
                        value={status}/>
                    </div>
                }
                
            </div>
    )
}
export default ProfileStatusWithHooks;