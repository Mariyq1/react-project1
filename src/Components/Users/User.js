import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../Images/userPhoto.png";
import styles from './Users.module.css';


let User = ({user,followingInProgress,unfollow, follow})=>{
   let u = user.id;
    return <div>
               <span>
                    <div>
                        <NavLink to={'./../profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small: userPhoto} 
                        className={styles.userPhoto}
                        alt="Ava"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress.some
                                (id=> id===user.id)}
                            onClick={() => {unfollow(user.id);}}>           
                            Unfollow</button>
                            
                            : <button disabled={followingInProgress.some(id=> id===user.id)}
                            onClick={() => {follow(user.id);}} >
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
}

export default User;