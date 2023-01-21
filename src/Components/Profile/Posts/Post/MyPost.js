import React from "react";
import classes from "./MyPost.module.css";

export default function MyPost(props){
    return <div className="MyPost">
        <div className={classes.item}>
            Post 1
            
             {props.name}
             <span>Likes</span>{props.counts}
        </div>
        </div>

}