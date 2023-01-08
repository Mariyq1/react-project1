import React from "react";
import MyPost from "./Post/MyPost";
import classes from "./MyPosts.module.css";


export default function MyPosts(props){
    let myPostsElement = props.postData
    .map(d=> <MyPost name={d.message} counts={d.counts}/>);
    return <div className={classes.postsBox}>
         <div>
            <h3>My Posts</h3> 
        </div>
            <form>
                <input type="search" placeholder="Type your post"/>
                <input type="submit"/>
            </form>
        {myPostsElement}        
    </div>
}