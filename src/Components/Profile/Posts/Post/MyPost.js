import React from "react";
import classes from "./MyPost.module.css";

export default function MyPost(props){
    return <div className="MyPost">
        <div className={classes.item}>
            Post 1
            <img src="http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-06/20130124_gaf_ux5_110.jpg?itok=MRhdFlUi"
            alt="ava"/>
             {props.message}
             <span>Likes</span>{props.counts}
        </div>
        </div>

}